export interface Event {
    id:                          number;
    name:                        string;
    description:                 string;
    location:                    string;
    kind:                        string;
    max_people:                  number;
    nbr_subscribers:             number;
    begin_at:                    string;
    end_at:                      string;
    campus_ids:                  number[];
    cursus_ids:                  number[];
    themes:                      Theme[];
    waitlist:                    Waitlist | null;
    prohibition_of_cancellation: number;
    created_at:                  string;
    updated_at:                  string;
}

export interface Theme {
    created_at: string;
    id:         number;
    name:       string;
    updated_at: string;
}

export interface Waitlist {
    created_at:        string;
    id:                number;
    updated_at:        string;
    waitlistable_id:   number;
    waitlistable_type: string;
}
