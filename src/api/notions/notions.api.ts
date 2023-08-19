import { BaseApi42 } from "../../base/baseApi42";

export class NotionsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/cursus/:cursus_id/notions
  /**
   * Return all the notions of the given Cursus
   */
  public async get_cursus_cursusId_notions(
    cursus_id: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ) {
    return await this.base.get(`/v2/cursus/${cursus_id}/notions`);
  }

  // GET /v2/tags/:tag_id/notions
  /**
   * Return all the notions of the given Tag
   */
  public async get_tags_tagId_notions(
    tag_id: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ) {
    return await this.base.get(`/v2/tags/${tag_id}/notions`);
  }

  // GET /v2/notions
  /**
   * Return all the notions
   */
  public async get_notions(
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ) {
    return await this.base.get(`/v2/notions`);
  }

  // GET /v2/notions/:id
  /**
   * Get a notion
   */
  public async get_notions_id(id: string) {
    return await this.base.get(`/v2/notions/${id}`);
  }
}
