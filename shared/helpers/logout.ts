export default function logout() {
  localStorage.removeItem("authenticated");
  navigateTo("/");
}
