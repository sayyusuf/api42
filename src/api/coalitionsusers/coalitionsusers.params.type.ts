import { CoalitionsUser } from "./coalitionsusers.type"

export type CoalitionsUsersParams = {
	coalition_id?: string,
	user_id?: string,
	sort?: "id" | "coalition_id" | "user_id" | "created_at" | "updated_at" | "this_year_score" | "this_year_score_updated_at",
	"filter[id]"?: number[],
	"filter[coalition_id]"?: string[],
	"filter[user_id]"?: string[],
	"filter[created_at]"?: string[],
	"filter[updated_at]"?: string[],
	"filter[this_year_score]"?: number[],
	"filter[this_year_score_updated_at]"?: string[],
	"range[id]"?: string,
	"range[coalition_id]"?: string,
	"range[user_id]"?: string,
	"range[created_at]"?: string,
	"range[updated_at]"?: string,
	"range[this_year_score]"?: string,
	"range[this_year_score_updated_at]"?: string,
	page?: number,
	"page[number]"?: number,
	"page[size]"?: number,
	coalitions_user?: CoalitionsUser,
	'coalitions_user[coalition_id]'?: number,
	'coalitions_user[user_id]'?: number,
	'coalitions_user[this_year_score]'?: number,
	'coalitions_user[this_year_score_updated_at]'?: string | Date,
}

export type CoalitionsUsersIdParams = {
	coalitions_user?: CoalitionsUser,
	'coalitions_user[coalition_id]'?: number,
	'coalitions_user[user_id]'?: number,
	'coalitions_user[this_year_score]'?: number,
	'coalitions_user[this_year_score_updated_at]'?: string | Date,
}