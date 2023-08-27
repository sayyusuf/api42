export type TagsParams = {
    project_id?:            string | number,
    issue_id?:           string | number,
    notion_id?:           string | number,
    cursus_id?:           string | number,
    user_id?:           string | number,
  
    sort?:               "id" | "name" | "created_at" | "updated_at" | "pinner_id" | "kind" | "description",
  
  
    "filter[id]"?:string[] | number[],
    "filter[name]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],
    "filter[pinner_id]"?:string[],
    "filter[kind]"?:string[],
    "filter[description]"?:string[],
  
    "range[id]"?:string[] | number[],
    "range[name]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],
    "range[pinner_id]"?:string[],
    "range[kind]"?:string[],

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,


}
