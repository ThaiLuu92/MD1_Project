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

// JS phần ĐĂNG KÝ

// Tạo database chứa thông tin đăng kí

// B1: lấy thông tin trên các ô input
const formRegisterElement = document.querySelector("#form-register");
const addUserName = document.getElementById("input-user");
const addEmail = document.getElementById("input-email");
const addPassword = document.getElementById("input-password");
const addRepeatPassword = document.getElementById("input-repeat-password");

formRegisterElement?.addEventListener("submit", (e) => {
  // Chặn action của e
  e.preventDefault();

  //   B1: Lấy user từ form
  const user = getUser(); // {user: "", emai: "", password: "", repeatPassword: ""}

  // B2:  Check validator
  const error = checkError(user); // { } --> chứa thông tin lỗi
  renderError(error); // hiển thị loại

  addUserName.value = "";
  addEmail.value = "";
  addPassword.value = "";
  addRepeatPassword.value = "";

  if (error.isError) {
    return;
  }

  // B3:  Kiểm tra email có tồn tai trên database
  const accountsDB = JSON.parse(localStorage.getItem("accounts")) || [];

  let isExist = false;
  //for
  for (const account of accountsDB) {
    if (account.email === user.email) {
      isExist = true;
      break;
    }
  }
  // Điều hướng người dùng đến trang đăng nhập sau khi đăng ký thành công
  function redirectToLogin() {
    window.location.href = "login.html";
  }

  //   B4: Điều hướng login
  if (!isExist) {
    // Ok --> đẩy lên local
    delete user.repeatPassword;
    accountsDB.push(user);

    localStorage.setItem("accounts", JSON.stringify(accountsDB));
    // Điều hướng login
    redirectToLogin();
  } else {
    error.isError = true;
    error.msgEmail =
      "Email đã tồn tại, vui lòng đăng nhập hoặc đăng ký email khác";

    renderError(error);
  }
});
// Lấy thời gian hiện tại dưới dạng timestamp (miligiây)
const timestamp = Date.now();


// lấy thông tin người dùng

function getUser() {
  return {
    userId: timestamp.toString().substring(0, 10),
    userName: addUserName.value,
    email: addEmail.value.toLowerCase().trim(),
    password: addPassword.value,
    repeatPassword: addRepeatPassword.value,
    birthday: "",
    gender: "",
    age: "",
    phone: "",
    japaneseLevel: "",
    address: "",
    country: "",
    creditNumber: "",
    avatar: "https://grn-admin.mpoint.vn/uploads/avatar-mac-dinh.png",
    status: "active",
  };
}
function checkError(user) {
  const error = {
    isError: false,
    msgUserName: "",
    msgEmail: "",
    msgPassword: "",
    msgRepeatPassword: "",
  };

  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!user.userName) {
    error.isError = true;
    error.msgUserName = "Tên tài khoản không được để trống";
  }
  if (user.password !== user.repeatPassword) {
    error.isError = true;
    error.msgRepeatPassword = "Mật khẩu không trùng khớp, vui lòng nhập lại";
  }
  if (!user.password) {
    error.isError = true;
    error.msgPassword = "Mật khẩu không được để trống";
  }
  if (!user.repeatPassword) {
    error.isError = true;
    error.msgRepeatPassword = "Nhập lại mật khẩu không được để trống";
  }

  if (!user.email.match(validRegex)) {
    error.isError = true;
    error.msgEmail = "Email không đúng định dạng";
  }

  return error;
}

function renderError(error) {
  const errorUserNameElement = document.querySelector("#error-user");
  const errorEmailElement = document.querySelector("#error-email");

  const errorPasswordElement = document.querySelector("#error-password");
  const errorRepeatPasswordElement = document.querySelector(
    "#error-repeat-password"
  );
  errorUserNameElement.textContent = error.msgUserName;
  errorEmailElement.textContent = error.msgEmail;
  errorPasswordElement.textContent = error.msgPassword;
  errorRepeatPasswordElement.textContent = error.msgRepeatPassword;
}
