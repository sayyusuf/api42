export type CorrectionPointHistoric = {
	id:            number;
    scale_team_id: number | null;
    reason:        string;
    sum:           number;
    total:         number;
    created_at:    string;
    updated_at:    string;
}