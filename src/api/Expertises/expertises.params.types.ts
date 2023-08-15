export type ExpertisesParams = {
  
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "name" | "slug" | "created_at" | "updated_at" | "kind";
