import {BaseApi42} from "./base_api42";
import  {User} from "./type42"
export class Api42 {
    private base: BaseApi42;

	static async new(clientId: string, clientSecret: string, grantType = "client_credentials"): Promise<Api42> {		
        const base = await BaseApi42.new(clientId, clientSecret, grantType);
		return new Api42(base);
	}
	
    private constructor (base: BaseApi42)
	{
		this.base = base;
	}



    //Get a user
    public async users_id(user_id): Promise<User>{
        return await this.base.get("/v2/users/" + user_id);
    }

    //Show the current resource owner
    public async me(): Promise<User>{
        return await this.base.get("/v2/me");
    }

    //Return all the users of the given Group
    public async me(group_id, user_id): Promise<User>{
        return await this.base.get("/v2/groups/" + group_id + "/" + user_id);
    }
	
}
