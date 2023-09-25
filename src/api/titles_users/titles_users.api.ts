import { BaseApi42 } from "../../base/baseApi42";
import { TitleUser } from "./titles_users.types";

export class TitlesUsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/titles/:title_id/titles_users
  /**
   * Return all the titles users of the given Title
   */
  public async get_titles_titleId_titles_users(
    title_id: string,
    page?: string
  ): Promise<TitleUser[]> {
    return await this.base.get(`/v2/titles/${title_id}/titles_users`);
  }

  // GET /v2/users/:user_id/titles_users
  /**
   * Return all the titles users of the given User
   */
  public async get_users_userId_titles_users(
    user_id: string,
    page?: string
  ): Promise<TitleUser[]> {
    return await this.base.get(`/v2/users/${user_id}/titles_users`);
  }

  // GET /v2/titles_users
  /**
   * Return all the titles users
   */
  public async get_titles_users(page?: string): Promise<TitleUser[]> {
    return await this.base.get(`/v2/titles_users`);
  }

  // GET /v2/titles_users/:id
  /**
   * Get a titles user
   */
  public async get_titles_users_id(id: string): Promise<TitleUser> {
    return await this.base.get(`/v2/titles_users/${id}`);
  }
}
