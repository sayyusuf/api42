import { BaseApi42 } from "../../base/baseApi42";

export class PartnershipsUsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/partnerships/:partnership_id/partnerships_users
  /**
   * Return all the partnerships users of the given Partnership
   */
  public async get_partnerships_partnershipId_partnerships_users(
    partnership_id?: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<PartnershipUsers[]> {
    return await this.base.get(
      `/v2/partnerships/${partnership_id}/partnerships_users`
    );
  }

  // GET /v2/partnerships_users
  /**
   * Return all the partnerships users
   */
  public async get_partnerships_users(
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<PartnershipUsers[]> {
    return await this.base.get(`/v2/partnerships_users`);
  }

  // GET /v2/partnerships_users/:id
  /**
   * Get a partnerships user
   */
  public async get_partnerships_users_id(
    id: string
  ): Promise<PartnershipUsers> {
    return await this.base.get(`/v2/partnerships_users/${id}`);
  }
}
