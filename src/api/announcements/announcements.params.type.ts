/**
 *  `field?:`    `"created_at" | "updated_at" | "expire_at" `
 *  `interval?:` `"day" | "week" | "month" | "quarter" | "year" | "hour_of_day" | "day" | "of_week" | "day_of_month" | "month_of_year"`
 *  `sort?:`     `"id" |  "author" | "title" | "text" | "kind" | "created_at" | "updated_at" | "image" | "expire_at" | "link" | "notificable_id" | "notificable_type* `
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 * 
 */
export type AnnouncementsParams = {
    sort?:                      "id" |  "author" | "title" | "text" | "kind" | "created_at" | "updated_at" | "image" | "expire_at" | "link" | "notificable_id" | "notificable_type",
    "filter[id]"?:              number[] | string[],
    "filter[author]"?:          string[],
    "filter[title]"?:           string[],
    "filter[text]"?:            string[],
    "filter[kind]"?:            string[],
    "filter[created_at]"?:      string[],
    "filter[updated_at]"?:      string[],
    "filter[image]"?:           string[],
    "filter[expire_at]"?:       string[],
    "filter[link]"?:            string[],
    "filter[notificable_id]"?:  number[] | string[],
    "filter[notificable_type]"?:string[],
    "filter[expire]"?:          string[]

    "range[id]"?:              string,
    "range[author]"?:          string,
    "range[title]"?:           string,
    "range[text]"?:            string,
    "range[kind]"?:            string,
    "range[created_at]"?:      string,
    "range[updated_at]"?:      string,
    "range[image]"?:           string,
    "range[expire_at]"?:       string,
    "range[link]"?:            string,
    "range[notificable_id]"?:  string,
    "range[notificable_type]"?:string,
}

export type AnnouncementsInputs = {
    field?: "created_at" | "updated_at" | "expire_at",
    interval?: "day" | "week" | "month" | "quarter" | "year" | "hour_of_day" | "day_of_week" | "day_of_month" | "month_of_year",
}

