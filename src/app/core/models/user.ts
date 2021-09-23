export interface User {
  login: string;
  password: string;
  firstName?: string;
  lastName?: string;
  cart?: [string];
  favorites?: [string];
  order?: [string];
}
