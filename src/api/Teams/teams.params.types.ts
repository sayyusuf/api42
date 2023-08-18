export type TeamsParams = {
  
	cursus_id?: string;
  user_id?: string;
  project_id?: string;
  project_session_id?: string;
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "project_id" | "name" | "created_at" | "updated_at" | "locked_at" | "closed_at" | "final_mark" | "repo_url" | "repo_uuid" | "deadline_at" | "terminating_at" | "project_session_id" | "status" | "cursus" | "active_cursus" | "campus" | "primary_campus" | "locked" | "closed" | "deadline" | "terminating" | "with_mark";
