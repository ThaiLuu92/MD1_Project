
// Lấy thông tin người dùng từ localStorage
const getUserData = getLocalStorage("accounts");
const getuserLogin = getLocalStorage("userLogin");

if (getuserLogin && getUserData && getUserData.length > 0) {
  const currentUser = getUserData.find((user) => user.email === getuserLogin.email);
  if (
    currentUser &&
    currentUser.myCourses &&
    currentUser.myCourses.length > 0
  ) {
    const listMycourses = document.querySelector(".list-mycourses");

    let htmlContent = "";

    currentUser.myCourses.forEach((course) => {
      console.log(course);
      htmlContent += `
        <div class="mycourses-container" onclick="hanldeLesson(${course.code})">
          <div class="mycourses-card">
            <img src=${course.image} alt="">
          </div>
          <div class="mycourses-name">${course.name}</div>
        </div>`;
    });
    listMycourses.innerHTML = htmlContent;
  } else {
    // Nếu currentUser.myCourses.length = 0, hiển thị thông báo
    const listMycourses = document.querySelector(".list-mycourses");
    listMycourses.innerHTML =
      '<div class="notification-empty-container">Bạn chưa mua khóa học nào</div>';
  }
}

function hanldeLesson(lesson) {
  
  window.location.href = "/lessonCourses/lessonCourses.html?code=" + lesson;
}

