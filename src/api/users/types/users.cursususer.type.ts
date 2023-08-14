export interface CursusUser {
    id:            number;
    begin_at:      Date;
    end_at:        Date | null;
    grade:         string;
    level:         number;
    skills:        any[];
    cursus_id:     number;
    has_coalition: boolean;
    user:          User;
    cursus:        Cursus;
}

interface Cursus {
    id:         number;
    created_at: string;
    name:       string;
    slug:       string;
}

interface User {
    id:    number;
    login: string;
    url:   string;
}
