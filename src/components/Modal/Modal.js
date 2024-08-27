import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);
// eslint-disable-next-line
function Modal({ onClose, onAccept }) {
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleScroll = (e) => {
        const element = e.target;
        if (element.scrollHeight - Math.ceil(element.scrollTop) <= element.clientHeight + 7) {
            setIsScrolledToBottom(true);
        }
    };

    const handleAccept = () => {
            onClose();
            onAccept();
    };

    return (
        <div className={cx('modal')}>
            <div className={cx('modal-content')}>
                <h2>VĂN BẢN ĐỒNG Ý XỬ LÝ DỮ LIỆU CÁ NHÂN</h2>
                <div id="terms-text" className={cx('terms-text')} onScroll={handleScroll}>
                    <div className={cx('modal_intro')}>
                        CJ OLIVENETWORKS VINA (sau đây gọi là “Ban Tổ Chức” hoặc “BTC”), bằng Thông Báo Xử Lý Dữ Liệu Cá
                        Nhân (“Thông Báo”) này xin thông báo đến các thi sinh tham gia Cuộc Thi Lập Trình Code Your
                        Future một số vấn đề, căn cứ theo quy định bảo vệ dữ liệu cá nhân của Việt Nam, có liên quan tới
                        dữ liệu cá nhân của thí sinh sẽ được BTC, nếu xét thấy cần thiết, trực tiếp hoặc gián tiếp thu
                        thập, sử dụng, xử lý và/hoặc tiết lộ trong phạm vi hoạt động theo quy định của pháp luật hoặc
                        trong phạm vi BTC thấy cần thiết để tiến hành các hoạt động liên quan đến việc tổ chức Cuộc Thi
                        của BTC.
                    </div>
                    <b>I. Thuật ngữ và Định nghĩa</b>
                    <p>1.1. “Cuộc Thi” là Cuộc Thi Lập Trình Code Your Future.</p>
                    <p>1.2. “Dữ Liệu Cá Nhân” là thông tin được BTC thu thập từ Thí Sinh tại Điều 2.1 dưới đây.</p>
                    <p>
                        1.3. “Xử Lý Dữ Liệu Cá Nhân” là một hoặc nhiều hoạt động tác động tới dữ liệu cá nhân, như: thu
                        thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu
                        hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá
                        nhân hoặc các hành động khác có liên quan.{' '}
                    </p>
                    <p>
                        1.4. “Thí Sinh” là cá nhân tham gia Cuộc Thi và có các Dữ Liệu Cá Nhân mà BTC thu thập và xử lý.
                    </p>
                    <p>1.5. “Bên Kiểm Soát Dữ Liệu Cá Nhân” hoặc “Bên Kiểm Soát và Xử Lý Dữ Liệu Cá Nhân” là BTC.</p>
                    <p>
                        1.6. “Bên Thứ Ba” là những tổ chức, cá nhân không phải là Bên Kiểm Soát Dữ Liệu Cá Nhân, Bên
                        Kiểm Soát và Xử Lý Dữ Liệu Cá Nhân được phép xử lý Dữ Liệu Cá Nhân dựa trên cơ sở hợp đồng hoặc
                        pháp lý với BTC.
                    </p>
                    <b>II.Xử Lý Dữ Liệu Cá Nhân</b>
                    <p>
                        2.1.Các dữ liệu cá nhân BTC thu thập và xử lý BTC sẽ thu thập và xử lý những thông tin dưới đây
                    </p>
                    <ul>
                        <li>Họ, chữ đệm và tên khai sinh;</li>
                        <li>Quốc tịch;</li>
                        <li>Tên gọi khác (nếu có);</li>
                        <li>Hình ảnh của cá nhân;</li>
                        <li>Ngày, tháng, năm sinh;</li>
                        <li>Số điện thoại;</li>
                        <li>Số căn cước công dân/ Số hộ chiếu (bao gồm ngày cấp, nơi cấp);</li>
                        <li>Giới tính;</li>
                        <li>Quê quán;</li>
                        <li>Nơi sinh;</li>
                        <li>Nơi thường trú;</li>
                        <li>Nơi ở hiện tại;</li>
                        <li>Địa chỉ liên hệ;</li>
                        <li>Số mã số thuế cá nhân;</li>
                        <li>
                            Đặc điểm sinh học riêng của cá nhân (bao gồm dấu vân tay ghi. nhận tại căn cước công dân của
                            thí sinh);
                        </li>
                        <li>Tên trường đại học, lớp, chuyên ngành đang theo học;</li>
                        <li>Hình ảnh và hoặc chân dung;</li>
                        <li>Giọng nói.</li>
                    </ul>
                </div>
                <div className={cx('actions')}>
                    {/* <input
            type="checkbox"
            id="accept-checkbox"
            disabled={!isScrolledToBottom}
            onChange={handleCheckboxChange}
          /> */}
                    {/* <label htmlFor="accept-checkbox">Tôi đã đọc và đồng ý với điều khoản sử dụng</label> */}
                    <button
                        id="close-button"
                        className={cx('button-primary')}
                        // disabled={!isChecked}
                        disabled={!isScrolledToBottom}
                        onClick={handleAccept}
                    >
                        ĐỒNG Ý
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
