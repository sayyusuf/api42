
export type AmendmentsParams = {
    user_id?:                        number | string,
    internship_id?:                  number,
    page?:                           number,
    "page[number]"?:                 number,
    "page[size]"?:                   number,
    amendment?:                      number,
    "amendment[internship_id]"?:     number,
    "amendment[end_at]"?:            string,
    "amendment[kind]"?:              "prolongation" | "breach" | "salary_change",
    "amendment[origin]"?:            "company" | "student" | "school",
    "amendment[convention]"?:        string,
    "amendment[salary]"?:            string,
    "amendment[currency]"?:          string,
    "amendment[effective_date]"?:    string 

}

export type AmendmentsParams2= {
    amendment?:                     number,
    "amendment[internship_id]"?:    number,
    "amendment[end_at]"?:           string,
    "amendment[kind]"?:             "prolongation" |  "breach" |  "salary_change",
    "amendment[origin]"?:           "company" | "student" | "school",
    "amendment[convention]"?:       string,
    "amendment[salary]"?:           string,
    "amendment[currency]"?:         string,
    "amendment[effective_date]"?:   string

}