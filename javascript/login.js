const container = document.querySelector(".container");
const passwordShowHiden = document.querySelectorAll(".showHidenEye");
const passwordFields = document.querySelectorAll(".password");

// JS phần ẩn/hiện mật khẩu
passwordShowHiden.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    passwordFields.forEach((passwordFields) => {
      if (passwordFields.type === "password") {
        passwordFields.type = "text";
        passwordShowHiden.forEach((icon) => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        passwordFields.type = "password";
        passwordShowHiden.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

const formLoginElement = document.querySelector("#form-login");
const emailElement = document.getElementById("inplogin-email");
const passwordElement = document.getElementById("inplogin-password");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const accountsDB = JSON.parse(localStorage.getItem("accounts")) || [];

formLoginElement?.addEventListener("submit", (e) => {
  // Chặn action của e
  e.preventDefault();

  const accountsDB = JSON.parse(localStorage.getItem("accounts")) || [];

  email = emailElement.value;
  password = passwordElement.value;
  // Kiểm tra nếu tên người dùng và mật khẩu không được để trống
  // if (email === "") {
  //     errorEmail.textContent = "Email không được để trống";
  //     return;
  // }

  // if (password === "") {
  //     errorPassword.textContent = "Mật khẩu không được để trống";
  //     return;
  // }

  // Lặp qua danh sách tài khoản và kiểm tra
  let isAuthenticated = false;
  for (const account of accountsDB) {
    if (account.email == email && account.password == password) {
      isAuthenticated = true;
      break; // Kết thúc vòng lặp khi tìm thấy khớp
    }
  }

  console.log(isAuthenticated);
  console.log(email);
  console.log(password);

  if (isAuthenticated) {
    alert("Đăng nhập thành công!");
    // window.location.href = "index.html";
    navigation("index.html")
    emailElement.value = "";
    passwordElement.value = "";
  } else {
    errorEmail.textContent =
      "Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.";
    emailElement.value = "";
    passwordElement.value = "";
  }
});
// HÀm điều hướng
function navigation(path) {
    window.location.pathname = path;
    
  }
  