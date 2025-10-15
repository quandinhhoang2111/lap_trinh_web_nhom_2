import React from 'react';
import './../style/PolicyPage.css';

const PolicyPage = () => {
    return (
        <div className="policy-container">
            <div className="policy-header">
                <h1>Chính Sách và Điều Khoản</h1>
                <p>Cập nhật lần cuối: 23/09/2025</p>
            </div>

            <div className="policy-content">
                <div className="policy-section">
                    <h2>1. Chính sách bảo hành</h2>
                    <p><strong>TechLaptop</strong> cam kết mang đến cho khách hàng những sản phẩm chất lượng nhất cùng chế độ bảo hành uy tín. Tất cả các sản phẩm laptop đều được bảo hành chính hãng theo tiêu chuẩn của nhà sản xuất.</p>
                    <ul>
                        <li><strong>Thời gian bảo hành:</strong> Từ 12 đến 36 tháng tùy theo sản phẩm và nhà sản xuất.</li>
                        <li><strong>Điều kiện bảo hành:</strong> Sản phẩm còn trong thời gian bảo hành, tem bảo hành còn nguyên vẹn, và lỗi phát sinh từ nhà sản xuất.</li>
                        <li><strong>Các trường hợp không được bảo hành:</strong> Hư hỏng do người dùng (rơi, vỡ, vào nước), sản phẩm đã bị tháo dỡ hoặc sửa chữa bởi bên thứ ba không được ủy quyền.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>2. Chính sách thanh toán</h2>
                    <p>Chúng tôi hỗ trợ nhiều phương thức thanh toán đa dạng và an toàn:</p>
                    <ul>
                        <li>Thanh toán khi nhận hàng (COD).</li>
                        <li>Thanh toán qua thẻ ATM, Visa, MasterCard.</li>
                        <li>Thanh toán qua ví điện tử (Momo, ZaloPay, VNPay).</li>
                        <li>Trả góp 0% qua thẻ tín dụng hoặc các công ty tài chính.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>3. Chính sách giao hàng</h2>
                    <p><strong>TechLaptop</strong> cung cấp dịch vụ giao hàng nhanh chóng và tin cậy trên toàn quốc:</p>
                    <ul>
                        <li><strong>Nội thành TP.HCM:</strong> Giao hàng hỏa tốc trong vòng 2 giờ.</li>
                        <li><strong>Các tỉnh thành khác:</strong> Giao hàng từ 2-5 ngày làm việc.</li>
                        <li>Miễn phí vận chuyển cho đơn hàng từ 5.000.000 VNĐ.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>4. Chính sách bảo mật thông tin</h2>
                    <p>Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng. Mọi thông tin bạn cung cấp sẽ được mã hóa và sử dụng cho các mục đích sau:</p>
                    <ul>
                        <li>Xử lý đơn hàng và cung cấp dịch vụ.</li>
                        <li>Gửi thông báo về các chương trình khuyến mãi, sản phẩm mới.</li>
                        <li>Nâng cao chất lượng dịch vụ và hỗ trợ khách hàng.</li>
                    </ul>
                    <p>Chúng tôi cam kết không chia sẻ thông tin của bạn cho bất kỳ bên thứ ba nào khác mà không có sự đồng ý của bạn.</p>
                </div>
            </div>
        </div>
    );
};

export default PolicyPage;