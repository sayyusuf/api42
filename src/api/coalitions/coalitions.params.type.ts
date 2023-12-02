import { Coalition } from "./coalitions.type";

export type CoalitionsParams = {
	user_id?: string,
	bloc_id?: string,
	sort?: "id" | "bloc_id" | "user_id" | "name" | "image" | "slug" | "created_at" | "updated_at" | "color" | "cover",
	page?: number,
	"page[number]"?: number,
	"page[size]"?: number,
	"coalition[bloc_id]"?: string,
	"coalition[user_id]"?: string,
	"coalition[name]"?: string,
	"coalition[image]"?: any,
	"coalition[slug]"?: string,
	"coalition[color]"?: string,
	"coalition[cover]"?: any
}

export type CoalitionIdParams = {
	coalition: Coalition;
	"coalition[bloc_id]"?: string,
	"coalition[user_id]"?: string,
	"coalition[name]"?: string,
	"coalition[image]"?: any,
	"coalition[slug]"?: string,
	"coalition[color]"?: string,
	"coalition[cover]"?: any
}