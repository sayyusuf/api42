import { BaseApi42 } from "../../base/baseApi42";
import { User } from "./users.type";
import { UserParams } from "./users.params.type";

export class UsersApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  
  public async get_users_id(user_id: string, userParams: UserParams): Promise<User> {
    return await this.base.get("/v2/users/" + user_id, {});
  }

  public async get_users(): Promise<User[]> {
    return await this.base.get("/v2/users/", {});
  }

}