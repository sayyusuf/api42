export type TagsTypes {
  id:         number;
  name:       string;
  kind:       string;
  users:      any[];
  subnotions: Subnotion[];
}

export type Subnotion {
  id:         number;
  name:       string;
  slug:       string;
  created_at: string;
  notepad:    null;
}
