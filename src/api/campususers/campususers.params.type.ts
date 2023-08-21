export type CampusUserParams = {
	user_id?: string | number;
	sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
	"filter[campus_id]"?: number | string;
}

type ParamStringLiterals = "id" | "user_id" | "campus_id" | "is_primary" | "created_at" | "updated_at";