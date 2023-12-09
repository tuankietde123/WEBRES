document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy giá trị từ các trường input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kết nối đến cơ sở dữ liệu
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'your_username',
        password: 'your_password',
        database: 'webdata'
    });

    // Thực hiện truy vấn thêm dữ liệu vào cơ sở dữ liệu
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    connection.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error adding user to database:', err);
        } else {
            console.log('User added to database');
            // Điều hướng người dùng sau khi xử lý thành công
            window.location.href = 'path_to_another_page.html';
        }
    });

    connection.end(); // Đóng kết nối sau khi hoàn tất công việc
});

