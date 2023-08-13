import {BaseApi42} from "./base_api42";
import  {TitlesUser} from "./type42"
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


    //Return all the titles users
    public async all_titles(): Promise<TitlesUser>{
        return await this.base.get("/v2/titles_users");
    }

    //Get a titles user
    public async user_title(user_id): Promise<TitlesUser>{
        return await this.base.get("/v2/titles_users/" + user_id);
    }


    //Return all the titles users of the given User
    public async me(user_id): Promise<TitlesUser>{
        return await this.base.get("/v2/users/" + user_id + "/titles_users ");
    }

  //Return all the titles users of the given Title
    public async me(title_id): Promise<TitlesUser>{
        return await this.base.get("/v2/groups/" + title_id + "/titles_users");
    }
	
}
