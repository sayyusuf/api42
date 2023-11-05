export type TeamsUsersParams = {
    user_id?:            string | number,
    team_id?:           string | number,
    sort?:               "id" | "team_id" | "user_id" | "leader" | "validated" | "created_at" | "updated_at" | "occurrence",
  
  
    "filter[id]"?:string[] | number[],
    "filter[team_id]"?:string[],
    "filter[user_id]"?:string[],
    "filter[leader]"?:string[],
    "filter[validated]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],
    "filter[occurrence]"?:string[],

    "range[id]"?:string[] | number[],
    "range[team_id]"?:string[],
    "range[user_id]"?:string[],
    "range[leader]"?:string[],
    "range[validated]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],
    "range[occurrence]"?:string[],
  
    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,

}
