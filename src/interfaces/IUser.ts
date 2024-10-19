export type IUserContextType = {
  user: IUser | null;
  setUser: (value: IUser | null) => void;
};

export interface IUser {
  _id: string;
  name: string;
  age: number | string;
  email: string;
  role: string;
  avatar?: {
    url: string;
  };
}
