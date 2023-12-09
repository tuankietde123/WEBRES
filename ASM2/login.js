// login.js
function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function loginUser() {
    // Xử lý đăng nhập tại đây
    // ...
    return false; // Ngăn chặn việc submit form (để tránh chuyển trang mặc định của form)
}

function signupUser() {
    // Xử lý đăng ký tại đây
    // ...
    return false; // Ngăn chặn việc submit form (để tránh chuyển trang mặc định của form)
}
