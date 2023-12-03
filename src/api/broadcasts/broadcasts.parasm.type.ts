/**
 *   `sort`:     `"id" | "campus_id" | "tag_id" | "content" | "pinned_until" | "hidden_at" | "url" | "created_at" | "updated_at" | "content_html" | "position"`
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 


export type BroadcastsParam = {
    sort?:                 "id" | "campus_id" | "tag_id" | "content" | "pinned_until" | "hidden_at" | "url" | "created_at" | "updated_at" | "content_html" | "position",
    "filter[id]"?:          number[] | string[],
    "filter[campus_id]"?:   number[] | string[],
    "filter[tag_id]"?:      number[] | string[],
    "filter[content]"?:     string[],
    "filter[pinned_until]"?:string[],
    "filter[hidden_at]"?:   string[],
    "filter[url]"?:         string[],
    "filter[created_at]"?:  string[],
    "filter[updated_at]"?:  string[],
    "filter[content_html]"?:string[],
    "filter[position]"?:    string[],

    page?:                  number,
    "page[number]"?:        number,
    "page[size]"?:          number,
}

