export type Note = {
  id: number;
  from_user: NoteUser;
  subject: string;
  content: string;
  created_at: string;
  user: NoteUser;
};

type NoteUser = {
  id: number;
  login: string;
  url: string;
};
