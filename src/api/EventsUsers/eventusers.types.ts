export type EventsUser = {
    id:       number;
    event_id: number;
    user_id:  number;
    user:     User;
    event:    Event;
}

export type Event = {
    id:                          number;
    name:                        string;
    description:                 string;
    location:                    string;
    kind:                        string;
    max_people:                  number;
    nbr_subscribers:             number;
    begin_at:                    Date;
    end_at:                      Date;
    campus_ids:                  number[];
    cursus_ids:                  number[];
    created_at:                  Date;
    updated_at:                  Date;
    prohibition_of_cancellation: null;
    waitlist:                    null;
}

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
    anonymize_date:    null;
    data_erasure_date: null;
    created_at:        Date;
    updated_at:        Date;
    alumnized_at:      Date;
    "alumni?":         boolean;
    "active?":         boolean;
}

export type Image = {
    link:     string;
    versions: Versions;
}

export type Versions = {
    large:  string;
    medium: string;
    small:  string;
    micro:  string;
}
