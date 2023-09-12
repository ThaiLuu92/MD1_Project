
// Lấy thông tin người dùng từ localStorage
const getUserData = getLocalStorage("accounts");
const getuserLogin = getLocalStorage("userLogin");

if (getuserLogin && getUserData && getUserData.length > 0) {
  const currentUser = getUserData.find((user) => user.email === getuserLogin.email);
  if (currentUser) {
    if (currentUser.myCourses) {
    }
  }

}
