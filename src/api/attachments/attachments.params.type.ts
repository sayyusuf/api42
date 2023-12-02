/**
 *   `sort`:     ` "id" | "attachable_id" | "attachable_type" | "kind" | "created_at" | "updated_at" | "language_id" | "user_id" | "default" | "up_to_date" | "container_id" | "container_type" | "base_id" | "untranslatable" | "attachments_structure_id"`
 * 
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 
 
export type AttachmentsParams = {
    project_session_id?:            string | number,
    project_id?:                    string | number,
    sort?:                          "id" | "attachable_id" | "attachable_type" | "kind" | "created_at" | "updated_at" | "language_id" | "user_id" |
                                    "default" | "up_to_date" | "container_id" | "container_type" | "base_id" | "untranslatable" | "attachments_structure_id",
    "filter[id]"?:                  string[] | number[],
    "filter[attachable_id]"?:       string[] | number[],
    "filter[attachable_type]"?:     string[],
    "filter[kind]"?:                string[],
    "filter[created_at]"?:          string[],
    "filter[updated_at]"?:          string[],
    "filter[language_id]"?:         string[],
    "filter[user_id]"?:             string[] | number[],
    "filter[default]"?:             string[],
    "filter[up_to_date]"?:          string[],
    "filter[container_id]"?:        string[] | number[],
    "filter[container_type]"?:      string[],
    "filter[base_id]"?:             string[] | number[],
    "filter[untranslatable]"?:      string[],
    "filter[attachments_structure_id]"?:string[] | number[],

    "range[id]"?:                  string,
    "range[attachable_id]"?:       string,
    "range[attachable_type]"?:     string,
    "range[kind]"?:                string,
    "range[created_at]"?:          string,
    "range[updated_at]"?:          string,
    "range[language_id]"?:         string,
    "range[user_id]"?:             string,
    "range[default]"?:             string,
    "range[up_to_date]"?:          string,
    "range[container_id]"?:        string,
    "range[container_type]"?:      string,
    "range[base_id]"?:             string,
    "range[untranslatable]"?:      string,
    "range[attachments_structure_id]"?:string,

    page?:                          number,
    "page[number]"?:                number,
    "page[size]"?:                  number,

}