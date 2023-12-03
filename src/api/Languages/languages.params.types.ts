export type LanguagesParams = {
    sort?:               "id" | "name" | "identifier" | "created_at" | "updated_at",
  
  
    "filter[id]"?:string[] | number[],
    "filter[name]"?:string[],
    "filter[identifier]"?:string[],
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],

    "range[id]"?:string[] | number[],
    "range[name]"?:string[],
    "range[identifier]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,


}
