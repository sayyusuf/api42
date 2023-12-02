import { BaseApi42 } from "../../base/baseApi42";
import { PartnershipsParams } from "./partnerships.params.type";
import { Partnership } from "./partnerships.types";

export class PartnershipsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/partnerships
  /**
   *
   * @param params
   * @returns Return all the partnerships
   */
  public async get_partnerships(
    params?: PartnershipsParams
  ): Promise<Partnership[]> {
    return await this.base.get(`/v2/partnerships`, params);
  }

  // GET /v2/partnerships/:id
  /**
   * Get a partnership
   */
  public async get_partnerships_id(id: string): Promise<Partnership> {
    return await this.base.get(`/v2/partnerships/${id}`);
  }
}
