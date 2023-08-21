import { BaseApi42 } from "../../base/baseApi42";

export class PatronagesReportsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/patronages_reports/graph(/on/:field(/by/:interval))
  /**
   * Return grouped temporal data on patronages reports
   */
  public async get_patronages_reports(
    field?: string,
    interval?: string,
    sort?: string,
    filter?: string,
    range?: string
  ) {
    return await this.base.get(`/v2/patronages_reports/graph`);
  }
}
