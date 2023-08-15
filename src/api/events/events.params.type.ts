export type EventsParams = {
  
  curcus_id? : string;
  campus_id? : string;
	user_id?: string;
  	sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "begin_at" | "end_at" | "name" | "description" | "location" |  "kind" | "max_people" | "created_at" | "updated_at" | "prohibition_of_cancellation" | "difficulty" | "remote" | "future" | "end";
