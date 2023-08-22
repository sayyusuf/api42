export type TeamsUsersTypes = {
  id:         number;
  team_id:    number;
  user_id:    number;
  created_at: string;
  validated:  boolean;
  leader:     boolean;
  occurrence: number;
  team:       Team;
  user:       TopLevelUser;
}

export type Team = {
  id:                 number;
  name:               string;
  url:                string;
  final_mark:         null;
  project_id:         number;
  created_at:         string;
  updated_at:         string;
  status:             string;
  terminating_at:     null;
  users:              UserElement[];
  "locked?":          boolean;
  "validated?":       null;
  "closed?":          boolean;
  repo_url:           null;
  repo_uuid:          string;
  locked_at:          string;
  closed_at:          string;
  project_session_id: number;
}

export type UserElement = {
  id:               number;
  login:            string;
  url:              string;
  leader:           boolean;
  occurrence:       number;
  validated:        boolean;
  projects_user_id: number;
}

export type TopLevelUser = {
  id:    number;
  login: string;
  url:   string;
}
