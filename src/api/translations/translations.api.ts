import { BaseApi42 } from "../../base/baseApi42";

export class TransaltionsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/translations
  /**
   * Return all the translations
   */
  public async get_translations(
    sort?: string,
    filter?: string,
    page?: string
  ): Promise<Translation[]> {
    return await this.base.get(`/v2/translations`);
  }

  // GET /v2/translations/:id
  /**
   * Get a translation
   */
  public async get_translations_id(id: string): Promise<Translation> {
    return await this.base.get(`/v2/translations/${id}`);
  }
}
