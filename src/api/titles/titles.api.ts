import { BaseApi42 } from "../../base/baseApi42";

export class TitlesApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/titles
  /**
   * Return all the titles
   */
  public async get_titles(): Promise<Title[]> {
    return await this.base.get(`/v2/titles`);
  }

  // GET /v2/users/:user_id/titles
  /**
   * Return all the titles of the given User
   */
  public async get_users_userId_titles(
    user_id?: string,
    page?: string
  ): Promise<Title[]> {
    return await this.base.get(`/v2/users/${user_id}/titles`);
  }

  // GET /v2/titles/:id
  /**
   * Get a title
   */
  public async get_titles_id(id?: string): Promise<Title> {
    return await this.base.get(`/v2/titles/${id}`);
  }
}
