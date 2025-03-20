import userList from "@/shared/api/users.json";
import type { IUser } from "@/shared/types";

export default defineStore("global", () => {
  const users: IUser[] = userList.map((user: any) => ({
    ...user,
    created: new Date(user.created).toLocaleString(),
  }));
  const error = ref<string | null>(null);
  const filterDate = ref<Date | undefined>(undefined);
  const filterCategory = ref<string[]>([]);

  const login = (username: string, passphrase: string) => {
    error.value = null;

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
      error.value = "Введены неверные данные авторизации. Попробуйте ещё раз";
    }
  };

  const logout = () => {
    localStorage.removeItem("authenticated");
    navigateTo("/");
  };

  const products = ref([
    {
      id: 1,
      status: "active",
      date_created: "2023-01-15",
      name: "Ноутбук Lenovo IdeaPad 3",
      price: 45000,
      category: "Электроника",
    },
    {
      id: 2,
      status: "inactive",
      date_created: "2023-02-10",
      name: "Смартфон Xiaomi Redmi Note 10",
      price: 22000,
      category: "Электроника",
    },
    {
      id: 3,
      status: "active",
      date_created: "2023-03-05",
      name: "Наушники Sony WH-1000XM4",
      price: 30000,
      category: "Аксессуары",
    },
    {
      id: 4,
      status: "active",
      date_created: "2023-04-20",
      name: "Фитнес-браслет Xiaomi Mi Band 6",
      price: 3500,
      category: "Аксессуары",
    },
    {
      id: 5,
      status: "inactive",
      date_created: "2023-05-12",
      name: "Планшет Samsung Galaxy Tab A7",
      price: 28000,
      category: "Электроника",
    },
    {
      id: 6,
      status: "active",
      date_created: "2023-06-18",
      name: "Электрочайник Bosch TWK 3A011",
      price: 2500,
      category: "Бытовая техника",
    },
    {
      id: 7,
      status: "active",
      date_created: "2023-07-22",
      name: "Кофемашина DeLonghi EC685",
      price: 32000,
      category: "Бытовая техника",
    },
    {
      id: 8,
      status: "inactive",
      date_created: "2023-08-30",
      name: "Микроволновая печь LG MS-2042DB",
      price: 12000,
      category: "Бытовая техника",
    },
    {
      id: 9,
      status: "active",
      date_created: "2023-09-14",
      name: "Монитор Dell S2721HS",
      price: 18000,
      category: "Электроника",
    },
    {
      id: 10,
      status: "active",
      date_created: "2023-10-01",
      name: "Клавиатура Logitech K380",
      price: 3500,
      category: "Аксессуары",
    },
  ]);

  const categories = computed(() => {
    return products.value
      .map((product) => {
        return {
          id: product.id,
          category: product.category,
        };
      })
      .filter((value, index, self) => {
        return (
          index ===
          self.findIndex((product) => product.category === value.category)
        );
      });
  });

  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      const matchesDate =
        !filterDate.value ||
        new Date(product.date_created).getTime() === filterDate.value.getTime();

      const matchesStatus =
        filterCategory.value.length === 0 ||
        filterCategory.value.includes(product.category);

      return matchesDate && matchesStatus;
    });
  });

  return {
    users,
    login,
    error,
    filterDate,
    filterCategory,
    filteredProducts,
    categories,
    logout,
  };
});
