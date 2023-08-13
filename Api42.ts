import {BaseApi42} from "./BaseApi42";
import  {User} from "./Type42"
import { UsersApi } from "./sub_classes/UserApi42/UsersApi";

export class Api42 {
    private base: BaseApi42;
    
    public users: UsersApi;

	static async new(clientId: string, clientSecret: string, grantType = "client_credentials"): Promise<Api42> {		
        const base = await BaseApi42.new(clientId, clientSecret, grantType);
		return new Api42(base);
	}
	
    private constructor (base: BaseApi42)
	{
		this.base = base;
        this.users = new UsersApi(base);
	}
}
