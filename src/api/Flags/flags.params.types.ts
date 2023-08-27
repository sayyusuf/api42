export type FlagsParams = {
    sort?:               "id" | "name" | "positive" | "icon" | "created_at" | "updated_at",
  
  
    "filter[id]"?:string[] | number[],
    "filter[name]"?:string[],
    "filter[positive]"?:string[],
    "filter[icon]"?:string[,
    "filter[created_at]"?:string[],
    "filter[updated_at]"?:string[],

    "range[id]"?:string[] | number[],
    "range[name]"?:string[],
    "range[positive]"?:string[],
    "range[icon]"?:string[],
    "range[created_at]"?:string[],
    "range[updated_at]"?:string[],

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,

}
