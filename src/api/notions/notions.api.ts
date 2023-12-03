import { BaseApi42 } from "../../base/baseApi42";
import { NotionsParams } from "./notions.params.type";
import { Notion } from "./notions.types";

export class NotionsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/cursus/:cursus_id/notions
  /**
   *
   * @param cursus_id
   * @param params
   * @returns Return all the notions of the given Cursus
   */
  public async get_cursus_cursusId_notions(
    cursus_id: string,
    params?: NotionsParams
  ): Promise<Notion[]> {
    return await this.base.get(`/v2/cursus/${cursus_id}/notions`, params);
  }

  // GET /v2/tags/:tag_id/notions
  /**
   *
   * @param tag_id
   * @param params
   * @returns Return all the notions of the given Tag
   */
  public async get_tags_tagId_notions(
    tag_id: string,
    params?: NotionsParams
  ): Promise<Notion[]> {
    return await this.base.get(`/v2/tags/${tag_id}/notions`, params);
  }

  // GET /v2/notions
  /**
   *
   * @param params
   * @returns Return all the notions
   */
  public async get_notions(params?: NotionsParams): Promise<Notion[]> {
    return await this.base.get(`/v2/notions`, params);
  }

  // GET /v2/notions/:id
  /**
   * 
   * @param id 
   * @returns Get a notion
   */
  public async get_notions_id(id: string): Promise<Notion> {
    return await this.base.get(`/v2/notions/${id}`);
  }
}
