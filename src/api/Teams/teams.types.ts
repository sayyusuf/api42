export type TopLevel {
  id:                 number;
  name:               string;
  url:                string;
  final_mark:         null;
  project_id:         number;
  created_at:         string;
  updated_at:         string;
  status:             string;
  terminating_at:     null;
  users:              User[];
  "locked?":          boolean;
  "validated?":       null;
  "closed?":          boolean;
  repo_url:           null;
  repo_uuid:          string;
  locked_at:          null | string;
  closed_at:          null | string;
  project_session_id: number;
  scale_teams:        any[];
  teams_uploads:      any[];
}

export type User {
  id:               number;
  login:            string;
  url:              string;
  leader:           boolean;
  occurrence:       number;
  validated:        boolean;
  projects_user_id: number;
}
