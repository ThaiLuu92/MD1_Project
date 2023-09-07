// Render Khóa Học
renderCatalogogy(1)
function renderCatalogogy() {
  const ulElement = document.getElementById("pills-tab");
  const category = JSON.parse(localStorage.getItem("category"));

  const content = category.map((item,i) => {
    return `
    <li class="nav-item" role="presentation">
    <button ${item.code=="jlpt"? 'class="nav-link btn-csl active"': 'class="nav-link btn-csl"' } id="pills-jlpt-tab" data-bs-toggle="pill"
      data-bs-target="#pills-jlpt" type="button" role="tab" aria-controls="pills-jlpt" aria-selected="true"
      class="btn btn-outline-primary" onclick="handleCategory('${item.code}')">
      ${item.title}
    </button>
  </li>
`;
  }).join("");
  ulElement.innerHTML = content;
  console.log(category);
}
handleCategory(`jlpt`)


function handleCategory(item){
console.log(item);
 const ulElement = document.getElementById("course-jlpt");
 const course = getLocalStorage("course")
 const courseFilter = course.filter(elememt => elememt.category === item ) 
 const renderCategory = courseFilter.map((value) => {
    return `
    <li class="nav-item">
                  <span class="nav-link btn-csl-jlpt" href="" id="course-jlpt-n4" onclick="handleRenderCourse('${value.type}')"><button type="button"
                      class="btn btn-outline-primary">
                      ${value.name}
                    </button></span>
                </li>
    `;

 }).join("");
 ulElement.innerHTML = renderCategory;

    
 }



function handleRenderCourse(course) {
    window.location.href = "/courses-detail.html?course="+course;
    
}

