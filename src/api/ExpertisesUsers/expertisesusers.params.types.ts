export type ExpertisesUsersParams = {
  expertise_id? : string;
  user_id? : string;
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "expertise_id" | "user_id" | "interested" | "value" | "created_at" | "updated_at" | "contact_me";
