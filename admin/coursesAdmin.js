// Lấy danh sách khóa học từ Local Storage
const coursesListAdmin = JSON.parse(localStorage.getItem("course")) || [];

// Lấy phần tử button "Thêm" và "Lưu" trong Modal
const addCourseButton = document.querySelector("#addCourseChanges");

// Lấy tbody của bảng danh sách khóa học
const tbodyCourse = document.querySelector("#coursesListAdminPage tbody");

// Hàm cập nhật nội dung của tbody
function renderTable(coursesListAdmin) {
  let tableCourseHTML = "";

  coursesListAdmin.forEach((course, index) => {
    tableCourseHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${course.code}</td>
          <td>${course.name}</td>
          <td>${course.price_VND.toLocaleString()}</td>
          <td>${course.price_JPN.toLocaleString()}</td>
          <td>10</td>
          <td class="btn-admin">
            <button type="button" class="btn btn-success" onclick="handleShowForm(${index}, 'view')">Xem</button>
            <button type="button" class="btn btn-primary" onclick="handleShowForm(${index}, 'edit')">Sửa</button>
            <button type="button" class="btn btn-danger" onclick="deleteCourse(${index})">Xóa</button>
          </td>
        </tr>
      `;
  });

  // Thêm HTML vào tbody
  tbodyCourse.innerHTML = tableCourseHTML;
}

// Gọi hàm cập nhật nội dung của tbody
renderTable(coursesListAdmin);

// element form

const courseCodeElement = document.getElementById("editCourseCode");
const courseNameElement = document.getElementById("editCourseName");
const courseDescriptionElement = document.getElementById(
  "editCourseDescription"
);
const courseDurationElement = document.getElementById("editCourseDuration");
const coursePriceVNDElement = document.getElementById("editCoursePriceVND");
const coursePriceJPNElement = document.getElementById("editCoursePriceJPN");
const courseCategoryElement = document.getElementById("editCourseCategory");
const courseTypeElement = document.getElementById("editCourseType");
const courseCourseImagelement = document.getElementById("editCourseImage");


// Mở form
function handleShowForm(index, action) {
  // Hiển thị modal
  const courseDetailsModal = new bootstrap.Modal(
    document.getElementById("courseDetailsModal")
  );
  courseDetailsModal.show();
  if (action == "edit" || action == "view") {
    const course = coursesListAdmin[index];
    courseCodeElement.value = course.code;
    courseNameElement.value = course.name;
    courseDescriptionElement.value = course.description;
    courseDurationElement.value = course.duration;
    coursePriceVNDElement.value = course.price_VND.toLocaleString();
    coursePriceJPNElement.value = course.price_JPN.toLocaleString();
    courseCategoryElement.value = course.category;
    courseTypeElement.value = course.type;
    courseCourseImagelement.value = course.image;
  }
  if (action == "add") {
    addCourseButton.textContent = "Thêm";
  }
  if (action == "view") {
    addCourseButton.style.display = "none";
  }
  if (action == "edit") {
    addCourseButton.textContent = "Lưu";
    addCourseButton.setAttribute("onclick", `handleAddEdit(${index})`);
  }
}

// Đóng form
function handleCloseForm() {
  courseCodeElement.value = "";
  courseNameElement.value = "";
  courseDescriptionElement.value = "";
  courseDurationElement.value = "";
  coursePriceVNDElement.value = "";
  coursePriceJPNElement.value = "";
  courseCategoryElement.value = "";
  courseTypeElement.value = "";
  courseCourseImagelement.value = "";
  addCourseButton.style.display = "inline-block";
}

// thêm sửa
function handleAddEdit(index) {
  // Lấy thông tin course
  const course = getCourse();

  // Đẩy object course mới vào mảng
  if (index == undefined) {
    coursesListAdmin.push(course);
  } else {
    const newData = coursesListAdmin[index];
    for (const key in course) {
      newData[key] = course[key];
    }
  }

  // Lưu danh sách khóa học mới vào Local Storage
  localStorage.setItem("course", JSON.stringify(coursesListAdmin));
  // Hiển thị nội dung của bảng
  renderTable(coursesListAdmin);

  handleCloseForm();
}

// Hàm xóa khóa học
function deleteCourse(index) {
  // Hiển thị xác nhận xóa
  if (confirm("Bạn có chắc chắn muốn xóa khóa học này?")) {
    // Xóa khóa học khỏi danh sách
    coursesListAdmin.splice(index, 1);

    // Lưu danh sách khóa học mới vào Local Storage
    localStorage.setItem("course", JSON.stringify(coursesListAdmin));

    // Cập nhật nội dung của tbody
    renderTable(coursesListAdmin);
  }
}

// Hàm tìm kiếm khóa học
function searchCourse() {
  // Lấy giá trị từ ô tìm kiếm và chuyển đổi thành chữ thường
  const searchC = document
    .querySelector("#input-search-course")
    .value.toLowerCase();

  // Lọc danh sách khóa học dựa trên giá trị tìm kiếm
  const filteredCourse = coursesListAdmin.filter((course) => {
    // Kiểm tra xem tên khóa học có chứa từ khóa tìm kiếm không
    return course.name.toLowerCase().includes(searchC);
  });
  // Gọi hàm renderTable để cập nhật nội dung của bảng với danh sách khóa học đã được lọc
  console.log(filteredCourse);
  renderTable(filteredCourse);
}

function getCourse() {
  return {
    code: Number(courseCodeElement.value),
    name: courseNameElement.value,
    description: courseDescriptionElement.value,
    duration: courseDurationElement.value,
    price_VND: Number(coursePriceVNDElement.value),
    price_JPN: Number(coursePriceJPNElement.value),
    image: courseCourseImagelement.value,
    category: courseCategoryElement.value,
    type: courseTypeElement.value,
  };
}

function sortCourses() {
  const sortBy = document.getElementById("sortBy").value;

  // Sắp xếp danh sách khóa học dựa trên các tùy chọn được chọn
  if (sortBy === "name") {
    coursesListAdmin.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "priceLowToHigh") {
    coursesListAdmin.sort((a, b) => a.price_VND - b.price_VND);
  } else if (sortBy === "priceHighToLow") {
    coursesListAdmin.sort((a, b) => b.price_VND - a.price_VND);
  } else if (sortBy === "japaneseLevel") {
    coursesListAdmin.sort((a, b) => a.category.localeCompare(b.category));
  }

  // Gọi hàm để cập nhật danh sách khóa học sau khi sắp xếp
  renderTable(coursesListAdmin);
}


document.getElementById("sortBy").addEventListener("change", sortCourses);

// Khởi đầu, sắp xếp mặc định
sortCourses();

