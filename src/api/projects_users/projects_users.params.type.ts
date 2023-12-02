
 /* 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 
export type ProjectsUsersParams = {
    project_id?:    number,
    user_id?:       number,

    "filter[id]"?:          number[] | string[],
    "filter[project_id]"?:   number[] | string[],
    "filter[user_id]"?:     number[] | string[],
    "filter[created_at]"?:  string[],
    "filter[updated_at]"?:  string[],
    "filter[occurrence]"?:  string[],
    "filter[final_mark]"?:  string[],
    "filter[retriable_at]"?:    string[],
    "filter[marked_at]"?:   string[],
    "filter[status]"?:      string[],
    "filter[cursus]"?:      string[],
    "filter[campus]"?:      string[],
    "filter[retriable]"?:   string[],
    "filter[marked]"?:      string[],
 
    "range[id]"?:           string,   
    "range[project_id]"?:   string,
    "range[user_id]"?:      string,
    "range[created_at]"?:   string,
    "range[updated_at]"?:   string,
    "range[occurrence]"?:   string,
    "range[final_mark]"?:   string,
    "range[retriable_at]"?: string,
    "range[marked_at]"?:    string,
    "range[status]"?:       string,

    page?:                  number,
    "page[number]"?:        number,
    "page[size]"?:          number
}



export type ProjectsUsersGraphParams = {
    field?:     "created_at" |  "updated_at" | "retriable_at",
    interval?:  "day" | "week | month" | "quarter" | "year" | "hour_of_day" | "day_of_week" | "day_of_month" | "month_of_year",

    "filter[id]"?:          number[] | string[], 
    "filter[project_id]"?:  number[] | string[],
    "filter[user_id]"?:     number[] | string[],
    "filter[created_at]"?:  string[],
    "filter[updated_at]"?:  string[],
    "filter[occurrence]"?:  string[],
    "filter[final_mark]"?:  string[],
    "filter[retriable_at]"?:string[],
    "filter[marked_at]"?:   string[],
    "filter[status]"?:      string[],
    "filter[cursus]"?:      string[],
    "filter[campus]"?:      string[],
    "filter[retriable]"?:   string[],
    "filter[marked]"?:      string[],

    "range[id]"?:           string,   
    "range[project_id]"?:   string,
    "range[user_id]"?:      string,
    "range[created_at]"?:   string,
    "range[updated_at]"?:   string,
    "range[occurrence]"?:   string,
    "range[final_mark]"?:   string,
    "range[retriable_at]"?: string,
    "range[marked_at]"?:    string,
    "range[status]"?:       string,
}
export type ProjectsUsersInputs = {
    field?:     "created_at" |  "updated_at" | "retriable_at",
    interval?:  "day" | "week | month" | "quarter" | "year" | "hour_of_day" | "day_of_week" | "day_of_month" | "month_of_year",
}