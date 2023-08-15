export type EventsUsersParams = {
  
	user_id?: string;
  event_id?: string;
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "event_id" | "user_id" | "created_at" | "updated_at" | "campus_id";
