import { AnyTxtRecord } from "dns";
import {BaseApi42} from "../../base/baseApi42";
import  {User} from "./users.types"

export class UsersApi {
    private base: BaseApi42;
	
    constructor (base: BaseApi42){
		this.base = base;
	}


    //Get a user
    public async users_id(user_id: string): Promise<User>{
        return await this.base.get("/v2/users/" + user_id, {});
    }
}
