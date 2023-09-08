
// Gọi hàm để render danh sách khóa học
renderCourseTab();

function renderCourseTab() {
  // Lấy các phần tử DOM cần sử dụng
    const courseTab  = document.getElementById("course-center-tabs");
    const courseListName = document.getElementById("list-courses");

  // Lấy dữ liệu danh mục và danh sách khóa học từ local storage
  const courseCard = JSON.parse(localStorage.getItem("category"));
  const courses = JSON.parse(localStorage.getItem("course"));

   // Tạo nội dung cho các tab chuyển đổi danh mục
  const content = courseCard
    .map((item) => {
      return `<li ${
        item.code == "jlpt"
          ? 'class="active"'
          : ''
      } onclick="handleClick(this)"><a href="#${item.code}"><span>${item.title}</span></a></li>
`;
    })
    .join("");
  courseTab.innerHTML = content;
   // Tạo danh sách các khóa học cho từng danh mục
  const title = courseCard
   .map((value) => {
    // Lọc danh sách khóa học theo danh mục
    const listCourse = courses.filter(course => course.category == value.code);
    // Tạo nội dung danh sách khóa học
    const contentListCourse = listCourse.map(course => `
    <div class="combo-item">
    <div class="card" style="width: 18rem;">
        <img src="/images/watchword-img.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${course.name}</h5>
        <p class="card-text">Thời hạn ${course.duration}</p>
        <p class="card-text">Mã số <b>${course.code}</b></p>
        <p class="card-text">VND <b>${course.price_VND.toLocaleString()}</b> / JPN <b>${course.price_JPN.toLocaleString()}</b></p>


        <div class="card-btn"><a href="#" class="btn btn-primary">Mua ngay</a></div>
        <div class="card-btn"><a href="/courses-detail.html?course=${course.type}" class="card-link">Xem chi tiết</a></div>

        
        </div>
    </div>
</div>`).join("");
    // Tạo nội dung danh mục khóa học
    return `
    <div class="main-menu-4 container" id="${value.code}">
        <div class="main-menu-title"><h2>${value.content}</h2></div>
        <div class="list-courses-container">
         
        ${contentListCourse}
        </div>
    </div>

    `;
   }).join("");
   // Hiển thị danh sách khóa học
   courseListName.innerHTML = title;
 

}

function handleClick(elememt) {
    const liElements = document.querySelectorAll("#course-center-tabs li")
    liElements.forEach(li => {
        li.classList.remove("active")
        
    });
    
    elememt.classList.add("active");

}




function handleCardsList(item) {
    console.log(item);
  const divElement = document.getElementById("jlpt");
  const card = getLocalStorage("course");
  const cardFilter = card.filter((elememt) => elememt.category === item);
  const renderCard = cardFilter
    .map((value) => {
      return `
      <div class="combo-item">
<div class="card" style="width: 18rem;">
    <img src="/images/watchword-img.png" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Khóa ${value.type}</h5>
      <p class="card-text">Thời hạn </p>${value.duration}
      <p class="card-text">Mã số <b>${value.code}</b></p>
      <p class="card-text">VND <b>${value.price_VND.toLocaleString()}</b> / JPN <b>${value.price_JPN.toLocaleString()}</b></p>


      <div class="card-btn"><a href="#" class="btn btn-primary">Mua ngay</a></div>
      <div class="card-btn"><a href="/courses-detail.html" class="card-link">Xem chi tiết</a></div>

      
    </div>
    </div>
    </div>
    `;
    })
    .join("");
    divElement.innerHTML = renderCard;
    console.log(cardFilter);
    
}


// const courseDetail = courseList.find((item) => item.type === course);



