export type FeedbacksParams = {
    scale_team_id?:            string,
    event_id?:                 string,
    sort?:               "id" | "user_id" | "feedbackable_type" | "feedbackable_id" | "comment" | "rating" | "created_at" | "updated_at",
  
  
    "filter[id]"?:string[] | number[],
    "filter[user_id]"?:string[],
    "filter[feedbackable_type]"?:string[],
    "filter[feedbackable_id]"?:string[],
    "filter[comment]"?:string[],
    "filter[rating]"?:string[],
    "filter[created_at]"?:string[],
    "filter[campus_id]"?:string[],

    "range[id]"?:string[] | number[],
    "range[user_id]"?:string[],
    "range[feedbackable_type]"?:string[],
    "range[feedbackable_id]"?:string[],
    "range[comment]"?:string[],
    "range[rating]"?:string[],
    "range[created_at]"?:string[],

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,


}

