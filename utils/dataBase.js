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
    roadmap: [
      {
        id: 1,
        lesson: "Bài 1",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 2,
        lesson: "Bài 2",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 3,
        lesson: "Bài 3",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 4,
        lesson: "Bài 4",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 5,
        lesson: "Bài 5",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
    ],
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
    roadmap: [
      {
        id: 1,
        lesson: "Bài 1",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 2,
        lesson: "Bài 2",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 3,
        lesson: "Bài 3",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 4,
        lesson: "Bài 4",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 5,
        lesson: "Bài 5",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
    ],
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
    roadmap: [
      {
        id: 1,
        lesson: "Bài 1",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 2,
        lesson: "Bài 2",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 3,
        lesson: "Bài 3",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 4,
        lesson: "Bài 4",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 5,
        lesson: "Bài 5",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
    ],
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
    roadmap: [
      {
        id: 1,
        lesson: "Bài 1",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 2,
        lesson: "Bài 2",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 3,
        lesson: "Bài 3",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 4,
        lesson: "Bài 4",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 5,
        lesson: "Bài 5",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
    ],
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
    roadmap: [
      {
        id: 1,
        lesson: "Bài 1",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 2,
        lesson: "Bài 2",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 3,
        lesson: "Bài 3",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 4,
        lesson: "Bài 4",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 5,
        lesson: "Bài 5",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
    ],
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
    roadmap: [
      {
        id: 1,
        lesson: "Bài 1",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 2,
        lesson: "Bài 2",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 3,
        lesson: "Bài 3",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 4,
        lesson: "Bài 4",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
      {
        id: 5,
        lesson: "Bài 5",
        video:
          "https://www.youtube.com/watch?v=wTrArDmgaHo&ab_channel=TrungT%C3%A2mNgo%E1%BA%A1iNg%E1%BB%AFAMANDAH%E1%BA%A3iPh%C3%B2ng",

        exam: "images/exam.png",
      },
    ],
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
    // {
    //     code: "combo",
    //     title: "Khóa Combo",
    //     content: "Khóa học theo Combo",
    // },
    // {
    //     code: "free",
    //     title: "Miễn phí",
    //     content: "Kho tài liệu miễn phí",
    // },
]
  const accountsDB = [
    {
      userId: "1694493483",
      userName: "Thái",
      email: "matienjp92@gmail.com",
      password: "123",
      birthday: "",
      gender: "",
      age: "",
      phone: "0901564111",
      japaneseLevel: "N1",
      address: "Hải Phòng",
      country: "Việt Nam",
      creditNumber: "1234567890123456",
      avatar: "https://grn-admin.mpoint.vn/uploads/avatar-mac-dinh.png",
      status: "active",
      myCourses: [
        {
          code: 3,
          name: "Khóa học N3",
          duration: "8 tháng",
          price_VND: 2650000,
          price_JPN: 16400,
          type: "N3",
          image:
            "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",
          roadmap: [
            {
              id: 1,
              status: "processing",
              name: "Bài 1",
              video:
                "https://www.youtube.com/embed/kDf5YYPRBqQ?si=mu2prbm_nsVeteWL",

              exam: "/images/exam.png",
            },
            {
              id: 2,
              status: "block",
              name: "Bài 2",
              video:
                "https://www.youtube.com/embed/_ojVS-KgDEg?si=V3QRWN1in1BX_l2A",

              exam: "/images/exam.png",
            },
            {
              id: 3,
              status: "block",
              name: "Bài 3",

              video:
                "https://www.youtube.com/embed/wTrArDmgaHo?si=pEDGv9H9pyHXm8NT",

              exam: "/images/exam.png",
            },
            {
              id: 4,
              name: "Bài 4",
              status: "block",
              video:
                "https://www.youtube.com/embed/QDM_AlghF6Q?si=z9ISyTbRiMVAfBvz",

              exam: "/images/exam.png",
            },
            {
              id: 5,
              name: "Bài 5",
              status: "block",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
            {
              id: 6,
              name: "Bài 6",
              status: "block",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
            {
              id: 7,
              name: "Bài 7",
              status: "block",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
            {
              id: 8,
              name: "Bài 8",
              status: "block",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
            {
              id: 9,
              name: "Bài 9",
              status: "block",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
          ],
        },
        {
          code: 1,
          name: "Khóa học N5",
          duration: "6 tháng",
          price_VND: 990000,
          price_JPN: 6200,
          type: "N5",
          image:
            "https://trungtamtiengnhat.org/images/2017/03/02/cach-hoc-tieng-nhat-hieu-qua.jpg",

          roadmap: [
            {
              id: 1,
              status: "complete",
              name: "Bài 1",
              video:
                "https://www.youtube.com/embed/kDf5YYPRBqQ?si=mu2prbm_nsVeteWL",

              exam: "/images/exam.png",
            },
            {
              id: 2,
              status: "complete",
              name: "Bài 2",
              video:
                "https://www.youtube.com/embed/_ojVS-KgDEg?si=V3QRWN1in1BX_l2A",

              exam: "/images/exam.png",
            },
            {
              id: 3,
              status: "complete",
              name: "Bài 3",

              video:
                "https://www.youtube.com/embed/wTrArDmgaHo?si=pEDGv9H9pyHXm8NT",

              exam: "/images/exam.png",
            },
            {
              id: 4,
              name: "Bài 4",
              status: "complete",
              video:
                "https://www.youtube.com/embed/QDM_AlghF6Q?si=z9ISyTbRiMVAfBvz",

              exam: "/images/exam.png",
            },
            {
              id: 5,
              name: "Bài 5",
              status: "complete",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
            {
              id: 6,
              name: "Bài 6",
              status: "processing",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
            {
              id: 7,
              name: "Bài 7",
              status: "block",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
            {
              id: 8,
              name: "Bài 8",
              status: "block",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
            {
              id: 9,
              name: "Bài 9",
              status: "block",
              video:
                "https://www.youtube.com/embed/iklmQR07sa4?si=j_4nvoeuSXXLXlJ7",

              exam: "/images/exam.png",
            },
          ],
        },
      ],
    },
    {
      userId: "1694493484",
      userName: "Dương",
      email: "matienjp93@gmail.com",
      password: "123",
      birthday: "",
      gender: "",
      age: "",
      phone: "",
      japaneseLevel: "",
      address: "",
      country: "",
      creditNumber: "",
      avatar: "",
      status: "active",
    },
    {
      userId: "1694493485",
      userName: "Viễn",
      email: "matienjp94@gmail.com",
      password: "123",
      birthday: "",
      gender: "",
      age: "",
      phone: "",
      japaneseLevel: "",
      address: "",
      country: "",
      creditNumber: "",
      avatar: "",
      status: "active",
    },
    {
      userId: "1694493486",
      userName: "Tuấn",
      email: "matienjp95@gmail.com",
      password: "123",
      birthday: "",
      gender: "",
      age: "",
      phone: "",
      japaneseLevel: "",
      address: "",
      country: "",
      creditNumber: "",
      avatar: "",
      status: "active",
    },
    {
      userId: "1694493487",
      userName: "Quyết",
      email: "matienjp95@gmail.com",
      password: "123",
      birthday: "",
      gender: "",
      age: "",
      phone: "",
      japaneseLevel: "",
      address: "",
      country: "",
      creditNumber: "",
      avatar: "",
      status: "active",
    },
  ];


// setLocalStorage("course",coursesDB)
// setLocalStorage("category",categoryDB)
// setLocalStorage("accounts",accountsDB)

