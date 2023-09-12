const coursesDB = [
  {
    id_course: "jlpt-n5-01",
    code: 1,
    name: "Khóa học N5",
    description: "Học N5",
    duration: "6 tháng",
    price_VND: 990000,
    price_JPN: 6200,
    image:
      "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",
    category: "jlpt",
    type: "N5",
  },
  {
    id_course: "jlpt-n4-02",
    code: 2,
    name: "Khóa học N4",
    description: "Học N4",
    duration: "6 tháng",
    price_VND: 1490000,
    price_JPN: 9200,
    image:
      "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",
    category: "jlpt",
    type: "N4",
  },
  {
    id_course: "jlpt-n3-03",
    code: 3,
    name: "Khóa học N3",
    description: "Học N3",
    duration: "8 tháng",
    price_VND: 2650000,
    price_JPN: 16400,
    image:
      "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",
    category: "jlpt",
    type: "N3",
  },
  {
    id_course: "jlpt-n3-04",
    code: 4,
    name: "Khóa luyện đề N3",
    description: "Luyện đề N3",
    duration: "2 tháng",
    price_VND: 800000,
    price_JPN: 4900,
    image:
      "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",
    category: "jlptPractice",
    type: "N3-Practice",
  },
  {
    id_course: "jlpt-n2-27",
    code: 27,
    name: "Khóa luyện đề N2",
    description: "Luyện đề N2",
    duration: "2 tháng",
    price_VND: 850000,
    price_JPN: 5200,
    image:
      "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",
    category: "jlptPractice",
    type: "N2-Practice",
  },
  {
    id_course: "kaiwa-n3",
    code: 37,
    name: "Kaiwa Sơ Cấp",
    description: "Giao Tiếp Sơ Cấp",
    duration: "3 tháng",
    price_VND: 850000,
    price_JPN: 5200,
    image:
      "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",
    category: "kaiwa",
    type: "N3-kaiwa",
  },
  {
    id_course: "business-n3",
    code: 47,
    name: "Tiếng Nhật Business Sơ cấp",
    description: "Tiếng Nhật Business Sơ cấp",
    duration: "3 tháng",
    price_VND: 850000,
    price_JPN: 5200,
    image:
      "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",
    category: "business",
    type: "N3-business",
  },
];


const categoryDB = [
    {
        code: "jlpt",
        title: "Học JLPT",
        content: "Khóa học JLPT",
    },
    {
        code: "jlptPractice",
        title: "Luyện đề JLPT",
        content: "Khóa luyện thi JLPT",
    },
    {
        code: "kaiwa",
        title: "Lớp giao tiếp",
        content: "Khóa học giao tiếp Tiếng Nhật",
    },
    {
        code: "business",
        title: "Tiếng Nhật Business",
        content: "Khóa học giao tiếp doanh nghiệp",
    },
    {
        code: "combo",
        title: "Khóa Combo",
        content: "Khóa học theo Combo",
    },
    {
        code: "free",
        title: "Miễn phí",
        content: "Kho tài liệu miễn phí",
    },
]



// setLocalStorage("course",coursesDB)
// setLocalStorage("category",categoryDB)
// setLocalStorage("accounts",accountsDB)

