// Lấy thông tin người dùng từ localStorage
const userData = getLocalStorage("accounts");
const userLogins = JSON.parse(localStorage.getItem("userLogin"));

// Lấy phần tử button "Chỉnh Sửa" và "Lưu"
const editButton = document.querySelector(".btn-outline-success");
const saveButton = document.querySelector(".btn-outline-dark");

// Lấy phần tử hiển thị avatar
const avatarInput = document.getElementById("avatar-input");
const changeAvatarButton = document.getElementById("change-avatar-button");
const avatarPreview = document.getElementById("avatar-preview");
// Bắt đầu chế độ chỉnh sửa ảnh đại diện khi nút "Thay đổi ảnh đại diện" được nhấn


// Lấy phần tử form
const form = document.getElementById("form-infor");

if (userLogins && userData && userData.length > 0) {
  const currentUser = userData.find((user) => user.email === userLogins.email);

  if (currentUser) {
    // Hiển thị thông tin user nếu có
    const userIdElement = document.getElementById("user-id");
    const userNameElement = document.getElementById("user-fullname");
    const userEmailElement = document.getElementById("user-email");
    const userBirthdayElement = document.getElementById("user-birthday");
    const userGenderElement = document.getElementById("user-gender");
    const userAgeElement = document.getElementById("user-age");
    const userPhoneElement = document.getElementById("user-phone");
    const userJapaneseLevelElement = document.getElementById(
      "user-japanese-level"
    );
    const userAddressElement = document.getElementById("user-address");
    const userCountryElement = document.getElementById("user-country");
    const userAvatarElement = document.getElementById("user-avatar");
    

    // Function để hiển thị thông tin người dùng
    function renderUserInfo(user) {
      userIdElement.textContent = user.userId || "Chưa cập nhật";
      userEmailElement.value = user.email || "Chưa cập nhật";
      userNameElement.value = user.userName || "Chưa cập nhật";
      userBirthdayElement.value = user.birthday || "Chưa cập nhật";
      userGenderElement.value = user.gender || "male"; // Giới tính mặc định là nam
      userAgeElement.value = user.age || "";
      userPhoneElement.value = user.phone || "Chưa cập nhật";
      userJapaneseLevelElement.value = user.japaneseLevel || "Chưa cập nhật";
      userAddressElement.value = user.address || "Chưa cập nhật";
      userCountryElement.value = user.country || "Chưa cập nhật";
      userAvatarElement.innerHTML = user.avatar ||`<img src="https://demoda.vn/wp-content/uploads/2022/04/hinh-cute-anh-cute-777x600.jpg" alt="" id="avatar-preview">`;
    }

    // Render thông tin người dùng ban đầu
    renderUserInfo(currentUser);
    function enableEditMode() {
      userNameElement.removeAttribute("disabled");
      userEmailElement.removeAttribute("disabled");
      userBirthdayElement.removeAttribute("disabled");
      userGenderElement.removeAttribute("disabled");
      userAgeElement.removeAttribute("disabled");
      userPhoneElement.removeAttribute("disabled");
      userJapaneseLevelElement.removeAttribute("disabled");
      userAddressElement.removeAttribute("disabled");
      userCountryElement.removeAttribute("disabled");

      editButton.style.display = "none";
      saveButton.style.display = "inline";
    }

    // Function để lưu thông tin sau khi chỉnh sửa
    function saveUserInfo() {
      currentUser.userName = userNameElement.value;
      currentUser.email = userEmailElement.value;
      currentUser.birthday = userBirthdayElement.value;
      currentUser.gender = userGenderElement.value;
      currentUser.age = userAgeElement.value;
      currentUser.phone = userPhoneElement.value;
      currentUser.japaneseLevel = userJapaneseLevelElement.value;
      currentUser.address = userAddressElement.value;
      currentUser.country = userCountryElement.value;


      // Lưu thông tin người dùng vào localStorage
      // Sử dụng hàm setLocalStorage (thay thế bằng hàm thực tế của bạn)
      setLocalStorage("accounts", userData);

      userNameElement.setAttribute("disabled", true);
      userEmailElement.setAttribute("disabled", true);
      userBirthdayElement.setAttribute("disabled", true);
      userGenderElement.setAttribute("disabled", true);
      userAgeElement.setAttribute("disabled", true);
      userPhoneElement.setAttribute("disabled", true);
      userJapaneseLevelElement.setAttribute("disabled", true);
      userAddressElement.setAttribute("disabled", true);
      userCountryElement.setAttribute("disabled", true);

      editButton.style.display = "inline";
      saveButton.style.display = "none";
    }

    // Event listener cho nút "Chỉnh Sửa"
    editButton.addEventListener("click", enableEditMode);

    // Event listener cho nút "Lưu"
    saveButton.addEventListener("click", saveUserInfo);
    
    
  }
}