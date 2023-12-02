import { BaseApi42 } from "../../base/baseApi42";
import { OffersParams } from "./offers.params.type";

export class OffersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/offers
  /**
   *
   * @param params
   * @returns Return all the offers
   */
  public async get_offers(params?: OffersParams) {
    return await this.base.get(`/v2/offers`, params);
  }

  // GET /v2/offers/:id
  /**
   *
   * @param id
   * @returns Get an offer
   */
  public async get_offers_id(id: string) {
    return await this.base.get(`/v2/offers/${id}`);
  }
}
