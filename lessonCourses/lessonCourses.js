// Lấy thông tin người dùng từ localStorage
const getAccounts = getLocalStorage("accounts");
const getuserLogin = getLocalStorage("userLogin");

const url = new URL(location);
const param = url.searchParams;
const code = param.get("code");

const userDB = getAccounts.find((user) => (user.email = getuserLogin.email));

const course = userDB.myCourses.find((item) => item.code == code);
console.log(course);
function renderCourseName(course) {
  const getCourseName = document.querySelector("#title-course-name");
  getCourseName.innerHTML = `${course.name}`;
}

renderCourseName(course);

const processingLesson =
  course.roadmap.find((lesson) => lesson.status == "processing") ??
  course.roadmap[0];


function renderLesson(lesson) {
  const getCourseMenu = document.querySelector("#course-menu .lesson");
  getCourseMenu.innerHTML = `
  <div class="lesson-title"><h3>${lesson.name}</h3> ${
    lesson.status == "processing"
      ? '<button onclick="hanldeCompleteLesson(' +
        lesson.id +
        ')"' +
        ">Hoàn thành bài học</button>"
      : ""
  }</div>
                <iframe  src="${lesson.video}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                
                    <div class="lesson-exam">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">Tài liệu - Kiểm Tra</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Bình Luận của học
                                    viên</button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                                tabindex="0"><img src="${lesson.exam}" alt="">
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...
                            </div>
                    
                        </div>
                    </div>
   `;
}
renderLesson(processingLesson);

function renderListLesson() {
  const getListLesson = document.querySelector(".stage-bar");

  const contentStage = course.roadmap
    .map(
      (lesson) =>
        `<div onclick="hanldeSelectLesson(${
          lesson.id
        })" class="lesson-title-name ${
          lesson.status == "complete"
            ? "lesson-complete"
            : lesson.status == "processing"
            ? "lesson-processing"
            : "lesson-block"
        }" ><span>${lesson.name}</span><span>${
          lesson.status == "complete"
            ? "Đã hoàn thành"
            : lesson.status == "processing"
            ? "Đang học"
            : "Chưa học"
        }</span></div>`
    )
    .join("");
  getListLesson.innerHTML = contentStage;
}
renderListLesson();

function hanldeSelectLesson(id) {
  const lesson = course.roadmap.find((lesson) => lesson.id == id);
  if (lesson.status === "block") {
    return alert(
      "Bạn chưa hoàn thành khóa học trước đó. Vui lòng hoàn thành để tiếp tục"
    );
  }
  renderLesson(lesson);
}

function hanldeCompleteLesson(id) {
  let index;
  const lesson = course.roadmap.find((lesson, i) => {
    if (lesson.id == id) {
      index = i;
      return true;
    }
  });
  lesson.status = "complete";

  if (course.roadmap.length == index + 1) {
    setLocalStorage("userLogin", getuserLogin);
    setLocalStorage("accounts", getAccounts);

    renderListLesson();
    alert("Chúc mừng bạn đã hoàn thành khóa học");
  } else {
    course.roadmap[index + 1].status = "processing";
    renderLesson(course.roadmap[index + 1]);
    renderListLesson();
  }

  // Cập nhật phần trăm hoàn thành sau khi hoàn thành một bài học
  updateCompletionPercentage();

  const userDB = getAccounts.find((user) => (user.email = getuserLogin.email));
  setLocalStorage("userLogin", userDB);
  setLocalStorage("accounts", getAccounts);
}

// Truy vấn tới phần tử hiển thị tỷ lệ hoàn thành
const completionPercentage = document.getElementById("completion-percentage");

// Tính tỷ lệ hoàn thành ban đầu
const totalLessons = course.roadmap.length;
const completedLessons = course.roadmap.filter(
  (lesson) => lesson.status === "complete"
).length;
completionPercentage.textContent = `${calculateCompletionPercentage().toFixed(
  0
)}%`;

function updateCompletionPercentage() {
  const newPercentage = calculateCompletionPercentage();
  completionPercentage.textContent = `${newPercentage.toFixed(0)}%`;
}

function calculateCompletionPercentage() {
  const completedLessons = course.roadmap.filter(
    (lesson) => lesson.status === "complete"
  ).length;
  return (completedLessons / totalLessons) * 100;
}
