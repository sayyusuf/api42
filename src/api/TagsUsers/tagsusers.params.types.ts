export type TagsUsersParams = {
    user_id?:            string | number,
    cursus_id?:           string | number,
    campus_id?:           string | number,
    tag_id?:           string | number,
    sort?:               "id" | "tag_id" | "user_id" | "created_at" | "updated_at" | "campus_id",
  
  
    "filter[id]"?:string[] | number[],
    "filter[tag_id]"?:string[],
    "filter[user_id]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],
    "filter[campus_id]"?:string[],
    "filter[cursus_id]"?:string[],

    "range[id]"?:string[] ,
    "range[tag_id]"?:string[] ,
    "range[user_id]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],
    "range[campus_id]"?:string[] ,

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,

}
