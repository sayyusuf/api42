import { BaseApi42 } from "../../base/baseApi42";
import { PartnershipsUsersParams } from "./partnerships_users.params.type";
import { PartnershipUsers } from "./partnerships_users.types";

export class PartnershipsUsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/partnerships/:partnership_id/partnerships_users
  /**
   *
   * @param partnership_id
   * @param params
   * @returns Return all the partnerships users of the given Partnership
   */
  public async get_partnerships_partnershipId_partnerships_users(
    partnership_id: string,
    params?: PartnershipsUsersParams
  ): Promise<PartnershipUsers[]> {
    return await this.base.get(
      `/v2/partnerships/${partnership_id}/partnerships_users`,
      params
    );
  }

  // GET /v2/partnerships_users
  /**
   *
   * @param params
   * @returns Return all the partnerships users
   */
  public async get_partnerships_users(
    params?: PartnershipsUsersParams
  ): Promise<PartnershipUsers[]> {
    return await this.base.get(`/v2/partnerships_users`, params);
  }

  // GET /v2/partnerships_users/:id
  /**
   *
   * @param id
   * @returns Get a partnerships user
   */
  public async get_partnerships_users_id(
    id: string
  ): Promise<PartnershipUsers> {
    return await this.base.get(`/v2/partnerships_users/${id}`);
  }
}
