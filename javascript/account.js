// Lấy thông tin người dùng từ localStorage
const userData = getLocalStorage("accounts");
const userLogins = JSON.parse(localStorage.getItem("userLogin"));

// Lấy phần tử button "Chỉnh Sửa" và "Lưu"
const editButton = document.querySelector(".btn-outline-success");
const saveButton = document.querySelector(".btn-outline-dark");

if (userLogins && userData && userData.length > 0) {
  const currentUser = userData.find((user) => user.email === userLogins.email);

  if (currentUser) {
    // Hiển thị tên người dùng và email nếu có
    const userIdElement = document.getElementById("user-id");
    const userNameElement = document.getElementById("user-fullname");
    const userEmailElement = document.getElementById("user-email");
    const userBirthdayElement = document.getElementById("user-birthday");
    const userPhoneElement = document.getElementById("user-phone");
    const userJapaneseLevelElement = document.getElementById(
      "user-japanese-level"
    );
    const userAddressElement = document.getElementById("user-address");
    const userCountryElement = document.getElementById("user-country");

    userIdElement.textContent = `${currentUser.userId || "Chưa cập nhật"}`;
    userEmailElement.textContent = `${currentUser.email || "Chưa cập nhật"}`;
    userNameElement.textContent = `${currentUser.userName || "Chưa cập nhật"}`;
    userBirthdayElement.textContent = `${
      currentUser.birthday || "Chưa cập nhật"
    }`;
    userPhoneElement.textContent = `${currentUser.phone || "Chưa cập nhật"}`;
    userJapaneseLevelElement.textContent = `${
      currentUser.japaneseLevel || "Chưa cập nhật"
    }`;
    userAddressElement.textContent = `${
      currentUser.address || "Chưa cập nhật"
    }`;
    userCountryElement.textContent = `${
      currentUser.country || "Chưa cập nhật"
    }`;

    
    
  }
}
