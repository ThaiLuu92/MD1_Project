// Lấy danh sách khóa học từ Local Storage
const coursesListAdmin = JSON.parse(localStorage.getItem("course"))
console.log(coursesListAdmin);

// Lấy tbody của bảng danh sách khóa học
const tbodyCourse = document.querySelector("#coursesList-adminPage tbody");

// Hàm cập nhật nội dung của tbody
function updateTable() {
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
            <button type="button" class="btn btn-success" onclick="viewCourse(${index})">Xem</button>
            <button type="button" class="btn btn-primary" onclick="editCourse(${index})">Sửa</button>
            <button type="button" class="btn btn-danger" onclick="deleteCourse(${index})">Xóa</button>
          </td>
        </tr>
      `;
    });
  
    // Thêm HTML vào tbody
    tbodyCourse.innerHTML = tableCourseHTML;
  }
  
  // Gọi hàm cập nhật nội dung của tbody
  updateTable();

 // Hàm xem khóa học
 function viewCourse(index) {
    const course = coursesListAdmin[index];
    
    // Đặt giá trị của các thẻ input bằng thông tin khóa học
    document.getElementById("editCourseCode").value = course.code;
    document.getElementById("editCourseName").value = course.name;
    document.getElementById("editCourseDescription").value = course.description;
    document.getElementById("editCourseDuration").value = course.duration;
    document.getElementById("editCoursePriceVND").value = course.price_VND;
    document.getElementById("editCoursePriceJPN").value = course.price_JPN;
    document.getElementById("editCourseType").value = course.type;
    
    // Hiển thị modal
    const courseDetailsModal = new bootstrap.Modal(document.getElementById("courseDetailsModal"));
    courseDetailsModal.show();
  }




