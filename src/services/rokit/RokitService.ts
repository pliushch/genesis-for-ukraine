import { BaseService } from '../BaseService';
import { RokitReport, RokitReportDto } from './RokitReport';

export class RokitService extends BaseService {
  private fetching: Promise<RokitReportDto> | null = null;

  async getReport(): Promise<RokitReport> {
    if (!this.fetching) {
      this.fetching = this.httpClient.get<RokitReportDto>('/rokit/report');
    }
    const dto = await this.fetching;
    this.fetching = null;
    return new RokitReport(dto);
  }
}
