
export type App = {
    id:          number,
    name:        string,
    description: null,
    image:       null,
    website:     null,
    public:      boolean,
    scopes:      any[],
    created_at:  string,
    updated_at:  string,
    owner:       {
        id:    number,
        login: string,
        url:   string,
    },
    rate_limit:  number,
    roles:       {
        id:          number,
        name:        string,
        description: string,
    }[],
}

