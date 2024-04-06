function sendMail() {
    // Lấy giá trị từ các trường nhập
    var firstName = document.getElementById("first_name").value;
    var emailAddress = document.getElementById("email_address").value;
    var phoneNumber = document.getElementById("phone_number").value;
    var contactMethod = document.getElementById("contact").value;
    var message = document.getElementById("message").value;

    // Kiểm tra xem các trường có được nhập đầy đủ không
    if (firstName && emailAddress && phoneNumber && contactMethod && message) {
        // Tạo một đối tượng chứa dữ liệu để gửi
        var formData = {
            firstName: firstName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            contactMethod: contactMethod,
            message: message
        };

        // Gửi dữ liệu thông qua XMLHttpRequest hoặc fetch API
        fetch('url_cua_may_chu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                // Xử lý phản hồi từ máy chủ (nếu cần)
                return response.json();
            } else {
                throw new Error('Có lỗi khi gửi yêu cầu.');
            }
        })
        .then(data => {
            // Xử lý phản hồi từ máy chủ (nếu cần)
            console.log(data);
            alert("Tin nhắn đã được gửi thành công!");
        })
        .catch(error => {
            console.error('Lỗi:', error);
            alert("Đã xảy ra lỗi khi gửi tin nhắn.");
        });
    } else {
        // Hiển thị thông báo lỗi nếu một hoặc nhiều trường chưa được điền
        alert("Vui lòng điền đầy đủ thông tin vào các trường.");
    }
}
