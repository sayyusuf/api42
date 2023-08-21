import { BaseApi42 } from "../../base/baseApi42";

export class PartnershipsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/partnerships
  /**
   * Return all the partnerships
   */
  public async get_partnerships(
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ) {
    return await this.base.get(`/v2/partnerships`);
  }

  // GET /v2/partnerships/:id
  /**
   * Get a partnership
   */
  public async get_partnerships_id(id: string) {
    return await this.base.get(`/v2/partnerships/${id}`);
  }
}