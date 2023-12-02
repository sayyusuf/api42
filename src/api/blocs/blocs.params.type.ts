/**
 *   `sort`:     `"id" | "cursus_id" | "campus_id" | "squad_size" | "created_at" | "updated_at" | "coalition_delay" | "repeat_deadline_delay"`
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 

export type BlocsParams = {
    sort?:                              "id" | "cursus_id" | "campus_id" | "squad_size" | "created_at" | "updated_at" | "coalition_delay" | "repeat_deadline_delay",
    "filter[id]"?:                      number[] | string [],
    "filter[cursus_id]"?:               number[] | string[],
    "filter[campus_id]"?:               number[] | string[],
    "filter[squad_size]"?:              number[] | string[],
    "filter[created_at]"?:              string[],
    "filter[updated_at]"?:              string[],
    "filter[coalition_delay]"?:         string[],
    "filter[repeat_deadline_delay]"?:   string[],

    page?:                              number,
    "page[number]"?:                    number,
    "page[size]"?:                      number,
}