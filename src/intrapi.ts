import { BaseApi42 } from "../BaseApi42";
import { UsersApi } from "../sub_classes/UsersApi/UsersApi";

class IntraApi{
	private base: BaseApi42
	public users: UsersApi
	public async new(clientId: string, clientSecret: string, grantType = "client_credentials"){
		this.base = await BaseApi42.new(clientId, clientSecret, grantType);
		this.users = new UsersApi(this.base)
	}
	private constructor(){}
}