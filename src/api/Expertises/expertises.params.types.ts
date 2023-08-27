export type ExpertisesParams = {
    sort?:               "id" | "name" | "slug" | "created_at" | "updated_at" | "kind",
  
  
    "filter[id]"?:string[] | number[],
    "filter[name]"?:string[],
    "filter[slug]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],
    "filter[kind]"?:string[],
  
  "range[id]"?:string[] | number[],
  "range[name]"?:string[],
  "range[slug]"?:string[],
  "range[created_at]"?:string[],
  "range[updated_at]"?:string[],
  "range[kind]"?:string[],


    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,
}
