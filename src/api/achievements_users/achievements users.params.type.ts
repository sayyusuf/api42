/**
 * `sort`: `id | user_id | achievement_id | nbr_of_success | created_at | updated_at | rewarded`
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 * 
 * `page` : `number`
 * 
 *  `"page[number]"` : `number`
 * 
 *  `"page[size]"` : `number`
 */


export type AchievementsUsersParams  =  {
    achievement_id?: string;
    sort?: "id" | "user_id" | " achievement_id" | "nbr_of_success" | "created_at" | "updated_at" | "rewarded",
    "filter[id]"?:              number[] ,
    "filter[user_id]"?:         number[] | string[],
    "filter[achievement_id]"?:  number[],
    "filter[nbr_of_success]"?:  number[],
    "filter[created_at]"?:      string[],
    "filter[updated_at]"?:      string[]
    "filter[rewarded]"?:        boolean[],

    "range[id]"?:               string,
    "range[user_id]"?:          string,
    "range[achievement_id]"?:   string,
    "range[nbr_of_success]"?:   string,
    "range[created_at]"?:       string,
    "range[updated_at]"?:       string,
    "range[rewarded]"?:         string,

    page?: number,
    "page[number]"?: number,
    "page[size]"?: number
}