export type TopLevel {
  id:           number;
  expertise_id: number;
  interested:   boolean;
  value:        number;
  contact_me:   boolean;
  created_at:   string;
  user_id:      number;
  expertise:    Expertise;
  user:         User;
}

export type Expertise {
  id:                   number;
  name:                 string;
  slug:                 string;
  url:                  string;
  kind:                 string;
  created_at:           string;
  expertises_users_url: string;
}

export type User {
  id:    number;
  login: string;
  url:   string;
}
