// import Header from '~/layouts/components/Header';
// import Sidebar from '~/layouts/components/Sidebar';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
            {/* <Header /> */}
            {/* <div className={cx('container')}> */}
            {/* <Sidebar /> */}
            {/* <div className={cx('content')}>{children}</div> */}
            {/* </div> */}
            <footer>
                <div className={cx('logo_fotter')}>
                    <img src={require('../../assets/image/footer-logo.png')} />
                </div>
                <div className={cx('info_footer')}>
                    <div>
                        <div>Công ty TNHH CJ OliveNetworks Vina</div>
                        <div>Địa chỉ: CJ Building, 2 Bis-4-6 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. HCM</div>
                        <div>Tổng đài hỗ trợ: 0966.958.953 - 028.2253.3728</div>
                        <div>Thời gian làm việc từ 9h00 – 12:00 và 13:30 – 17:30 các ngày từ thứ 2 đến thứ 6</div>
                        <div>Email: info.cjolivenetworksvina@cj.net</div>
                    </div>
                    <div>
                        <div className={cx('info_footer_follow_title')}>Theo dõi chúng tôi</div>
                        <div className={cx('info_footer_socialMedia')}>
                            <a href="" >
                                <img src="https://cjvietnam.vn/cjkfesta/images/ic-facebook.svg" />
                            </a>
                            <a href="">
                                <img src={require('../../assets/image/web-icon.png')} />
                            </a>
                            <a href="">
                                <img src="https://cjvietnam.vn/cjkfesta/images/ic-youtube.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default DefaultLayout;
