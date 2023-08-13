import { AnyTxtRecord } from "dns";
import {BaseApi42} from "../../BaseApi42";
import  {User} from "../../Type42"

export class UsersApi extends BaseApi42 {

	
    constructor (clientId: string, clientSecret: string, grantType = "client_credentials"){
        super(clientId, clientSecret, grantType)
	}

    //Get a user
    public async users_id(user_id): Promise<User>{
        return await this.get("/v2/users/" + user_id, {});
    }

	
}
