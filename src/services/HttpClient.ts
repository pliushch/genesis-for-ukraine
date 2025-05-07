import { ApiError } from 'src/errors';

export interface Request {
  url: string;
  method: string;
  headers?: Record<string, string>;
  body?: unknown;
}

class HttpClient {
  private refreshAccessJob: Promise<void> | null = null;

  private unauthorizedListeners: Array<() => void> = [];

  constructor(readonly apiUrl: string) {}

  onUnauthorized(listener: () => void) {
    this.unauthorizedListeners.push(listener);
  }

  async get<ResponseType = any>(url: string) {
    return this.request<ResponseType>({
      url,
      method: 'GET',
    });
  }

  async post<PayloadType = any, ResponseType = any>(url: string, payload: PayloadType) {
    return this.request<ResponseType>({
      url,
      method: 'POST',
      body: payload,
    });
  }

  async put<PayloadType = any, ResponseType = any>(url: string, payload: PayloadType) {
    return this.request<ResponseType>({
      url,
      method: 'PUT',
      body: payload,
    });
  }

  private async request<ResponseType>(reqPayload: Request): Promise<ResponseType> {
    try {
      return await this.rawRequest<ResponseType>(reqPayload);
    } catch (err) {
      if (!(err instanceof ApiError) || err.originalStatusCode !== 403) {
        throw err;
      }

      await this.refreshAccess();
      return this.rawRequest<ResponseType>(reqPayload);
    }
  }

  protected async rawRequest<ResponseType>({
    url,
    method,
    headers,
    body,
  }: Request): Promise<ResponseType> {
    const response = await fetch(
      // @TODO: use URL constructor
      `${this.apiUrl}${url}`,
      {
        method,
        headers: {
          'content-type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(body),
      },
    );
    const json = await response.json();
    if (!json.success) {
      throw new ApiError({
        originalError: json.error,
        originalStatusCode: response.status,
      });
    }
    // TODO return raw json for unifying with 'quiz' repo
    return json.data ? json.data : json;
  }

  private async refreshAccess(): Promise<void> {
    if (this.refreshAccessJob) return this.refreshAccessJob;

    this.refreshAccessJob = this.rawRequest<void>({
      url: '/auth/refresh',
      method: 'POST',
      body: {},
    })
      .catch((err) => {
        //  TODO should we check type of error?
        this.notifyUnauthorized();

        throw err;
      })
      .finally(() => {
        this.refreshAccessJob = null;
      });

    return this.refreshAccessJob;
  }

  private notifyUnauthorized() {
    this.unauthorizedListeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error(err);
      }
    });
  }
}

export default HttpClient;
