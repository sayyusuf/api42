/**
 * `sort`: `"id" | "name" | "created_at" | "updated_at" | "visible" | "exam" | "parent_id" | "slug" | "inherited_team" | "position" | "has_git" | "has_mark" | "repository" | "git_id" | "cached_repository_path"`
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 
export type ProjectsParams = {
    cursus_id?:                 number | string,
    project_id?:                number | string,
    sort?:                      "id" | "name" | "created_at" | "updated_at" | "visible" | "exam" | "parent_id" | "slug" | "inherited_team" |
                                "position" | "has_git" | "has_mark" | "repository" | "git_id" | "cached_repository_path"
    "filter[id]"?:              number[] | string[],
    "filter[name]"?:            string[],
    "filter[created_at]"?:      string[],
    "filter[updated_at]"?:      string[],
    "filter[visible]"?:         boolean,
    "filter[exam]"?:            boolean,
    "filter[parent_id]"?:       number[] | string[],
    "filter[slug]"?:            string[],
    "filter[inherited_team]"?:  string[],
    "filter[position]"?:        string[],
    "filter[has_git]"?:         boolean,
    "filter[has_mark]"?:        boolean,
    "filter[description]"?:     string[],
    "filter[difficulty]"?:      string[],

    "range[id]"?:              string,
    "range[name]"?:            string,
    "range[created_at]"?:      string,
    "range[updated_at]"?:      string,
    "range[parent_id]"?:       string,
    "range[slug]"?:            string,
    "range[position]"?:        string,
    "range[description]"?:     string,
    "range[difficulty]"?:      string,

    page?:                      number;
    "page[number]"?:            number; 
    "page[size]"?:              number;
}   