
  const courseList = JSON.parse(localStorage.getItem("course"));


  const url = new URL(location);
  const param = url.searchParams;
  const course = param.get('course');

  const courseDetail = courseList.find((item) => item.type === course);
  console.log(courseDetail);
  

  const courseMenuElement = document.getElementById("courses-menu-black");
  const courseBoardElement = document.getElementById("course-board");
  courseMenuElement.innerHTML =  `
  <div class="container courses-menu">
  
  <div class="courses-menu-price">
    <a href="/courses-jlptn5.html" >
      <div class="p-3">JLPT - ${courseDetail.type}</div>
    </a>
    <a href="#" class="courses-price-link"><span class="p-4">${courseDetail.price_VND.toLocaleString()} / ${courseDetail.duration} </span><i
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
courseBoardElement.innerHTML  = `
<div class="board-title">KHÓA HỌC JLPT ${courseDetail.type}</div>
<div class="board-name"><span>ONLINE</span> ${courseDetail.type}</div>
<div class="board-expired">Thời gian học ${courseDetail.duration}</div>
<div class="board-price"><span>JPN</span> ${courseDetail.price_JPN.toLocaleString()}¥ / <span>VND</span> ${courseDetail.price_VND.toLocaleString()}</div>
`;









