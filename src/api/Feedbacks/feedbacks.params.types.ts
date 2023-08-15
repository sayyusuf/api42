export type FeedbacksParams = {
  event_id? : string;
  scale_team_id? : string;
  sort?: ParamStringLiterals;
	filter?: ParamStringLiterals;
	range?: ParamStringLiterals;
	page?: any;
	"page[number]"?: number;
	"page[size]"?: number;
}

type ParamStringLiterals =  "id" | "user_id" | "feedbackable_type" | "feedbackable_id" | "comment" | "rating" | "created_at" | "updated_at";
