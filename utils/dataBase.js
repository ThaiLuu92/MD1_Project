const coursesDB = [{
    id_course: "jlpt-n5-01",
    name: "Khóa học N5",
    description: "Học N5",
    duration:"6 tháng",
    price_VND: 990000,
    price_JPN: 6200,
    image: "url",
    category: "jlpt",
    type: "N5",
},
{
    id_course: "jlpt-n4-02",
    name: "Khóa học N4",
    description: "Học N4",
    duration:"6 tháng",
    price_VND: 1490000 ,
    price_JPN: 9200,
    image: "url",
    category: "jlpt",
    type: "N4",
},
{
    id_course: "jlpt-n3-03",
    name: "Khóa học N3",
    description: "Học N3",
    duration:"8 tháng",
    price_VND: 2650000 ,
    price_JPN: 16400,
    image: "url",
    category: "jlpt",
    type: "N3",
},
{
    id_course: "jlpt-n3-04",
    name: "Khóa luyện đề N3",
    description: "Luyện đề N3",
    duration:"2 tháng",
    price_VND: 800000 ,
    price_JPN: 4900,
    image: "url",
    category: "jlptPractice",
    type: "N3-Practice",
},
{
    id_course: "jlpt-n2-27",
    name: "Khóa luyện đề N2",
    description: "Luyện đề N2",
    duration:"2 tháng",
    price_VND: 850000 ,
    price_JPN: 5200,
    image: "url",
    category: "jlptPractice",
    type: "N2-Practice",
},
];


const categoryDB = [
    {
        code: "jlpt",
        title: "Học JLPT"
    },
    {
        code: "jlptPractice",
        title: "Luyện đề JLPT"
    },
    {
        code: "kaiwa",
        title: "Lớp giao tiếp"
    },
    {
        code: "business",
        title: "Tiếng Nhật Business"
    },
]

setLocalStorage("course",coursesDB)
setLocalStorage("category",categoryDB)

