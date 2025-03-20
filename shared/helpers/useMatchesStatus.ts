export default function useMatchesStatus(
  productCategory: string,
  filterCategories: string[]
) {
  return (
    filterCategories.length === 0 || filterCategories.includes(productCategory)
  );
}
