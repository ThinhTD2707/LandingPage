import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import brand_date from '../../assets/image/brand-date 16.52.26.svg';
import logo_pc from '../../assets/image/logo-pc.svg';
// import cjons from '../../assets/image';
// import hca from '../../assets/image/hca.png';
// import techvalley from '../../assets/image/techvalley.png';
// import cj from '../../assets/image/cj.png';
// import kicc from '../../assets/image/kicc.png';
// import codepress from '../../assets/image/codepress.png';

const cx = classNames.bind(styles);
function Home() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: '1.   Ai có thể tham gia cuộc thi "Code Your Future 2024"?',
            answer: ['Sinh viên năm cuối và sắp tốt nghiệp ngành Công Nghệ Thông Tin trên địa bàn TP. HCM.'],
        },
        {
            id: 2,
            question: '2.  Làm thế nào để đăng ký tham gia cuộc thi?',
            answer: [
                'Bạn có thể đăng ký tham gia cuộc thi bằng cách truy cập vào nút "Đăng Ký" trên website của chúng tôi và điền đầy đủ thông tin cá nhân cũng như các thông tin yêu cầu khác trước thời hạn đăng ký.',
            ],
        },

        {
            id: 3,
            question: '3.  Thể lệ của cuộc thi năm nay có gì thay đổi so với năm ngoái?',
            answer: [
                'Năm nay, cuộc thi sẽ diễn ra dưới hình thức hackathon, thí sinh sẽ tham gia thi cá nhân để giải quyết các đề bài trong một khoảng thời gian quy định.',
                'Vòng Sơ loại là 02 tiếng và vòng Chung kết là 06 tiếng.',
            ],
        },
        {
            id: 4,
            question: '4.  Cuộc thi diễn ra trong bao lâu và có những mốc thời gian quan trọng nào?',
            titleAnswer:
                'Cuộc thi sẽ diễn ra từ ngày 01 tháng 09 năm 2024 đến ngày 26 tháng 09 năm 2024, với các mốc thời gian quan trọng như: ',
            answer: [
                'Thời gian Đăng ký: Ngày 01/09 đến ngày 12/09/2024',
                'Đóng đăng ký: Ngày 12/09/2024',
                'Vòng Sơ khảo: Ngày 14/09/2024',
                'Công bố kết quả vòng Sơ khảo: Ngày 24/09/2024',
                'Vòng Chung kết: Ngày 26/09/2024',
            ],
        },
        {
            id: 5,
            question: '5.  Cuộc thi đóng đơn đăng ký khi nào?',
            answer: ['Cuộc thi đóng đăng ký vào ngày 12/09/2024.'],
        },
        {
            id: 6,
            question: '6.  Phần thưởng của cuộc thi là gì?',
            answer: [
                'Thí sinh thắng cuộc sẽ nhận được các giải thưởng hấp dẫn bao gồm tiền mặt, giấy khen, cùng cơ hội trở thành nhân viên chính thức tại CJ OliveNetworks Vina.',
                'Chúng tôi sẽ đồng hành cùng bạn trên con đường sự nghiệp thông qua chương trình thực tập chuyên sâu. Bạn sẽ được tham gia trực tiếp vào các dự án thực tế, làm việc với đội ngũ chuyên gia giàu kinh nghiệm và có lộ trình phát triển rõ ràng.',
            ],
        },
        {
            id: 7,
            question: '7.  Nếu có sự cố kỹ thuật trong quá trình thi, tôi nên làm gì?',
            answer: [
                'Trong trường hợp gặp phải sự cố kỹ thuật, bạn nên liên hệ ngay với ban tổ chức. qua email hoặc số điện thoại hỗ trợ được cung cấp để nhận được sự hỗ trợ kịp thời.',
                'Tuy nhiên, người tham gia phải tự đảm bảo về mạng internet thuận lợi cho việc tham gia bài dự thi trực tuyến ở vòng sơ khảo. ban tổ chức không chịu trách nhiệm trước bất kỳ lỗi kỹ thuật nào dẫn đến việc người tham gia không thể làm bài thi trong khung thời gian quy định.',
            ],
        },
        {
            id: 8,
            question: '8.  Có yêu cầu gì về ngôn ngữ lập trình được sử dụng trong cuộc thi không?',
            titleAnswer: 'Thí sinh sẽ lựa chọn 2 trong số 5 chủ đề của cuộc thi bao gồm:',
            answer: [
                'Data Analysis và Machine Learning sử dụng Python Library',
                'Back-end development dựa trên Java Spring Boot ',
                'Front-end development dựa trên React.JS, JavaScript ',
                'Data Structure và Algorithm dựa trên Python ',
                'SQL và DB dựa trên MySQL',
            ],
        },
        {
            id: 9,
            question: '9.  Tôi có thể thay đổi thông tin đăng ký sau khi đã nộp không?',
            answer: [
                'Bạn có thể thay đổi thông tin đăng ký trước thời hạn đóng đăng ký vào ngày 12/09/2024, bằng cách liên hệ với ban tổ chức.',
            ],
        },
    ];
    const handleQuestionClick = (id) => {
        setActiveQuestion(id === activeQuestion ? null : id);
    };
    return (
        <div className={cx('home_container')}>
            <img className={cx('header-logo')} src={logo_pc} />
            <img className={cx('header-logo')} src={brand_date} />
            <div className={cx('wrapper')}>
                <div className={cx('it-contest_intro')}>
                    Code Your Future là cuộc thi dành cho các sinh viên năm cuối của các trường đại học trên địa bàn
                    thành phố Hồ Chí Minh, khuyến khích các bạn thực hành chuyên môn it thông qua cuộc thi và từ đó nhằm
                    tìm ra những nhân tài hàng đầu cho CJ.
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>RECAP CUỘC THI CODE YOUR FUTURE 2023</div>
                        <div className={cx('it-contest-box-items_content')}>
                            <div className={cx('flex_class')}>
                            <div className={cx('recap_text')}>
                                Cuộc thi Code Your Future 2023 đã khép lại thành công rực rỡ với sự tham gia của 6 đội
                                thi với hơn 30 bạn sinh viên tài năng đến từ các trường đại học trên địa bàn TP. HCM đến
                                với vòng chung kết.
                            </div>
                            <img className={cx('recap_img')} src={require('../../assets/image/2023-1.jpg')} />
                        </div>
                    </div>
                    <div className={cx('it-contest-box-items_content_rever')}>
                        <div className={cx('recap_text')}>
                            Cuộc thi đã tạo ra một sân chơi bổ ích, nơi các bạn trẻ có cơ hội giao lưu, học hỏi và kết
                            nối với những chuyên gia hàng đầu trong ngành công nghệ thông tin. Những dự án xuất sắc
                            không chỉ chứng minh tài năng của các bạn sinh viên mà còn mang đến những giải pháp công
                            nghệ sáng tạo cho những vấn đề kinh doanh của CJ. 
                        </div>
                        <img className={cx('recap_img')} src={require('../../assets/image/2023-2.jpg')} />
                    </div>
                    <div className={cx('it-contest-box-items_content')}>
                        <div className={cx('flex_class')}>
                            <div className={cx('recap_text')}>
                                Thành công của Code Your Future 2023 đã khẳng định tầm quan trọng của việc khuyến khích
                                và hỗ trợ thế hệ trẻ phát triển đam mê lập trình.
                            </div>
                            <img className={cx('recap_img')} src={require('../../assets/image/2023-3.jpg')} />
                        </div>
                    </div>
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>LỊCH TRÌNH CUỘC THI</div>
                    <div className={cx('it-contest-box-items_content')}>
                        <div>
                            <b>Đăng ký tham gia</b>: 01/09/2024 - 12/09/2024
                        </div>
                        <div>
                            <b>Đóng cổng đăng ký</b>: 12/09/2024
                        </div>
                        <div>
                            <b>Vòng sơ khảo</b>: 14/09/2024
                        </div>
                        <div>
                            <b>Thông báo kết quả</b>: 24/09/2024
                        </div>
                        <div>
                            <b>Vòng thi chung kết</b>: 26/09/2024
                        </div>
                        <div className={cx('blue-text')}>
                            *Các quy định về thời hạn đăng ký, thời gian, địa điểm và những yêu cầu cụ thể khác sẽ được
                            nêu trong thông báo riêng và đăng tải chính thức trên fanpage và các kênh truyền thông của
                            cuộc thi.
                        </div>
                    </div>
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>CHỦ ĐỀ CUỘC THI</div>
                    <div className={cx('it-contest-box-items_content')}>
                        <div>
                            Sử dụng nền tảng lập trình Codepresso để đưa ra giải pháp nhằm giải quyết các vấn đề liên
                            quan đến các mô hình kinh doanh của CJ nhằm hỗ trợ nâng cao hoạt động tổ chức trong kinh
                            doanh và hướng tới triết lý hành động Onlyone: Số 1 Vượt trội Toàn cầu.
                        </div>
                    </div>
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>YÊU CẦU CHUNG CUỘC THI</div>
                    <div className={cx('it-contest-box-items_content')}>
                        <div className={cx('container_content')}>
                            <div>
                                <b>Đối tượng tham gia</b>
                                <ul>
                                    <li>Sinh viên năm cuối và sắp tốt nghiệp ngành Công Nghệ Thông Tin.</li>
                                </ul>
                            </div>
                            <div>
                                <b>Hình thức tham dự:</b>
                                <ul>
                                    <li>Thí sinh đăng ký thi cá nhân.</li>
                                    <li>Mỗi thí sinh chỉ được đăng ký tham gia một lần duy nhất.</li>
                                </ul>
                            </div>
                            <div>
                                <b>Yêu cầu</b>
                                <ul>
                                    <li>Ngôn ngữ dự thi: Tiếng Anh.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>NỘI DUNG BÀI THI</div>
                    <div className={cx('it-contest-box-items_content')}>
                        <div className={cx('container_content')}>
                            <div>
                                <b>Vòng Sơ Khảo</b>
                                <ul>
                                    <li>
                                        Thí sinh sẽ tham gia thi trực tuyến qua đường link URL được thông báo chính thức
                                        qua email với tên đăng nhập và mật khẩu.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <b>Nội dung bài thi</b>
                                <ul>
                                    <li>
                                        Giải quyết vấn đề bằng kỹ năng lập trình thực tế. Mỗi người tham gia được hai
                                        trong số năm chủ đề cho vòng sơ khảo. Mỗi chủ đề thi trong vòng 1 tiếng, tổng
                                        thời gian vòng sơ khảo là 2 tiếng.
                                    </li>
                                    <li>
                                        5 đề tài bao gồm:
                                        <ol>
                                            <li>Data Analysis và Machine Learning sử dụng Python Library</li>
                                            <li>Back-end development dựa trên Java Spring Boot</li>
                                            <li>Front-end development dựa trên React.JS, JavaScript</li>
                                            <li>Data Structure và Algorithm dựa trên Python</li>
                                            <li>SQL và DB dựa trên MySQL.</li>
                                        </ol>
                                    </li>
                                </ul>
                                <div className={cx('warning_text')}>
                                    Lưu ý quan trọng: Các thí sinh cần tự đảm bảo về máy tính cá nhân và đường truyển
                                    internet, tránh việc bị ngắt quãng trong thời gian làm bài thi.
                                </div>
                            </div>

                            <div>
                                <b>Công bố kết quả vòng sơ khảo</b>
                                <ul>
                                    <li>
                                        30 thí sinh có số điểm cao nhất sẽ được liên hệ trực tiếp bằng thư điện tử để
                                        thông báo tham dự Vòng Chung kết.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <b>Vòng Chung Kết</b>
                                <ul>
                                    <li>Thời gian thi Chung kết: 26.09.2024.</li>
                                    <li>
                                        Địa điểm: Tầng 10, Tòa nhà CJ, 2 Bis 4-6 Lê Thánh Tôn, Bến Nghé, Quận 1, TP.
                                        HCM.
                                    </li>
                                    <li>
                                        Hình thức thi: Làm bài thi trực tiếp tại địa điểm thi trong tối đa 6 tiếng. Mỗi
                                        thí sinh cần chuẩn bị máy tính cá nhân.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <b>Nội dung bài thi</b>
                                <ul>
                                    <li>
                                        Người tham gia có thể chọn lại hoặc giữ nguyên chủ đề thi trong vòng Chung kết,
                                        và được chọn 2 chủ đề. Các câu hỏi vòng chung kết được thiết kế để giải trong
                                        vòng 5-6 tiếng nhằm đánh giá khả năng hiểu các yêu cầu và kỹ năng lập trình
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('see_rule')}>
                                <a href="/thele"  className={cx('see_rule_button')}> Xem thể lệ</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>GIẢI THƯỞNG</div>
                    <div className={cx('it-contest-box-items_content')}>
                        <div className={cx('prize_wrapper')}>
                            <div className={cx('prize_icon')}>
                                <img src={require('../../assets/image/first-place.png')}/>
                            </div>
                            <div className={cx('prize_infor')}>
                                <b>GIẢI NHẤT</b>
                                <ul>
                                    <li>Số lượng: 3 giải</li>
                                    <li>Cơ hội làm việc chính thức tại CJ OliveNetworks Vina</li>
                                    <li>10.000.000 VND</li>
                                    <li>Cúp VINH DANH</li>
                                    <li>Giấy chứng nhận</li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('prize_wrapper')}>
                            <div className={cx('prize_icon')}>
                                <img src={require('../../assets/image/second-place.png')} />
                            </div>
                            <div className={cx('prize_infor')}>
                                <b>GIẢI THƯỞNG CHO CÁC THÍ SINH THAM GIA CHUNG KẾT</b>
                                <ul>
                                    <li>Số lượng: 30 giải</li>
                                    <li>Voucher CGV</li>
                                    <li>Giấy chứng nhận</li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('see_rule')}>
                            <div>
                                <img
                                    className={cx('prize_ticket')}
                                    src="https://s3-alpha-sig.figma.com/img/ead6/a946/d6ecacda3633e3c46d18ec0255b32aec?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E816DCTSTk057k8qyTnBfhZbvwhr3p83IX2YNK5lRt89vC6X9OtazdOdW5Ww1cVtW-SLNIJ1srSVk3p1~dpErmbNBQuG~hZp6DJANFf5EOUdAxiKfGtBN05TT0jDTMKfUeVlOXZdhPYSP-pLE6yquVbO83uGu7qwKETCJmrOjxsZGGDNk0~op6ERSvZaElPY0T-VPB4tir16g7sOuL~qMFeuWw7kQ-2MVoEKHuDGdfr246NM4b-DBna2ODh2Lyozbsy5UNxdEEUawbIz7SVJeAwepjs5Tufz6BtUg7f0fVtALV3bFJ9oyfPId2tTf8izKpmQxTGxpqFAjJWeMN95xQ__"
                                />
                            </div>
                            <div className={cx('see_rule')}>
                                <a href="/register"  className={cx('see_rule_button')}> ĐĂNG KÍ NGAY</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>ĐƠN VỊ TỔ CHỨC</div>
                    <div className={cx('it-contest-box-items_content')}>
                        <div className={cx('logo_container')}>
                            <div>
                                <img className={cx('logo')} src={require('../../assets/image/cjons.png')} />
                            </div>
                            <div>
                                <img className={cx('logo')} src={require('../../assets/image/hca.png')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>ĐƠN VỊ ĐỒNG HÀNH</div>
                    <div className={cx('it-contest-box-items_content')}>
                        <div className={cx('logo_container')}>
                            <div>
                                <img className={cx('logo')} src={require('../../assets/image/techvalley.png')} />
                            </div>
                            <div>
                                <img className={cx('logo')} src={require('../../assets/image/cj.png')} />
                            </div>
                            <div>
                                <img className={cx('logo')} src={require('../../assets/image/kicc.png')} />
                            </div>
                            <div>
                                <img className={cx('logo')} src={require('../../assets/image/codepress.png')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('codepresso_title')}>
                    <div className={cx('flex_class')}>
                        {/* <div className={cx('flex_class')}>
                            <div className={cx('circle')} />
                            <div className={cx('circle')} />
                            <div className={cx('circle')} />
                        </div> */}
                        <img className={cx('three_dot')} src={require('../../assets/image/3points.png')} />
                        <div className={cx('it-contest-box-items_title')}>NỀN TẢNG CODE.PRESSO</div>
                    </div>
                </div>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_content')}>
                        <div className={cx('container_content')}>
                            <div>
                                Codepresso cung cấp nền tảng SaaS cho cuộc thi Code Your Future 2024. Với kinh nghiệm
                                dày dặn và công nghệ tiên tiến, Codepresso cùng CJ OliveNetworks Vina xây dựng nên những
                                bài thi chất lượng cao, giúp đánh giá chính xác năng lực lập trình của các thí sinh.
                            </div>
                            <div>
                                Codepresso là một nền tảng Đánh Giá Kỹ Năng IT của Hàn Quốc. Cung cấp các giải pháp đánh
                                giá định lượng, quản lý dữ liệu và đào tạo thực hành cho các chuyên gia IT.
                            </div>
                            <ul>
                                <li>
                                    Tăng cường hoạt động nhân sự với các giải pháp tiên phong, đánh giá dựa trên cơ sở
                                    dữ liệu.
                                </li>
                                <li>
                                    Tối ưu hóa tuyển dụng và phát triển, giảm chi phí vận hành và đánh giá chính xác kỹ
                                    năng với các bài kiểm tra thực tế tương tác.
                                </li>
                                <li>
                                    Nâng cao quản lý nhân tài với những hiểu biết dựa trên phân tích và báo cáo toàn
                                    diện.
                                </li>
                                <li>
                                    Phát triển đội ngũ công nghệ của khách hàng thông qua đào tạo nhập vai và phản hồi
                                    tăng cường bởi AI.
                                </li>
                            </ul>
                            <div className={cx('see_rule')}>
                                <div className={cx('see_rule_button')}>HƯỚNG DẪN SỬ DỤNG</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>CÂU HỎI THƯỜNG GẶP</div>
                    <div className={cx('it-contest-box-items_content')}>
                        {questions.map((q) => (
                            <div key={q.id}>
                                <div className={cx('it-contest_question')} onClick={() => handleQuestionClick(q.id)}>
                                    {q.question}
                                </div>
                                {/* Nếu có list trong danh sách câu trả lời */}
                                {activeQuestion === q.id && q?.titleAnswer && (
                                    <div>
                                        <>Trả lời: </>
                                        {q.titleAnswer}
                                    </div>
                                )}
                                {activeQuestion === q.id && q?.titleAnswer ? (
                                    <ul style={q.id === 8 ? { listStyleType: 'decimal' } : {}}>
                                        {q?.answer?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    activeQuestion === q.id && (
                                        <div className={cx('it-contest_answer')}>
                                            {/* Nếu không có list trong danh sách câu trả lời */}
                                            {q.answer.map((item, index) => (
                                                <>
                                                    {index === 0 && <>Trả lời: </>}
                                                    {item}
                                                </>
                                            ))}
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
