import type { IUser } from "@/shared/types";

export const login = (username: string, passphrase: string, users: IUser[]) => {
  const user = users.find((u) => {
    return (
      u.credentials.passphrase === passphrase &&
      u.credentials.username === username
    );
  });

  if (user) {
    localStorage.setItem("authenticated", "true");
    navigateTo("/account");
  } else {
    return "Введены неверные данные авторизации. Попробуйте ещё раз";
  }
};
