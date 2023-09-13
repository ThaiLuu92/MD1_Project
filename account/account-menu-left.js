// Lấy thông tin người dùng từ localStorage
const userData = getLocalStorage("accounts");
const userLogins = JSON.parse(localStorage.getItem("userLogin"));

if (userLogins && userData && userData.length > 0) {
  const currentUser = userData.find((user) => user.email === userLogins.email);

  if (currentUser) {
    const userAvatarElement = document.getElementById("user-avatar");

    // Function để hiển thị thông tin người dùng
    function renderUserInfo(user) {
      userAvatarElement.innerHTML = `<img src="${
        user.avatar || "https://grn-admin.mpoint.vn/uploads/avatar-mac-dinh.png"
      }" alt="" id="avatar-preview">`;
    }

    // Function để render và cập nhật avatar
    function renderAvatar(user) {
      const defaultAvatarURL =
        "https://grn-admin.mpoint.vn/uploads/avatar-mac-dinh.png";

      const avatarURL = user.avatar || defaultAvatarURL;

      userAvatarElement.innerHTML = `<img src="${avatarURL}" alt="" id="avatar-preview">`;
      userLogins.avatar = avatarURL;

      // Lưu avatar vào localStorage
      setLocalStorage("userLogin", userLogins);
    }

    // Khởi tạo hiển thị avatar
    renderAvatar(currentUser);

    // Lắng nghe sự kiện thay đổi avatar
    avatarInput.addEventListener("change", () => {
      const selectedFile = avatarInput.files[0];

      if (selectedFile && selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = (event) => {
          avatarPreview.src = event.target.result;
          currentUser.avatar = event.target.result;

          // Lưu thông tin người dùng vào localStorage sau khi thay đổi avatar
          setLocalStorage("accounts", userData);
          renderAvatar(currentUser); // Hiển thị avatar mới
        };

        reader.readAsDataURL(selectedFile);
      } else {
        alert("Vui lòng chọn một tệp hình ảnh.");
        avatarInput.value = null;
      }
    });

    // Bắt đầu chế độ chỉnh sửa ảnh đại diện khi nút "Thay đổi ảnh đại diện" được nhấn
    changeAvatarButton.addEventListener("click", () => {
      avatarInput.click(); // Mở hộp thoại chọn tệp
    });
  }
}

// Lấy phần tử nút "Đăng xuất" và thêm sự kiện click
const btnLogoutAcc = document.getElementById("btnLogoutAcc");

btnLogoutAcc?.addEventListener("click", function () {
  // Xóa thông tin đăng nhập khỏi LocalStorage
  localStorage.removeItem("userLogin");
  // Điều hướng người dùng về trang index.html sau khi đăng xuất
  window.location.href = "/index.html";
});
