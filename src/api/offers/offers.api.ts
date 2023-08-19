import { BaseApi42 } from "../../base/baseApi42";

export class OffersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/offers
  /**
   * Return all the offers
   */
  public async get_offers(sort?: string, filter?: string, page?: string) {
    return await this.base.get(`/v2/offers`);
  }

  // GET /v2/offers/:id
  /**
   * Get an offer
   */
  public async get_offers_id(id: string) {
    return await this.base.get(`/v2/offers/${id}`);
  }
}
