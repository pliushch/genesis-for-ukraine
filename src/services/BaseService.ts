import HttpClient from 'src/services/HttpClient';

export abstract class BaseService {
  protected httpClient: HttpClient;


  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
}
