/**
 * `sort`       `"id" | "project_session_id" | "skill_id" | "value" | "created_at" | "updated_at"`
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 
export type ProjectSessionsSkillsParams = {
    project_session_id?:            number,
    skill_id?:                      number,
    sort?:                          "id" | "project_session_id" | "skill_id" | "value" | "created_at" | "updated_at",
    
    "filter[id]"?:                  number[] | string[],
    "filter[project_session_id]"?:  number[] | string[],
    "filter[skill_id]"?:            number[] | string[],
    "filter[value]"?:               number[] | string[],
    "filter[created_at]"?:          string[],
    "filter[updated_at]"?:          string[],

    "range[id]"?:                  string,
    "range[project_session_id]"?:  string,
    "range[skill_id]"?:            string,
    "range[value]"?:               string,
    "range[created_at]"?:          string,
    "range[updated_at]"?:          string,

    page?:                          number,
    "page[number]"?:                number,
    "paage[size]"?:                 number,

}