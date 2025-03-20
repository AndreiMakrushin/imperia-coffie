export default function useMatchesDate(
  productDate: Date,
  filterDateValue: Date | null
) {
  return (
    !filterDateValue ||
    productDate.toDateString() === filterDateValue.toDateString()
  );
}
