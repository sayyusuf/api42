export interface UserParams{
	coalition_id?: string
}

export type Filter = "created_at" | "id" | "name" | "updated_at" | "locked_at" | "closed_at" | "final_mark" | "repo_url" | "repo_uuid" | "deadline_at" | "terminating_at" | "project_session_id" | "status" | "cursus" | "active_cursus" | "campus" | "primary_campus" | "locked" | "closed" | "deadline" | "terminating" | "with_mark";