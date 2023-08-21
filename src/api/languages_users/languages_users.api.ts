import { BaseApi42 } from "../../base/baseApi42";

export class LanguageUsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/languages_users/graph(/on/:field(/by/:interval))
  /**
   * Return grouped temporal data on languages users
   */
  public async languages_users_graph(
    field?: "created_at",
    interval?: "month_of_year",
    sort?: string,
    filter?: string,
    range?: string
  ) {
    return await this.base.get(`/v2/languages_users/graph`);
  }

  // GET /v2/users/:user_id/languages_users
  /**
   * Return all the languages users of the given User
   */
  public async users_languages_users(
    user_id: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<LanguageUser[]> {
    return await this.base.get(`/v2/users/${user_id}/languages_users`);
  }

  // GET /v2/languages_users
  /**
   * Return all the languages users
   */
  public async get_languages_users(
    user_id?: string,
    sort?: string,
    filter?: string,
    range?: string,
    page?: string
  ): Promise<LanguageUser[]> {
    return await this.base.get(`/v2/languages_users`);
  }

  // GET /v2/users/:user_id/languages_users/:id
  /**
   * Get a languages user of the given Id, associated with the given User
   */
  public async get_users_userId_languages_users_id(
    user_id: string,
    id: string
  ): Promise<LanguageUser> {
    return await this.base.get(`/v2/users/${user_id}/languages_users/${id}`);
  }

  // GET /v2/languages_users/:id
  /**
   * Get a languages user
   */
  public async get_languages_users_id(id: string): Promise<LanguageUser> {
    return await this.base.get(`/v2/languages_users/${id}`);
  }
}
