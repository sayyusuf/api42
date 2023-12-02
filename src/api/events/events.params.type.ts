export type EventsParams = {
    cursus_id?:            string | number,
    campus_id?:           string | number,
    user_id?:           string | number,
    sort?:               "id" | "begin_at" | "end_at" | "name" | "description" | "location" | "kind" | "max_people" | "created_at" | "updated_at" | "prohibition_of_cancellation" | "difficulty" | "remote",
  
  
    "filter[id]"?:string[] | number[],
    "filter[begin_at]"?:string[],
    "filter[end_at]"?:string[],
    "filter[name]"?:string[],
    "filter[description]"?:string[],
    "filter[location]"?:string[],
    "filter[kind]"?:string[],
    "filter[max_people]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],
    "filter[prohibition_of_cancellation]"?:string[],
    "filter[difficulty]"?:string[],
    "filter[remote]"?:string[],
    "filter[future]"?:string[],
    "filter[end]"?:string[],

   "range[id]"?:string[] | number[],
    "range[begin_at]"?:string[],
    "range[end_at]"?:string[],
    "range[name]"?:string[],
    "range[description]"?:string[],
    "range[location]"?:string[],
    "range[kind]"?:string[],
    "range[max_people]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],
    "range[prohibition_of_cancellation]"?:string[],
    "range[difficulty]"?:string[],
    "range[remote]"?:string[],

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,

    
}
