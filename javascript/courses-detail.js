const courseList = getLocalStorage("course");
// Lấy thông tin người dùng từ localStorage
const getUserData = getLocalStorage("accounts");
const getuserLogin = getLocalStorage("userLogin");

const url = new URL(location);
const param = url.searchParams;
const course = param.get("course");

const courseDetail = courseList.find((item) => item.type === course);
console.log(courseDetail);

const courseMenuElement = document.getElementById("courses-menu-black");
const courseBoardElement = document.getElementById("course-board");
courseMenuElement.innerHTML = `
  <div class="container courses-menu">
  
  <div class="courses-menu-price">
    <a href="/courses-jlptn5.html" >
      <div class="p-3">JLPT - ${courseDetail.type}</div>
    </a>
    <a href="#" class="courses-price-link"><span class="p-4">${courseDetail.price_VND.toLocaleString()} / ${
  courseDetail.duration
} </span><i
        class="fa-solid fa-cart-plus"></i></a>
  </div>
  <div class="courses-menu-button">
    <a href="/courses.html" class="p-4-courses-link">
      <p>Các khóa học khác</p>
    </a>
    <a href="#" class="p-4-courses-try">
      <p>Học thử</p>
    </a>
   

  </div>
</div>
  `;
courseBoardElement.innerHTML = `
<div class="board-title">KHÓA HỌC JLPT ${courseDetail.type}</div>
<div class="board-name"><span>ONLINE</span> ${courseDetail.type}</div>
<div class="board-expired">Thời gian học ${courseDetail.duration}</div>
<div class="board-price"><span>JPN</span> ${courseDetail.price_JPN.toLocaleString()}¥ / <span>VND</span> ${courseDetail.price_VND.toLocaleString()}</div>
<div class="board-btn"><button class="board-btn-ntv">Nhận tư vấn </button>
<!-- Modal 1 -->
          <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <!-- Tiêu đề modal 1 -->
                  <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Thông tin khách hàng</h1>
                  <!-- Nút đóng modal 1 -->
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <!-- Form thông tin khách hàng -->
                  <div>(<span class="text-danger">*</span>) Thông tin bắt buộc</div><br>
                  <div id="notification" class="alert alert-danger" style="display: none;">
  <p id="notification-message"></p>
  <button id="close-notification" class="btn btn-sm btn-danger">Đóng</button>
</div
                  <form>
                    <div class="mb-3">
                      <label for="customerName" class="form-label">Tên khách hàng<span class="text-danger">*</span></label>
                      <!-- Thêm chú thích (*) cho trường bắt buộc -->
                      <input type="text" class="form-control required" id="customerName" placeholder="Nhập tên khách hàng">
                    </div>
                    <div class="mb-3">
                      <label for="phoneNumber" class="form-label">Số điện thoại<span class="text-danger">*</span></label>
                      <!-- Thêm chú thích (*) cho trường bắt buộc -->
                      <input type="tel" class="form-control required" id="phoneNumber" placeholder="Nhập số điện thoại">
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email<span class="text-danger">*</span></label>
                      <!-- Thêm chú thích (*) cho trường bắt buộc -->
                      <input type="email" class="form-control required" id="email" placeholder="Nhập địa chỉ email">
                    </div>
                    <div class="mb-3">
                      <label for="birthDate" class="form-label">Ngày sinh</label>
                      <input type="date" class="form-control" id="birthDate">
                    </div>
                    <div class="mb-3">
                      <label for="address" class="form-label">Địa chỉ</label>
                      <textarea class="form-control" id="address" rows="3" placeholder="Nhập địa chỉ"></textarea>
                    </div>
                    <!-- Nút "Lưu thông tin và tiếp tục" -->
                    <button id="save-and-next-infor" type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Lưu thông tin và tiếp tục</button>
                  </form>
                  
                </div>
                <div class="modal-footer">
                  <!-- Nút để mở modal 2 -->
                  
                </div>
              </div>
            </div>
          </div>

          <!-- Modal 2 -->
          <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <!-- Tiêu đề modal 2 -->
                  <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Lụa chọn hình thức thanh toán</h1>
                  <!-- Nút đóng modal 2 -->
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <!-- Form chọn phương thức thanh toán -->
        <form>
          <div class="mb-3">
            <label for="paymentMethod" class="form-label">Chọn phương thức thanh toán</label>
            <select class="form-select" id="paymentMethod">
              <option value="credit-card">Thẻ tín dụng</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Chuyển khoản ngân hàng</option>
            </select>
          </div>
        </form>
                </div>
                <div class="modal-footer">
                  <!-- Nút để quay lại modal 1 -->
                  <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Tiếp tục</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Nút để mở modal 1 -->
          <button class="btn btn-primary board-btn-buy" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Mua ngay</button>
</div>

`;
let shouldProceedToModal2 = true; // Biến kiểm tra, mặc định cho phép chuyển sang modal 2

// Thêm mã JavaScript xử lý khi người dùng nhấn nút "Mua ngay"
document.querySelector(".board-btn-buy").addEventListener("click", function () {
  // Lấy phần tử form
  const form = document.getElementById("form-user-info");

  if (getuserLogin && getUserData && getUserData.length > 0) {
    const currentUser = getUserData.find(
      (user) => user.email === getuserLogin.email
    );
    if (currentUser) {
      const customerNameElement = document.getElementById("customerName");
      const emailElement = document.getElementById("email");
      const phoneNumberElement = document.getElementById("phoneNumber");
      customerNameElement.value = currentUser.userName || "Chưa có thông tin";
      emailElement.value = currentUser.email || "Chưa có thông tin";
      phoneNumberElement.value = currentUser.phone || "Chưa có thông tin";
      document.getElementById("birthDate").value = currentUser.birth || "";
      document.getElementById("address").value =
        currentUser.address || "Chưa có thông tin";

      // Lắng nghe sự kiện khi người dùng thay đổi ngày sinh
      document
        .getElementById("birthDate")
        .addEventListener("change", function () {
          currentUser.birth = this.value;
        });

      // Lắng nghe sự kiện khi người dùng thay đổi địa chỉ
      document
        .getElementById("address")
        .addEventListener("change", function () {
          currentUser.address = this.value;
        });

      const saveAndNextButton = document.querySelector("#save-and-next-infor");
      saveAndNextButton.addEventListener("click", function () {
        // Lấy giá trị từ các trường input
        const customerName = customerNameElement.value;
        const email = emailElement.value;
        const phoneNumber = phoneNumberElement.value;

        // Kiểm tra xem các trường thông tin bắt buộc đã được điền đầy đủ hay không
        // Kiểm tra xem các trường thông tin bắt buộc đã được điền đầy đủ hay không
        if (!customerName || !phoneNumber || !email) {
          // Đặt biến shouldProceedToModal2 thành false để ngăn chặn việc chuyển modal
          shouldProceedToModal2 = false;
          // Thay đổi nội dung thông báo
          const notificationMessage = document.getElementById("notification-message");
          notificationMessage.textContent = "Vui lòng điền đầy đủ thông tin bắt buộc.";

          // Hiển thị phần tử thông báo
          const notification = document.getElementById("notification");
          notification.style.display = "block";
          return;
        }

        // Cập nhật thông tin của người dùng hiện tại
        currentUser.userName = customerName;
        currentUser.email = email;
        currentUser.phone = phoneNumber;

        // Lưu danh sách thông tin khách hàng vào Local Storage
        setLocalStorage("accounts", getUserData);

        // Sau khi cập nhật thông tin, kiểm tra biến shouldProceedToModal2 trước khi chuyển sang modal 2
        if (shouldProceedToModal2) {
          const modalToggle = new bootstrap.Modal(
            document.getElementById("exampleModalToggle2")
          );
          modalToggle.show();
        }
      });
    }
  }
});

// Lắng nghe sự kiện click trên nút "Đóng" của thông báo
document.getElementById("close-notification").addEventListener("click", function () {
  // Ẩn phần tử thông báo
  const notification = document.getElementById("notification");
  notification.style.display = "none";
});
