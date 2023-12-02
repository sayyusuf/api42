import { BaseApi42 } from "../base/baseApi42";
import { UsersApi } from "../api/users/users.api";
import { ApiData } from "../base/types";

export class IntraApi {
  private base: BaseApi42;
  public users: UsersApi;
  static async new(apiData: ApiData): Promise<IntraApi> {
    const base = await BaseApi42.new(apiData);
    return new IntraApi(base);
  }
  private constructor(baseApi: BaseApi42) {
    this.base = baseApi;
    this.users = new UsersApi(this.base);
    // this.achievements = new AchievementsApi(this.base)
  }
}
