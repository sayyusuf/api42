export type TopLevel {
  id:              number;
  ip_range:        string;
  begin_at:        string;
  end_at:          string;
  location:        string;
  max_people:      number;
  nbr_subscribers: number;
  name:            string;
  created_at:      string;
  updated_at:      string;
  campus:          Campus;
  cursus:          Cursus[];
  projects:        Project[];
}

export type Campus {
  id:                   number;
  name:                 string;
  time_zone:            string;
  language:             Language;
  users_count:          number;
  vogsphere_id:         number;
  country:              string;
  address:              string;
  zip:                  string;
  city:                 string;
  website:              string;
  facebook:             string;
  twitter:              string;
  active:               boolean;
  email_extension:      string;
  default_hidden_phone: boolean;
}

export type Language {
  id:         number;
  name:       string;
  identifier: string;
  created_at: string;
  updated_at: string;
}

export type Cursus {
  id:         number;
  created_at: string;
  name:       string;
  slug:       string;
}

export type Project {
  id:          number;
  name:        string;
  slug:        string;
  parent:      null;
  children:    any[];
  attachments: any[];
  created_at:  string;
  updated_at:  string;
  exam:        boolean;
  git_id:      null;
  repository:  null;
}
