export type CorrectionPointHistoricsParams = {
	sort?: "id" | "user_data_id" | "scale_team_id" | "reason" | "sum" | "created_at" | "updated_at" | "total",
	"filter[id]"?: number[],
	"filter[user_data_id]"?: number[],
	"filter[scale_team_id]"?: number[],
	"filter[reason]"?: string[],
	"filter[sum]"?: number[],
	"filter[created_at]"?: string[],
	"filter[updated_at]"?: string[],
	"filter[total]"?: number[],
	"range[id]"?: string,
	"range[user_data_id]"?: string,
	"range[scale_team_id]"?: string,
	"range[reason]"?: string,
	"range[sum]"?: string,
	"range[created_at]"?: string,
	"range[updated_at]"?: string,
	"range[total]"?: string,
	page?: number,
	"page[number]"?: number,
	"page[size]"?: number
}