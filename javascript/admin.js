

// Lưu danh sách người dùng trở lại Local Storage
function saveUsers(users) {
    localStorage.setItem("accounts", JSON.stringify(users));
}

// Hàm hiển thị thông tin người dùng

    // Lấy danh sách người dùng từ Local Storage
    const users = getLocalStorage("accounts");
    function renderUserList(users) {
      const tbody = document.querySelector("#userList tbody");
      tbody.innerHTML = ""; // Xóa nội dung tbody hiện có
    
      let tableHTML = "";
    
      users.forEach((user, index) => {
        tableHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${user.userId}</td>
            <td>${user.email}</td>
            <td>${user.userName}</td>
            <td>${user.address}</td>
            <td>${user.status}</td>
            <td class="btn-td">
              <button type="button" class="btn btn-success" onclick="viewUser(${index})">Xem</button>
              <button type="button" class="btn btn-danger" onclick="blockUser(${index})">Khóa</button>
            </td>
          </tr>
        `;
      });
    
      tbody.innerHTML = tableHTML;
    }

    renderUserList(users)
    // Hàm hiển thị thông tin chi tiết người dùng
    function viewUser(index) {
    const users = getLocalStorage("accounts")
    const user = users[index];
    
    // Đổ thông tin người dùng vào các phần tử HTML tương ứng
  document.getElementById("detailUserId").textContent = user.userId;
  document.getElementById("detailUserEmail").textContent = user.email;
  document.getElementById("detailUserName").textContent = user.userName;
  document.getElementById("detailUserGender").textContent = user.gender;
  document.getElementById("detailUserPhone").textContent = user.phone;
  document.getElementById("detailUserJapaneseLevel").textContent = user.japaneseLevel;
  document.getElementById("detailUserAddress").textContent = user.address;
  document.getElementById("detailUserCountry").textContent = user.country;

  // Hiển thị modal
  const userDetailsModal = new bootstrap.Modal(document.getElementById("userDetailsModal"));
  userDetailsModal.show();
  
    // Hiển thị div thông tin người dùng
    document.getElementById("userDetails").style.display = "block";
  }

  // Hàm tìm kiếm người dùng
function searchUser() {
    const searchTerm = document.querySelector("#input-search-bar").value.toLowerCase(); // Lấy giá trị từ ô tìm kiếm và chuyển đổi thành chữ thường
    const users = getLocalStorage("accounts"); // Lấy danh sách người dùng
    const filteredUsers = users.filter((user) => {
      // Sử dụng hàm filter để lọc người dùng
      return (
        // user.userId.toLowerCase().includes(searchTerm) ||
        // user.email.toLowerCase().includes(searchTerm) ||
        user.userName.toLowerCase().includes(searchTerm) 
        // user.address.toLowerCase().includes(searchTerm) ||
        // user.status.toLowerCase().includes(searchTerm)
      );
    });
  
    // Gọi hàm renderUserList với danh sách người dùng đã lọc
    renderUserList(filteredUsers);
  }




 
  

  
