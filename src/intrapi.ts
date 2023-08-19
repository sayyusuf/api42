import { BaseApi42 } from "./base/baseApi42";
import { UsersApi } from "./api/users/users.api";
import { ApiData } from "./base/types";
import { LanguageUsersApi } from "./api/languages_users/languages_users.api";
import { LocationsApi } from "./api/locations/locations.api";
import { NotesApi } from "./api/notes/notes.api";
import { NotionsApi } from "./api/notions/notions.api";

export class IntraApi{
	private base: BaseApi42
	public users: UsersApi
	public language_users: LanguageUsersApi
	public locations: LocationsApi
	public notes: NotesApi
	public notions: NotionsApi
	
	static async new(apiData: ApiData) : Promise<IntraApi>{
		const base = await BaseApi42.new(apiData);
		return new IntraApi(base)
	}
	private constructor(baseApi: BaseApi42){
		this.base = baseApi
		this.users = new UsersApi(this.base)
		this.language_users = new LanguageUsersApi(this.base)
		this.locations = new LocationsApi(this.base)
		this.notes = new NotesApi(this.base)
		this.notions = new NotionsApi(this.base)
		// this.achievements = new AchievementsApi(this.base)
	}
}