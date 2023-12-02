
export type QuestUsersParams = {
    quest_id?:      number,
    user_id?:       number,
    sort?:      "id" | "quest_id" | "user_id" | "end_at" | "validated_at" | "prct" | "advancement" | "created_at" | "updated_at",

    "filter[id]"?:          string[] | number[],
    "filter[quest_id]"?:    string[] | number[],
    "filter[user_id]"?:     string[] | number[],
    "filter[end_at]"?:      string[],
    "filter[validated_at]"?:string[],
    "filter[prct]"?:        string[],
    "filter[advancement]"?:     string[],
    "filter[created_at]"?:      string[],
    "filter[updated_at]"?:      string[],
    "filter[campus_id]"?:       string[],
    "filter[end]"?:         string[],
    "filter[validated]"?:       string[],

    "range[id]"?:           string,
    "range[quest_id]"?:     string,
    "range[user_id]"?:      string,
    "range[end_at]"?:       string,
    "range[validated_at]"?: string,
    "range[prct]"?:         string,
    "range[advancement]"?:      string,
    "range[created_at]"?:       string,
    "range[updated_at]"?:       string,

    page?:              number,
    "page[number]"?:    number,
    "page[size]"?:      number,

}

export type QuestUsersGraphParams = {
    field?:     "created_at" | "updated_at" | "end_at" | "validated_at",
    interval?:  "day" | "week" | "month" | "quarter" | "year" | "hour_of_day" | "day_of_week" | "day_of_month" | "month_of_year",
    sort?:      "id" | "quest_id" | "user_id" | "end_at" | "validated_at" | "prct" | "advancement" | "created_at" | "updated_at",

    "filter[id]"?:          string[] | number[],
    "filter[quest_id]"?:    string[] | number[],
    "filter[user_id]"?:     string[] | number[],
    "filter[end_at]"?:      string[],
    "filter[validated_at]"?:string[],
    "filter[prct]"?:        string[],
    "filter[advancement]"?:     string[],
    "filter[created_at]"?:      string[],
    "filter[updated_at]"?:      string[],
    "filter[campus_id]"?:       string[],
    "filter[end]"?:         string[],
    "filter[validated]"?:       string[],

    "range[id]"?:           string,
    "range[quest_id]"?:     string,
    "range[user_id]"?:      string,
    "range[end_at]"?:       string,
    "range[validated_at]"?: string,
    "range[prct]"?:         string,
    "range[advancement]"?:      string,
    "range[created_at]"?:       string,
    "range[updated_at]"?:       string,
}

export type QuestUsersInputs = {
    field?:     "created_at" |  "updated_at" | "end_at" | "vaidated_at",
    interval?:  "day" | "week" | "month" | "quarter" | "year" | "hour_of_day" | "day_of_week" | "day_of_month" | "month_of_year",
}