const courseList = getLocalStorage("course");
// Lấy thông tin người dùng từ localStorage
const getUserData = getLocalStorage("accounts");
const getuserLogin = getLocalStorage("userLogin");

const url = new URL(location);
const param = url.searchParams;
const course = param.get("course");

const courseDetail = courseList.find((item) => item.type === course);

const courseMenuElement = document.getElementById("courses-menu-black");
const courseBoardElement = document.getElementById("course-board");
const payCourseCardElement = document.getElementById("pay-course-card");

courseMenuElement.innerHTML = `
  <div class="container courses-menu">
  
  <div class="courses-menu-price">
    <a href="/courses-jlptn5.html" >
      <div class="p-3">JLPT - ${courseDetail.type}</div>
    </a>
    <a href="#" class="courses-price-link"><span class="p-4">${courseDetail.price_VND.toLocaleString()} / ${courseDetail.duration
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
<div class="board-btn">
          <div class="board-btn"><button class="board-btn-ntv">Nhận tư vấn </button>
            <!-- Nút để mở modal 1 -->
            <button class="btn btn-primary board-btn-buy" data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal" ">Mua
              ngay</button>
          </div>
        </div>

`;

payCourseCardElement.innerHTML = `
 <div class="course-name">${courseDetail.name}</div>
  <div class="course-detail">
  <div><span><b>Học phí :</b></span><span> ${courseDetail.price_VND.toLocaleString()}</span><span> VND</span></div>
  <div><span><b>Thời hạn :</b></span><span> ${
    courseDetail.duration
  }</span></div>
  <div><span><b>Mã số :</b></span><span> ${courseDetail.code}</span></div>
  </div>
  <div class="course-discount-code"><input type="text" placeholder="Mã giám giá "><button>Áp dụng</button></div>
  <div class="total-payment"><span>Tổng tiền:</span> <span>${courseDetail.price_VND.toLocaleString()} VND</span></div>
`;
let shouldProceedToModal2 = true; // Biến kiểm tra, mặc định cho phép chuyển sang modal 2

// hanlde btn "Mua ngay"
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
      customerNameElement.value = currentUser.userName;
      emailElement.value = currentUser.email;
      phoneNumberElement.value = currentUser.phone;
      document.getElementById("birthDate").value = currentUser.birth || "";
      document.getElementById("address").value = currentUser.address || "";

      disableButton();
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

        // Cập nhật thông tin của người dùng hiện tại
        currentUser.userName = customerName;
        currentUser.email = email;
        currentUser.phone = phoneNumber;

        // Lưu danh sách thông tin khách hàng vào Local Storage
        setLocalStorage("accounts", getUserData);
      });
    }
  }
});

// khi thay đổi giá trị các ô input thì gọi hàm disableButton
document
  .getElementById("customerName")
  .addEventListener("change", disableButton);
document
  .getElementById("phoneNumber")
  .addEventListener("change", disableButton);
document.getElementById("email").addEventListener("change", disableButton);

function disableButton() {
  // Lấy giá trị từ các trường input
  let customerName = document.getElementById("customerName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  // kiểm tra xem các trường thông tin bắt buộc đã được điền đầy đủ hay không
  if (customerName == "" || phoneNumber == "" || email == "") {
    // Đặt biến shouldProceedToModal2 thành false để ngăn chặn việc chuyển modal
    // shouldProceedToModal2 = true
    const saveAndNextButton = document.querySelector("#save-and-next-infor");
    // disable nút lưu thông tin
    saveAndNextButton.disabled = true;

    // Thay đổi nội dung thông báo
    const notificationMessage = document.getElementById("notification-message");
    notificationMessage.textContent =
      "Vui lòng điền đầy đủ thông tin bắt buộc.";

    // Hiển thị phần tử thông báo
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    return;
  } else {
    // enable nút lưu thông tin
    const saveAndNextButton = document.querySelector("#save-and-next-infor");
    saveAndNextButton.disabled = false;
    // Hiển thị phần tử thông báo
    const notification = document.getElementById("notification");
    notification.style.display = "none";
  }
}
disableButton();

// Lắng nghe sự kiện click trên nút "Đóng" của thông báo
document
  .getElementById("close-notification")
  .addEventListener("click", function () {
    // Ẩn phần tử thông báo
    const notification = document.getElementById("notification");
    notification.style.display = "none";
  });

// hàm xác nhận thẻ tín dụng và chyển sang trang check out
const hanldeConfirmCard = document.getElementById("nextCreditCardModal");
hanldeConfirmCard.addEventListener("click", function () {
  const form = document.getElementById("formCreditCardModal");
  if (getuserLogin && getUserData && getUserData.length > 0) {
    const currentUser = getUserData.find(
      (user) => user.email === getuserLogin.email
    );
    if (currentUser) {
      const customerCardNumberElement = document.getElementById("cardNumber");
      customerCardNumberElement.value = currentUser.creditNumber;

      // disableButtonConfirm();

      setLocalStorage("accounts", getUserData);
    }
  }
});

function disableButtonConfirm() {
  // Lấy giá trị từ các trường input
  let cardNumberEle = document.getElementById("cardNumber").value;
  let expirationDateEle = document.getElementById("expirationDate").value;
  let cvvEle = document.getElementById("cvv").value;

  // kiểm tra xem các trường thông tin bắt buộc đã được điền đầy đủ hay không
  if (cardNumberEle == "" || expirationDateEle == "" || cvvEle == "") {
    // Đặt biến shouldProceedToModal2 thành false để ngăn chặn việc chuyển modal
    // shouldProceedToModal2 = true
    const btnConfirmCreditCard = document.querySelector(
      "#btn-confirm-creditCard"
    );
    // disable nút lưu thông tin
    btnConfirmCreditCard.disabled = true;

    // Thay đổi nội dung thông báo
    const notificationMessage = document.getElementById("notification-message");
    notificationMessage.textContent =
      "Vui lòng điền đầy đủ thông tin bắt buộc.";

    // Hiển thị phần tử thông báo
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    return;
  } else {
    // enable nút lưu thông tin
    const btnConfirmCreditCard = document.querySelector(
      "#btn-confirm-creditCard"
    );
    btnConfirmCreditCard.disabled = false;
    // Hiển thị phần tử thông báo
    const notification = document.getElementById("notification");
    notification.style.display = "none";
  }
}
// disableButtonConfirm();

const confirmButtonBuy = document.getElementById("btn-confirm-creditCard");
confirmButtonBuy.addEventListener("click", function () {
  const url = new URL(location);
  const param = url.searchParams;
  const course = param.get("course");

  const courseDetail = courseList.find((item) => item.type === course);

  const purchasedCourse = {
    code: courseDetail.code,
    name: courseDetail.name,
    duration: courseDetail.duration,
    price_VND: courseDetail.price_VND,
    price_JPN: courseDetail.price_JPN,
    type: courseDetail.type,
  };

  // Lặp qua danh sách người dùng để tìm người dùng hiện tại
  for (const account of getUserData) {
    if (account.email === getuserLogin.email) {
      // Kiểm tra xem khóa học đã tồn tại trong myCourses của người dùng chưa
      const courseExists = account.myCourses.some((existingCourse) => {
        return existingCourse.code === purchasedCourse.code;
      });

      if (!courseExists) {
        // Nếu khóa học chưa tồn tại, thêm nó vào myCourses
        if (!account.myCourses) {
          account.myCourses = [purchasedCourse];
        } else {
          account.myCourses.push(purchasedCourse);
        }

        // Cập nhật dữ liệu người dùng trong Local Storage
        setLocalStorage("accounts", getUserData);

        // Thông báo mua thành công
        alert("Mua thành công!");

       
        // Chuyển hướng người dùng trở lại trang "mycourses.html"
        window.location.href = "/account/mycourses.html";
      } else {
        
        // Nếu khóa học đã tồn tại, bạn có thể thông báo cho người dùng rằng họ đã mua khóa học này trước đó.
        alert("Bạn đã mua khóa học này trước đó.");
        
      }

      break; // Khi tìm thấy người dùng, thoát khỏi vòng lặp
    }
  }

  // Sau khi thêm khóa học vào danh sách của người dùng hoặc thông báo rằng khóa học đã tồn tại, bạn có thể thực hiện các hành động khác ở đây
});


  

