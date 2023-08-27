export type ExpertisesUsersParams = {
    expertise_id?:            string,
    user_id?:                 string,
  
    sort?:               "id" | "expertise_id" | "user_id" | "interested" | "value" | "created_at" | "updated_at" | "contact_me",
  
  
    "filter[id]"?:string[] | number[],
    "filter[expertise_id]"?:string[],
    "filter[user_id]"?:string[],
    "filter[interested]"?:string[],
    "filter[value]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],
    "filter[contact_me]"?:string[],

    "range[id]"?:string[] | number[],
    "range[expertise_id]"?:string[],
    "range[user_id]"?:string[],
    "range[interested]"?:string[],
    "range[value]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],
    "range[contact_me]"?:string[],

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,
}

