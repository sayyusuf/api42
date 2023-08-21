import { BaseApi42 } from "./base/baseApi42";
import { UsersApi } from "./api/users/users.api";
import { ApiData } from "./base/types";
import { LanguageUsersApi } from "./api/languages_users/languages_users.api";
import { LocationsApi } from "./api/locations/locations.api";
import { NotesApi } from "./api/notes/notes.api";
import { NotionsApi } from "./api/notions/notions.api";
import { OffersApi } from "./api/offers/offers.api";
import { PartnershipsApi } from "./api/partnerships/partnerships.api";
import { PartnershipsUsersApi } from "./api/partnerships_users/partnerships_users.api";
import { PatronagesReportsApi } from "./api/patronages_reports/patronages_reports.api";
import { ProductsApi } from "./api/products/products.api";
import { ProjectDataApi } from "./api/project_data/project_data.api";
import { TitlesApi } from "./api/titles/titles.api";
import { TitlesUsersApi } from "./api/titles_users/titles_users.api";

export class IntraApi{
	private base: BaseApi42
	public users: UsersApi
	public language_users: LanguageUsersApi
	public locations: LocationsApi
	public notes: NotesApi
	public notions: NotionsApi
	public offers: OffersApi
	public partnerships: PartnershipsApi
	public partnerships_users: PartnershipsUsersApi
	public patronages_reports: PatronagesReportsApi
	public products: ProductsApi
	public project_data: ProjectDataApi
	public titles: TitlesApi
	public titles_users: TitlesUsersApi
	
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
		this.offers = new OffersApi(this.base)
		this.partnerships = new PartnershipsApi(this.base)
		this.partnerships_users = new PartnershipsUsersApi(this.base)
		this.patronages_reports = new PatronagesReportsApi(this.base)
		this.products = new ProductsApi(baseApi)
		this.project_data = new ProjectDataApi(baseApi)
		this.titles = new TitlesApi(baseApi)
		this.titles_users = new TitlesUsersApi(baseApi)
		// this.achievements = new AchievementsApi(this.base)
	}
}