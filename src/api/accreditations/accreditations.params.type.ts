/**
 * `sort`: `id | name | user_id | cursus_id | difficulty | validated | created_at | updated_at`
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


export type AccreditationParams =  {
    sort?: "id" |  "name" | "user_id" | "cursus_id" | "difficulty" | "validated" | "created_at" | "updated_at",
    "filter[id]"?: number[] ,
    "filter[name]"?: string[],
    "filter[user_id]"?: number[] | string[],
    "filter[cursus_id]"?: number[],
    "filter[difficulty]"?: string[],
    "filter[validated]"?: boolean[],
    "filter[created_at]"?: string[],
    "filter[updated_at]"?: string[]

    "range[id]"?: string ,
    "range[name]"?: string,
    "range[user_id]"?: string,
    "range[cursus_id]"?: string,
    "range[difficulty]"?: string,
    "range[validated]"?: string,
    "range[created_at]"?: string,
    "range[updated_at]"?: string,

    page?: number,
    "page[number]"?: number,
    "page[size]"?: number
}