
 /* 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 

export type RolesParamsType = {
    user_id?:   number | string,
    sort?:  "id" | "name" | "description" | "created_at" | "updated_at",
    
    "filter[id]"?:              string[] | number[],
    "filter[name]"?:            string[],
    "filter[description]"?:     string[],
    "filter[created_at]"?:      string[],
    "filter[updated_at]"?:      string[],
 
    "range[id]"?:              string,
    "range[name]"?:            string,
    "range[description]"?:     string,
    "range[created_at]"?:      string,
    "range[updated_at]"?:      string,
    
    page?:              number,
    "page[number]"?:    number,
    "page[size]"?:      number,
}