import { BaseApi42 } from "../../base/baseApi42";
import { CampusUserParams } from "./campususers.params.type";
import { CampusUser } from "./campususers.type";

export class CampusUsersApi{
	private base:BaseApi42

	constructor(base: BaseApi42){
		this.base = base
	}

	public async get_campusUsers(params: CampusUserParams) : Promise<CampusUser[]>{
		const route = `/v2/campus_users/`;
		return await this.base.get(route, params)
	}

	public async get_users_userId_campusUsers(user_id:string, params: CampusUserParams) : Promise<CampusUser[]>{
		const route = `/v2/users/${user_id}/campus_users`;
		return await this.base.get(route, params)
	}

	public async get_campusUsers_id(id: number) : Promise<CampusUser>{
		const route = `/v2/campus_users/${id}`;
		return await this.base.get(route, {})
	}

	
}