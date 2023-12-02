export type CursusUser = {
  id: number | string;
  begin_at: string;
  end_at: string;
  grade: string;
  level: number;
  skills: any[];
  cursus_id: number | string;
  has_coalition: boolean;
  user: User;
  cursus: Cursus;
}

export type Cursus = {
  id: number | string;
  created_at: string;
  name: string;
  slug: string;
}

export type User = {
  id: number | string;
  login: string;
  url: string;
}
