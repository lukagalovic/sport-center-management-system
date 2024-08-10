import { User } from 'src/users/entities/user.entity';

export interface GetUserAuthInfoRequest extends Request {
  user: User;
}
