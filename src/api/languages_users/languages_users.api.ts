import { BaseApi42 } from "../../base/baseApi42";
import { LanguageUserParams } from "./languages_users.params.type";
import { LanguageUser } from "./languages_users.types";

export class LanguageUsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  /**
   * GET /v2/languages_users/graph(/on/:field(/by/:interval))
   * @param params
   * @returns grouped temporal data on languages users
   */
  public async languages_users_graph(params?: LanguageUserParams) {
    return await this.base.get(`/v2/languages_users/graph`, params);
  }

  /**
   * GET /v2/users/:user_id/languages_users
   * @param user_id
   * @param params
   * @returns all the languages users of the given User
   */
  public async users_languages_users(
    user_id: string,
    params?: LanguageUserParams
  ): Promise<LanguageUser[]> {
    return await this.base.get(`/v2/users/${user_id}/languages_users`, params);
  }

  /**
   * GET /v2/languages_users
   * @param params
   * @returns all the languages users
   */
  public async get_languages_users(
    params?: LanguageUserParams
  ): Promise<LanguageUser[]> {
    return await this.base.get(`/v2/languages_users`);
  }

  /**
   * GET /v2/users/:user_id/languages_users/:id
   * @param user_id
   * @param id
   * @returns a languages user of the given Id, associated with the given User
   */
  public async get_users_userId_languages_users_id(
    user_id: string,
    id: string
  ): Promise<LanguageUser> {
    return await this.base.get(`/v2/users/${user_id}/languages_users/${id}`);
  }

  /**
   * GET /v2/languages_users/:id
   * @param id
   * @returns a languages user
   */
  public async get_languages_users_id(id: string): Promise<LanguageUser> {
    return await this.base.get(`/v2/languages_users/${id}`);
  }
}
