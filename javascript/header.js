// Lấy thông tin người dùng từ LocalStorage
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userDatas = getLocalStorage("accounts");
// Lấy phần tử header cần cập nhật
const headerElement = document.getElementById("top-right");
// Kiểm tra xem người dùng đã đăng nhập hay chưa
if (userLogin) {
  // Nếu đã đăng nhập, cập nhật giao diện header
  headerElement.innerHTML = `

          <a href=""><i class="fa-brands fa-facebook fa-lg" style="color: #aac5ee" title="Follow on Facebook"></i></a>
          <a href=""><i class="fa-solid fa-envelope fa-lg" style="color: #aac5ee" title="Sent us an email"></i></a>

          <a href=""><i class="fa-brands fa-youtube fa-lg" style="color: #aac5ee" title="Follow on Youtube"></i></a>

          <form class="search" action="courses.html">
            <input type="text" name="q" id="inp-search" placeholder="Tìm kiếm" />
            <i
              class="fa-solid fa-magnifying-glass fa-lg" style="color: #6184c2"></i>
          </form>
          
          <button class="btn" id="btn-logout">Đăng xuất</button>
          <div id="avatar"><img src="${userLogin.avatar}" alt="" width: "100%></div>
        
`;
}
// Lấy phần tử nút "Đăng xuất" và thêm sự kiện click
const btnLogout = document.getElementById("btn-logout");

btnLogout?.addEventListener("click", function () {
  // Xóa thông tin đăng nhập khỏi LocalStorage
  localStorage.removeItem("userLogin");
  // Tải lại trang đã đăng xuất
  // location.reload();
  // Điều hướng người dùng về trang index.html sau khi đăng xuất
  window.location.href = "index.html"; 
});

// Lấy phần tử avatar
const avatarElement = document.querySelector("#avatar");

// Thêm sự kiện click cho avatar
avatarElement?.addEventListener("click", function () {
  // Điều hướng đến trang thông tin cá nhân
  window.location.href = "/account.html"; // Thay đổi đường dẫn theo trang thông tin cá nhân của bạn
});
// lấy giá trị của  ô tìm kiếm
const inpSearch = document.querySelector("#inp-search");
inpSearch.addEventListener("input", function () {
  // Lấy giá trị từ ô tìm kiếm và chuyển thành chữ thường (lowercase)
  const getInput = inpSearch.value.toLowerCase();
  

  // Lấy dữ liệu từ cơ sở dữ liệu local storage
  const data = getLocalStorage("course");

  // Lọc dữ liệu dựa trên tên khóa học chứa giá trị nhập vào
  const resultData = data.filter((element) =>
    element.name.toLowerCase().includes(getInput)
  );

  // Cập nhật tiêu đề tùy thuộc vào kết quả tìm kiếm
  const title = document.querySelector(".main-menu-title > h2");
  title.innerHTML = getInput === "" ? "Khóa học JLPT" : "Kết quả tìm kiếm";

  // Lấy phần tử chứa danh sách khóa học
  const searchEle = document.querySelector(".list-courses-container");

  // Xóa nội dung hiện tại
  searchEle.innerHTML = "";

  // Hiển thị kết quả tìm kiếm
  resultData.forEach((element) => {
    searchEle.innerHTML += `
    <div class="combo-item">
    <div class="card" style="width: 18rem;">
        <img src="/images/watchword-img.png" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">Khóa ${element.type}</h5>
          <p class="card-text">Thời hạn ${element.duration}</p>
          <p class="card-text">Mã số <b>${element.code}</b></p>
          <p class="card-text">VND <b>${element.price_VND.toLocaleString()}</b> / JPN <b>${element.price_JPN.toLocaleString()}</b></p>
    
    
          <div class="card-btn"><a href="#" class="btn btn-primary">Mua ngay</a></div>
          <div class="card-btn"><a href="/courses-detail.html?course=${element.type}" class="card-link">Xem chi tiết</a></div>
    
          
        </div>
        </div>
        </div>
    `;
  });
});









