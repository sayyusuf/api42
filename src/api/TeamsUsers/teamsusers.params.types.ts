export type TeamsUsersParams = {
  
	user_id?: string;
  team_id?: string;
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "team_id" | "user_id" | "leader" | "validated" | "created_at" | "updated_at" | "occurrence";
