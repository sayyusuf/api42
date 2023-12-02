export class ApiSettings {
  static readonly REQUEST_LIMIT_PER_SEC = 2;
  static readonly REQUEST_LIMIT_PER_HOUR = 1200;
  static readonly HTTP_REQUEST_MALFORMED = 401;
  static readonly HTTP_UNAUTHORIZED = 402;
  static readonly HTTP_FORBIDDEN = 403;
  static readonly HTTP_NOT_FOUND = 404;
  static readonly HTTP_UNPROCESSABLE = 422;
  static readonly HTTP_SERVER_ERROR = 500;
}
