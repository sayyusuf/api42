export interface TeamsUploadsTypes {
  id:         number;
  final_mark: number;
  comment:    string;
  created_at: string;
  upload_id:  number;
  upload:     Upload;
}

export interface Upload {
  id:            number;
  evaluation_id: number;
  name:          string;
  description:   string;
  created_at:    string;
  updated_at:    string;
}
