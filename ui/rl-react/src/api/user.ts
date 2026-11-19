import { http } from "./http";

import type { NewUser, User } from "./types";

export type { NewUser, User };

export const getUsers = () => http.get<User[]>("api/user");
export const getUser = (userId: string | number) => http.get<User>(`api/user/${userId}`);
export const createUser = (user: NewUser) => http.post<User>("api/user", user);
export const updateUser = (user: User) => http.patch<User>(`api/user/${user.id}`, user);
