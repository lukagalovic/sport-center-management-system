export interface IGetUserAuthInfoRequest extends Request {
  user: {
    userId: number;
    username: string;
    role: string;
  };
}
