import { ScaleTeam } from "../scaleteams/scaleteams.type"

export type Slot = {
	id: number | string,
    begin_at: string,
    end_at: string,
    scale_team: ScaleTeam,
    user: {}
}