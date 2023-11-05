export type TeamsUploadsParams = {
    team_id?:            string | number,
    sort?:               "id" | "team_id" | "upload_id" | "final_mark" | "comment" | "created_at" | "updated_at",
  
  
    "filter[id]"?:string[] | number[],
    "filter[team_id]"?:string[],
    "filter[upload_id]"?:string[],
    "filter[final_mark]"?:string[],
    "filter[comment]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],
  
    "range[id]"?:string[] | number[],
    "range[team_id]"?:string[],
    "range[upload_id]"?:string[],
    "range[final_mark]"?:string[],
    "range[comment]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],


    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,

}
