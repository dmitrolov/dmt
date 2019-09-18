type Role = 'admin' | 'user';

export interface Player {
  login: string;
  password: string;
  email: string;
  role: Role;
}
