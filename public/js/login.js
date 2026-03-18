function loginSuccess() {
  localStorage.setItem("isAdminLoggedIn", "true");

  // 🔐 history clean (important)
  window.history.pushState(null, null, "/admin/dashboard.html");

  // 🔄 redirect (strong)
  window.location.replace("/admin/dashboard.html");
}