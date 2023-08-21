type Locations = {
    id:        number;
    begin_at:  string;
    end_at:    string;
    primary:   boolean;
    floor:     null;
    row:       null;
    post:      null;
    host:      string;
    campus_id: number;
    user:      LocationsUser;
}

type LocationsUser = {
    id:    number;
    login: string;
    url:   string;
}
