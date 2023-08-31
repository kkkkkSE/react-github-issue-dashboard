export interface User {
  login: string;
  avatar_url: string;
}

export interface Issue {
  number: number;
  title: string;
  user: User;
  comments: number;
  created_at: string;
  body: string;
}
