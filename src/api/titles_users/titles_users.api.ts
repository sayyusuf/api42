import { BaseApi42 } from "../../base/baseApi42";
import { TitlesUsersParams } from "./titles_users.params.type";
import { TitleUser } from "./titles_users.types";

export class TitlesUsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/titles/:title_id/titles_users
  /**
   *
   * @param title_id
   * @param params
   * @returns Return all the titles users of the given Title
   */
  public async get_titles_titleId_titles_users(
    title_id: string,
    params?: TitlesUsersParams
  ): Promise<TitleUser[]> {
    return await this.base.get(`/v2/titles/${title_id}/titles_users`, params);
  }

  // GET /v2/users/:user_id/titles_users
  /**
   *
   * @param user_id
   * @param params
   * @returns Return all the titles users of the given User
   */
  public async get_users_userId_titles_users(
    user_id: string,
    params?: TitlesUsersParams
  ): Promise<TitleUser[]> {
    return await this.base.get(`/v2/users/${user_id}/titles_users`, params);
  }

  // GET /v2/titles_users
  /**
   *
   * @param params
   * @returns Return all the titles users
   */
  public async get_titles_users(
    params?: TitlesUsersParams
  ): Promise<TitleUser[]> {
    return await this.base.get(`/v2/titles_users`, params);
  }

  // GET /v2/titles_users/:id
  /**
   * 
   * @param id 
   * @returns Get a titles user
   */
  public async get_titles_users_id(id: string): Promise<TitleUser> {
    return await this.base.get(`/v2/titles_users/${id}`);
  }
}
