import { AnyTxtRecord } from "dns";
import {BaseApi42} from "./BaseApi42";
import  {User} from "./Type42"

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}

    //Get a user
    public async users_id(user_id): Promise<User>{
        return await this.base.get("/v2/users/" + user_id, {});
    }

	
}
