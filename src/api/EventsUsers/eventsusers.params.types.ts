export type EventsUsersParams = {
    user_id?:            string | number,
    event_id?:           string | number,
    sort?:               "id" | "event_id" | "user_id" | "created_at" | "updated_at",
  
  
    "filter[id]"?:string[] | number[],
    "filter[event_id]"?:string[] | number[],
    "filter[user_id]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],
    "filter[campus_id]"?:string[] | number[],

    "range[id]"?:string[] | number[],
    "range[event_id]"?:string[] | number[],
    "range[user_id]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,
}

