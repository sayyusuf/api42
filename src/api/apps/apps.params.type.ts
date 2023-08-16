/**
 *   `user_id`:  `string | number`
 * 
 *   `sort`:     `"id" | "name" | "token" | "user_id" | "created_at" | "updated_at" | "allowed_origins"`
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 * 
 */

export type AppsParams = {
    user_id?:           string | number,
    sort?:              "id" | "name" | "token" | "user_id" | "created_at" | "updated_at" | "allowed_origins",
    "filter[id]"?:      string[] | number[],
    "filter[name]"?:    string[],
    "filter[uid]"?:     string[],
    "filter[owner_id]"?:string[] | number[],
    "filter[website]"?: string[],

    "range[id]"?:      string,
    "range[name]"?:    string,
    "range[uid]"?:     string,
    "range[owner_id]"?:string,
    "range[website]"?: string,
}
