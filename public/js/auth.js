// 📍 current page check
const currentPage = window.location.pathname;

// 🔐 LOGIN CHECK (login page skip)
if (!localStorage.getItem("isAdminLoggedIn") && !currentPage.includes("login.html")) {
  window.location.replace("/admin/login.html");
}

// 🔙 BACK BUTTON BLOCK
window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
  if (!localStorage.getItem("isAdminLoggedIn")) {
    window.location.replace("/admin/login.html");
  }
};