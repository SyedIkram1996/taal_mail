import { IUserSchema } from "@/lib/models/userModel";

export type IUserContextType = {
  user: IUser | null;
  setUser: (value: IUser | null) => void;
};

export interface IUser extends Omit<IUserSchema, "verifyCode" | "isVerified"> {
  id: string;
}
