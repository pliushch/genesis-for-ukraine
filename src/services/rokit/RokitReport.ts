export type RokitReportDto  = {
  total: number;
  projects: Array<ProjectReport>
}

type ProjectReport = {
  project: string;
  amount: number;
}


export class RokitReport {
  constructor(private readonly dto: RokitReportDto) {}

  getProjectIncome(project: string): number {
    return this.dto.projects.find(p => p.project === project)?.amount || 0;
  }

  getTotalIncome(): number {
    return this.dto.total;
  }
}