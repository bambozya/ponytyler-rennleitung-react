import { http } from "./http";

export interface User {
  id?: number;
  name: string;
}

export const getUsers = () => http.get<User[]>("api/user");
export const getUser = (userId: string | number) => http.get<User>(`api/user/${userId}`);
export const createUser = (user: User) => http.post<User>("api/user", user);
export const updateUser = (user: User) => http.patch<User>(`api/user/${user.id}`, user);
