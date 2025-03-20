import type { IUser } from "@/shared/types";

export const useFetchUsers = async (userList: any[]): Promise<IUser[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        userList.map((user) => ({
          ...user,
          created: new Date(user.created),
        }))
      );
    }, 1000);
  });
};
