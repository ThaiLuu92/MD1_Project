
  const courseList = JSON.parse(localStorage.getItem("course"));

  const url = new URL(location)
  const param = url.searchParams
  const course = param.get('course')

  
  const courseMenuElement = document.getElementById("courses-menu-black")
  const courseBoardElement = document.getElementById("course-board")
  courseMenuElement.innerHTML =  `
  <div class="container courses-menu">
  
  <div class="courses-menu-price">
    <a href="/courses-jlptn5.html" >
      <div class="p-3">JLPT - ${course.type}</div>
    </a>
    <a href="#" class="courses-price-link"><span class="p-4">${course.price_VND} / ${course.duration} </span><i
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
  `
courseBoardElement.innerHTML  = `<h3>${course}</h3>
<div class="board-title">KHÓA HỌC JLPT ${course.type}</div>
<div class="board-name"><span>ONLINE</span> ${course.type}</div>
<div class="board-expired">Thời gian học ${course.duration}</div>
<div class="board-price"><span>JPN</span> ${course.price_JPN}¥ / <span>VND</span> ${course.price_VND}</div>
`









