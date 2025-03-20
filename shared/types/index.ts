export interface IUser {
  name: string;
  surname: string;
  credentials: {
    username: string;
    passphrase: string;
  };
  active: boolean;
  created: Date;
  _comment: string;
}

export interface IProduct {
  id: number;
  status: string;
  date_created: string;
  name: string;
  price: number;
  category: string;
}

export interface ICategory {
  id: number;
  category: string;
}
