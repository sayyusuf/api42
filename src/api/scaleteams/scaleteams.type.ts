export type ScaleTeam = {
  id: number;
  scale_id: number;
  comment: string;
  created_at: string;
  updated_at: string;
  feedback: any;
  feedback_rating: any;
  final_mark: number;
  flag: Flag;
  begin_at: string;
  correcteds: IntraUser[];
  corrector: IntraUser;
  truant: any;
  filled_at: string;
  questions_with_answers?: any[]
  scale: Scale;
  team: Team;
  feedbacks: Feedback[];
}

type Flag = {
  id: number;
  name: string;
  positive: boolean;
  icon: string;
  created_at: string;
  updated_at: string;
}

type IntraUser = {
  id: number | string;
  login: string;
  url: string;
}


type Team = {
    team: TeamClass;
}

type TeamClass = {
    id:                  number;
    name:                string;
    url:                 string;
    final_mark:          number;
    project_id:          number;
    created_at:          string;
    updated_at:          string;
    status:              string;
    terminating_at:      string;
    users:               User[];
    "locked?":           boolean;
    "validated?":        boolean;
    "closed?":           boolean;
    repo_url:            string;
    repo_uuid:           string;
    locked_at:           string;
    closed_at:           string;
    project_session_id:  number;
    project_gitlab_path: string;
}

type User = {
    id:               number;
    login:            string;
    url:              string;
    leader:           boolean;
    occurrence:       number;
    validated:        boolean;
    projects_user_id: number;
}


type Scale = {
  id: number;
  evaluation_id: number;
  name: string;
  is_primary: boolean;
  comment: string;
  introduction_md: string;
  disclaimer_md: string;
  guidelines_md: string;
  created_at: string;
  correction_number: number;
  duration: number;
  manual_subscription: boolean;
  languages: Language[];
}

type Language = {
  id: number;
  name: string;
  identifier: string;
  created_at: string;
  updated_at: string;
}

type Feedback = {
  id: number;
  user: IntraUser;
  feedbackable_type: string;
  feedbackable_id: number;
  comment: string;
  rating: number;
  created_at: string;
}