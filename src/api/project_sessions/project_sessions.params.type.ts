/**
 * `sort`       `"id" | "project_id" | "campus_id" | "cursus_id"  | "estimate_time" |  "created_at" |  "updated_at" | "begin_at" | "end_at" | "max_people" | "duration_days" | "terminating_after" |
 *                               "solo" | "is_subscriptable" | "minimum_mark" | "team_behaviour" | "commit" | "difficulty" | "description" | "objectives" | "divisor"`
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 

export type ProjectSessionsParams = {
    project_id:                 number,
    sor?:                       "id" | "project_id" | "campus_id" | "cursus_id"  | "estimate_time" |  "created_at" |  "updated_at" | "begin_at" | "end_at" | "max_people" | "duration_days" | "terminating_after" |
                                "solo" | "is_subscriptable" | "minimum_mark" | "team_behaviour" | "commit" | "difficulty" | "description" | "objectives" | "divisor",
    "filter[id]"?:              number[] | string[],
    "filter[project_id]"?:      number[] | string[],
    "filter[campus_id]"?:       number[] | string[],
    "filter[cursus_id]"?:       number[] | string[],
    "filter[estimate_time]"?:   string[],
    "filter[created_at]"?:      string[],
    "filter[updated_at]"?:      string[],
    "filter[begin_at]"?:        string[],
    "filter[end_at]"?:          string[],
    "filter[max_people]"?:      number[] | string[],
    "filter[duration_days]"?:   string[],
    "filter[terminating_after]"?:  string[],
    "filter[solo]"?:            string[],
    "filter[is_subscriptable]"?:boolean[] | string[],
    "filter[team_behaviour]"?:  string[],
    "filter[difficulty]"?:      string[],
    "filter[future]"?:          string[],
    "filter[end]"?:             string [],

    "range[id]"?:              string,
    "range[project_id]"?:      string,
    "range[campus_id]"?:       string,
    "range[cursus_id]"?:       string,
    "range[estimate_time]"?:   string,
    "range[created_at]"?:      string,
    "range[updated_at]"?:      string,
    "range[begin_at]"?:        string,
    "range[end_at]"?:          string,
    "range[max_people]"?:      string,
    "range[duration_days]"?:   string,
    "range[terminating_after]"?:  string,
    "range[solo]"?:            string,
    "range[is_subscriptable]"?:string,
    "range[team_behaviour]"?:  string,
    "range[difficulty]"?:      string,

    page?:                      number,
    "page[number]"?:            number,
    "page[size]"?:              number
}

export type ProjectSessionsGraphParams = {
    field?: "created_at" | "updated_at" | "begin_at" | "end_at",
    interval?: "day" | "week" | "month" | "quarter" | "year" | "hour_of_day" | "day_of_week" | "day_of_month" | "month_of_year",
    sor?:                       "id" | "project_id" | "campus_id" | "cursus_id"  | "estimate_time" |  "created_at" |  "updated_at" | "begin_at" | "end_at" | "max_people" | "duration_days" | "terminating_after" |
                                "solo" | "is_subscriptable" | "minimum_mark" | "team_behaviour" | "commit" | "difficulty" | "description" | "objectives" | "divisor",
    "filter[id]"?:              number[] | string[],
    "filter[project_id]"?:      number[] | string[],
    "filter[campus_id]"?:       number[] | string[],
    "filter[cursus_id]"?:       number[] | string[],
    "filter[estimate_time]"?:   string[],
    "filter[created_at]"?:      string[],
    "filter[updated_at]"?:      string[],
    "filter[begin_at]"?:        string[],
    "filter[end_at]"?:          string[],
    "filter[max_people]"?:      number[] | string[],
    "filter[duration_days]"?:   string[],
    "filter[terminating_after]"?:  string[],
    "filter[solo]"?:            string[],
    "filter[is_subscriptable]"?:boolean[] | string[],
    "filter[team_behaviour]"?:  string[],
    "filter[difficulty]"?:      string[],
    "filter[future]"?:          string[],
    "filter[end]"?:             string [],

    "range[id]"?:              string,
    "range[project_id]"?:      string,
    "range[campus_id]"?:       string,
    "range[cursus_id]"?:       string,
    "range[estimate_time]"?:   string,
    "range[created_at]"?:      string,
    "range[updated_at]"?:      string,
    "range[begin_at]"?:        string,
    "range[end_at]"?:          string,
    "range[max_people]"?:      string,
    "range[duration_days]"?:   string,
    "range[terminating_after]"?:  string,
    "range[solo]"?:            string,
    "range[is_subscriptable]"?:string,
    "range[team_behaviour]"?:  string,
    "range[difficulty]"?:      string,

}


export type ProjectSessionsInputs = {
    field?: "created_at" | "updated_at" | "begin_at" | "end_at",
    interval?: "day" | "week" | "month" | "quarter" | "year" | "hour_of_day" | "day_of_week" | "day_of_month" | "month_of_year",
}