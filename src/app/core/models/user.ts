export interface User {
  login: string;
  password: string;
  token?: string;
  firstName?: string;
  lastName?: string;
  cart?: [string];
  favorites?: [string];
  order?: [string];
}
