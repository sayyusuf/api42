import { BaseApi42 } from "../../base/baseApi42";
import { CampusUserParams } from "./campususers.params.type";
import { CampusUser } from "./campususers.type";

export class CampusUsersApi{
	private base:BaseApi42

	constructor(base: BaseApi42){
		this.base = base
	}

	/**
     * api: `GET /v2/campus_users`
     * @param params any object or default {}
     * @returns CampusUser array
     */
	public async get_campusUsers(params?: CampusUserParams) : Promise<CampusUser[]>{
		const route = `/v2/campus_users/`;
		return await this.base.get(route, params)
	}

	/**
     * api: `GET /v2/users/:user_id/campus_users`
	 * @param user_id string | number 
     * @param params any object or default {}
     * @returns CampusUser array
     */
	public async get_users_userId_campusUsers(user_id:number | string, params?: CampusUserParams) : Promise<CampusUser[]>{
		const route = `/v2/users/${user_id}/campus_users`;
		return await this.base.get(route, params)
	}

	/**
     * api: `GET /v2/campus_users/:id`
	 * @param id string | number 
     * @returns CampusUser array
     */
	public async get_campusUsers_id(id: number | string) : Promise<CampusUser>{
		const route = `/v2/campus_users/${id}`;
		return await this.base.get(route, {})
	}

	
}