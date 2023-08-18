export type EventsUsersParams = {
  
	project_id?: string;
  issue_id?: string;
  notion_id?: string;
  cursus_id?: string;
  user_id?: string;
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "name" | "created_at" | "updated_at" | "pinner_id" | "kind" | "description" | "cursus_id"
