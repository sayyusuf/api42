export type Feedback = {
    id:                number;
    user:              User;
    feedbackable_type: string;
    feedbackable_id:   number;
    comment:           string;
    rating:            number;
    created_at:        Date;
    feedback_details:  FeedbackDetail[];
}

export type FeedbackDetail = {
    id:   number;
    rate: number;
    kind: string;
}

export type User = {
    login: string;
    id:    number;
    url:   string;
}
