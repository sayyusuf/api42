export type TeamsUploadsParams = {
	team_id?: string;
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "team_id" | "upload_id" | "final_mark" | "comment" | "created_at" | "updated_at";
