import { BaseApi42 } from "../../base/baseApi42";
import { TranslationsParams } from "./translations.params.type";
import { Translation } from "./translations.types";

export class TransaltionsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/translations
  /**
   *
   * @param params
   * @returns Return all the translations
   */
  public async get_translations(
    params?: TranslationsParams
  ): Promise<Translation[]> {
    return await this.base.get(`/v2/translations`, params);
  }

  // GET /v2/translations/:id
  /**
   *
   * @param id
   * @returns Get a translation
   */
  public async get_translations_id(id: string): Promise<Translation> {
    return await this.base.get(`/v2/translations/${id}`);
  }
}
