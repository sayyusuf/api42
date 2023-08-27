export type CampusUserParams = {
	user_id?: string,
	sort?: "id" | "user_id" | "campus_id" | "is_primary" | "created_at" | "updated_at",
	"filter[id]"?: number[],
	"filter[user_id]"?: string[],
	"filter[campus_id]"?: number[],
	"filter[is_primary]"?: boolean[],
	"filter[created_at]"?: string[],
	"filter[updated_at]"?: string[],
	"range[id]"?: string,
	"range[user_id]"?: string,
	"range[campus_id]"?: string,
	"range[is_primary]"?: string,
	"range[created_at]"?: string,
	"range[updated_at]"?: string,
	page?: number,
	"page[number]"?: number,
	"page[size]"?: number
}