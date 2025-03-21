import userList from "@/shared/api/users.json";
import type { IUser, IProduct, ICategory } from "@/shared/types";
import useMatchesStatus from "@/shared/helpers/useMatchesStatus";
import useMatchesDate from "@/shared/helpers/useMatchesDate";
import { useFetchProducts } from "@/shared/helpers/useFetchProducts";
import { useFetchUsers } from "@/shared/helpers/useFetchUsers";

export default defineStore("global", () => {
  const users = ref<IUser[]>([]);
  const products = ref<IProduct[]>([]);
  const error = ref<string | null>(null);
  const filterDate = ref<Date | undefined>(undefined);
  const filterCategory = ref<string[]>([]);
  const isLoading = ref<boolean>(false);

  const loadData = async () => {
    isLoading.value = true;
    try {
      users.value = await useFetchUsers(userList);
      products.value = await useFetchProducts();
    } catch (err) {
      error.value = "Ошибка при загрузке данных";
    } finally {
      isLoading.value = false;
    }
  };
  loadData();

  const categories = computed<ICategory[]>(() => {
    const uniqueCategories = new Set<string>();
    return products.value
      .map((product) => {
        if (!uniqueCategories.has(product.category)) {
          uniqueCategories.add(product.category);
          return {
            id: product.id,
            category: product.category,
          };
        }
        return null;
      })
      .filter(Boolean) as ICategory[];
  });

  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      const productDate = new Date(product.date_created);
      const filterDateValue = filterDate.value
        ? new Date(filterDate.value)
        : null;

      return (
        useMatchesDate(productDate, filterDateValue) &&
        useMatchesStatus(product.category, filterCategory.value)
      );
    });
  });

  return {
    users,
    products,
    error,
    filterDate,
    filterCategory,
    filteredProducts,
    categories,
    isLoading,
    loadData,
  };
});
