
// Dữ liệu truyền lên local
function setLocalStorage(key,value) {
    localStorage.setItem(key,JSON.stringify(value) )
}

// Dữ liệu lấy trên local
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

// Điều hướng
function navigationParam(url, param) {
location.href = `${url}/${param}`
    
}