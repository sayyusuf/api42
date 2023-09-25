export type User = {
    id:                number;
    email:             string;
    login:             string;
    first_name:        string;
    last_name:         string;
    usual_full_name:   string;
    usual_first_name:  null;
    url:               string;
    phone:             string;
    displayname:       string;
    kind:              string;
    image:             Image;
    "staff?":          boolean;
    correction_point:  number;
    pool_month:        string;
    pool_year:         string;
    location:          null;
    wallet:            number;
    anonymize_date:    null | string;
    data_erasure_date: null | string;
    created_at:        string;
    updated_at:        string;
    alumnized_at:      null | string;
    "alumni?":         boolean;
    "active?":         boolean;
}

type Image = {
    link:     string;
    versions: Versions;
}

type Versions = {
    large:  string;
    medium: string;
    small:  string;
    micro:  string;
}
