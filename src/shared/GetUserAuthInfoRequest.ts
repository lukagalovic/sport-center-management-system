export interface GetUserAuthInfoRequest extends Request {
  user: {
    userId: number;
    username: string;
    role: string;
  };
}
