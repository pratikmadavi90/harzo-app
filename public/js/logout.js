function logout() {
  localStorage.removeItem("isAdminLoggedIn");

  // 🔐 BACK BLOCK (important)
  window.history.pushState(null, null, window.location.href);

  // 🔄 REDIRECT (strong)
  window.location.replace("/admin/login.html");
}