import { BaseApi42 } from "../../base/baseApi42";
import { PatronagesReportsParams } from "./partronages_reports.params.type";

export class PatronagesReportsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/patronages_reports/graph(/on/:field(/by/:interval))
  /**
   *
   * @param params
   * @returns Return grouped temporal data on patronages reports
   */
  public async get_patronages_reports(params?: PatronagesReportsParams) {
    return await this.base.get(`/v2/patronages_reports/graph`, params);
  }
}
