export interface UserApp {
    id:          number;
    name:        string;
    description: string;
    image:       string;
    website:     string;
    public:      boolean;
    scopes:      any[];
    created_at:  string;
    updated_at:  string;
    owner:       Owner;
    rate_limit:  number;
    roles:       Role[];
}

interface Owner {
    id?:    number;
    login?: string;
    url?:   string;
}

interface Role {
    id:          number;
    name:        string;
    description: string;
}
