// Lấy thông tin người dùng từ localStorage
const userData = getLocalStorage("accounts");
const userLogins = JSON.parse(localStorage.getItem("userLogin"));

// Lấy phần tử hiển thị avatar
const avatarInput = document.getElementById("avatar-input");
const changeAvatarButton = document.getElementById("change-avatar-button");
const avatarPreview = document.getElementById("avatar-preview");
// Bắt đầu chế độ chỉnh sửa ảnh đại diện khi nút "Thay đổi ảnh đại diện" được nhấn

// Lấy phần tử form

if (userLogins && userData && userData.length > 0) {
  const currentUser = userData.find((user) => user.email === userLogins.email);

  if (currentUser) {
    const userAvatarElement = document.getElementById("user-avatar");
    const avatarPreview = document.getElementById("avatar-preview");
    

    // Function để hiển thị thông tin người dùng
    function renderUserInfo(user) {
      userAvatarElement.innerHTML = `<img src="${
        user.avatar || "https://grn-admin.mpoint.vn/uploads/avatar-mac-dinh.png"
      }" alt="" id="avatar-preview">`;
    }

    function renderAvatar(user) {
      const defaultAvatarURL =
        "https://grn-admin.mpoint.vn/uploads/avatar-mac-dinh.png";

      // Kiểm tra xem user và avatar có tồn tại
      if (user && user.avatar) {
        // Nếu có avatar, sử dụng nó
        const avatarURL = user.avatar;
        userAvatarElement.innerHTML = `<img src="${avatarURL}" alt="" id="avatar-preview">`;
        const changeAvatar = document.querySelector("#avatar>img");
        changeAvatar.src = avatarURL;
        userLogins.avatar = avatarURL;
    
        setLocalStorage("userLogin", userLogins);
      } else {
        // Nếu không có avatar, sử dụng ảnh mặc định
        userAvatarElement.innerHTML = `<img src="${defaultAvatarURL}" alt="" id="avatar-preview">`;
      }
    }
   
    renderAvatar();


    

    avatarInput.addEventListener("change", () => {
      const selectedFile = avatarInput.files[0];

      if (selectedFile) {
        // Kiểm tra nếu tệp được chọn là hình ảnh
        if (selectedFile.type.startsWith("image/")) {
          const reader = new FileReader();

          // Đọc tệp hình ảnh và hiển thị nó trên trang
          reader.onload = (event) => {
            avatarPreview.src = event.target.result;
            currentUser.avatar = event.target.result; // Lưu ảnh mới vào đối tượng người dùng
            // Lưu thông tin người dùng vào localStorage sau khi thay đổi avatar
            setLocalStorage("accounts", userData);
            setLocalStorage("userLogin", userLogins);
            renderAvatar(currentUser); // Hiển thị avatar mới
          };

          reader.readAsDataURL(selectedFile);
        } else {
          alert("Vui lòng chọn một tệp hình ảnh.");
          avatarInput.value = null;
        }
      }
    });

    // Bắt đầu chế độ chỉnh sửa ảnh đại diện khi nút "Thay đổi ảnh đại diện" được nhấn
    changeAvatarButton.addEventListener("click", () => {
      avatarInput.click(); // Mở hộp thoại chọn tệp
    });
  }
  
}


