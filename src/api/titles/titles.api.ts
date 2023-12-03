import { BaseApi42 } from "../../base/baseApi42";
import { TitlesParams } from "./titles.params.type";
import { Title } from "./titles.types";

export class TitlesApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/titles
  /**
   *
   * @param params
   * @returns Return all the titles
   */
  public async get_titles(params?: TitlesParams): Promise<Title[]> {
    return await this.base.get(`/v2/titles`, params);
  }

  // GET /v2/users/:user_id/titles
  /**
   *
   * @param user_id
   * @param params
   * @returns Return all the titles of the given User
   */
  public async get_users_userId_titles(
    user_id?: string,
    params?: TitlesParams
  ): Promise<Title[]> {
    return await this.base.get(`/v2/users/${user_id}/titles`, params);
  }

  // GET /v2/titles/:id
  /**
   *
   * @param id
   * @returns Get a title
   */
  public async get_titles_id(id?: string): Promise<Title> {
    return await this.base.get(`/v2/titles/${id}`);
  }
}
