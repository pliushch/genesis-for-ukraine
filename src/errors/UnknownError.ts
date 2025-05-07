export class UnknownError extends Error {
  public originalError: unknown;

  public details: string;

  constructor(originalError: unknown) {
    super('Unknown Error');
    this.originalError = originalError;
    this.details = JSON.stringify(originalError);
  }
}
