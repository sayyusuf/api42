/**
 * `"filter[xyz]"`: `[a, b, c]`
 * 
 * `"range[xyz]"`: `"a, b"`
 */ 


export type CampusParams = {
    sort?:  "id" | "name" | "created_at" | "updated_at" | "time_zone" | "language_id" | "slug" | "main_email" | "endpoint_id" | "vogsphere_id" | "content_email" |
            "time_of_community_service_started" | "companies_mail" | "address" | "zip" |  "city" | "country" | "pro_needs_validation" | "logo" | "website" | "facebook" |
            "twitter" | "display_name" | "email_extension" | "help_url" | "active" | "open_to_job_offers" | "default_hidden_phone" | "tig_email" | "minimum_slot_duration" |
            "alumni_system" | "manual_alumnization_before_first_internship" | "public",

    "filter[id]"?:                                          string[] | number[],
    "filter[name]"?:                                        string[],
    "filter[created_at]"?:                                  string[],
    "filter[updated_at]"?:                                  string[],
    "filter[time_zone]"?:                                   string[],
    "filter[language_id]"?:                                 string[] | number[],
    "filter[slug]"?:                                        string[],
    "filter[main_email]"?:                                  string[],
    "filter[endpoint_id]"?:                                 string[] | number[],
    "filter[vogsphere_id]"?:                                string[] | number[],
    "filter[content_email]"?:                               string[],
    "filter[time_of_community_service_started]"?:           string[],
    "filter[companies_mail]"?:                              string[],
    "filter[address]"?:                                     string[],
    "filter[zip]"?:                                         string[],
    "filter[city]"?:                                        string[],
    "filter[country]"?:                                     string[],
    "filter[pro_needs_validation]"?:                        string[],
    "filter[logo]"?:                                        string[],
    "filter[website]"?:                                     string[],
    "filter[facebook]"?:                                    string[],
    "filter[twitter]"?:                                     string[],
    "filter[display_name]"?:                                string[],
    "filter[email_extension]"?:                             string[],
    "filter[help_url]"?:                                    string[],
    "filter[active]"?:                                      string[] | boolean[],
    "filter[open_to_job_offers]"?:                          string[],
    "filter[default_hidden_phone]"?:                        string[] | boolean[],
    "filter[tig_email]"?:                                   string[],
    "filter[minimum_slot_duration]"?:                       string[],
    "filter[alumni_system]"?:                               string[],
    "filter[manual_alumnization_before_first_internship]"?: string[],
    "filter[public]"?:                                      string[] | boolean [],

    "range[id]"?:                                          string,
    "range[name]"?:                                        string,
    "range[created_at]"?:                                  string,
    "range[updated_at]"?:                                  string,
    "range[time_zone]"?:                                   string,
    "range[language_id]"?:                                 string,
    "range[slug]"?:                                        string,
    "range[main_email]"?:                                  string,
    "range[endpoint_id]"?:                                 string,
    "range[vogsphere_id]"?:                                string,
    "range[content_email]"?:                               string,
    "range[time_of_community_service_started]"?:           string,
    "range[companies_mail]"?:                              string,
    "range[address]"?:                                     string,
    "range[zip]"?:                                         string,
    "range[city]"?:                                        string,
    "range[country]"?:                                     string,
    "range[pro_needs_validation]"?:                        string,
    "range[logo]"?:                                        string,
    "range[website]"?:                                     string,
    "range[facebook]"?:                                    string,
    "range[twitter]"?:                                     string,
    "range[display_name]"?:                                string,
    "range[email_extension]"?:                             string,
    "range[help_url]"?:                                    string,
    "range[active]"?:                                      string,
    "range[open_to_job_offers]"?:                          string,
    "range[default_hidden_phone]"?:                        string,
    "range[tig_email]"?:                                   string,
    "range[minimum_slot_duration]"?:                       string,
    "range[alumni_system]"?:                               string,
    "range[manual_alumnization_before_first_internship]"?: string,
    "range[public]"?:                                      string,

    page?:                                                 number,
    "page[number]"?:                                       number,
    "page[size]"?:                                         number,
   
}