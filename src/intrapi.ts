import { BaseApi42 } from "./base/baseApi42";
import { UsersApi } from "./api/users/users.api"
import { ApiData } from "./base/types";
import { LanguageUsersApi } from "./api/languages_users/languages_users.api";
import { LocationsApi } from "./api/locations/locations.api";

export class IntraApi{
	private base: BaseApi42
	public users: UsersApi
	public language_users: LanguageUsersApi
	public locations: LocationsApi
	
	static async new(apiData: ApiData) : Promise<IntraApi>{
		const base = await BaseApi42.new(apiData);
		return new IntraApi(base)
	}
	private constructor(baseApi: BaseApi42){
		this.base = baseApi
		this.users = new UsersApi(this.base)
		this.language_users = new LanguageUsersApi(this.base)
		this.locations = new LocationsApi(this.base)
		// this.achievements = new AchievementsApi(this.base)
	}
}