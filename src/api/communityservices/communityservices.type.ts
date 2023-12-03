
export type CommunityService = {
  id: number | string;
  duration: number;
  schedule_at: string;
  occupation: string;
  state: string;
  created_at: string;
  updated_at: string;
  close: Close;
}

export type Close = {
  id: number;
  reason: string;
  state: string;
  created_at: string;
  updated_at: string;
}
