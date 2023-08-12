import {BaseApi42} from "./base_api42";

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




    public async users_id(user_id): Promise<any>{
        return await this.base.get("/v2/users/" + user_id);

    }
}