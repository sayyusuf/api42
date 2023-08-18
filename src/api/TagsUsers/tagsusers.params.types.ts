export type TagsUsersParams = {
  
	user_id?: string;
  cursus_id?: string;
  campus_id?: string;
  tag_id?: string;
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals = "id" | "tag_id" | "user_id" | "created_at" | "updated_at" | "campus_id" | "cursus_id";
