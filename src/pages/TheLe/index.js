import brand_date from '../../assets/image/brand-date 16.52.26.svg';
import classNames from 'classnames/bind';
import styles from './Thele.module.scss';
const cx = classNames.bind(styles);

function TheLe() {

    return (
        <div className={cx('home_container')}>
            <img className={cx('header-logo')} src={require('../../assets/image/header-logo.png')} />
            <img className={cx('header-logo')} src={brand_date} />
            <div className={cx('wrapper')}>
                <div className={cx('it-contest-box-items')}>
                    <div className={cx('it-contest-box-items_title')}>THỂ LỆ</div>
                    <div className={cx('rule_wrapper')}>
                        <h3 className={cx('rule_title')}>CUỘC THI LẬP TRÌNH "CODE YOUR FUTURE</h3>
                        <div className={cx('rule_content')}>
                            <b>1. Chủ đề cuộc thi</b>
                            <div>
                                Sử dụng nền tảng của CodePresso để lập trình đưa ra giải pháp nhằm giải quyết các vấn đề
                                liên quan đến các mô hình kinh doanh của CJ nhằm hỗ trợ nâng cao hoạt động tổ chức trong
                                kinh doanh và hướng tới triết lý hành động ONLYONE: Số 1 – Vượt trội – Toàn cầu.
                            </div>
                        </div>
                        <div className={cx('rule_content')}>
                            <b>2. Ý nghĩa cuộc thi</b>
                            <div>
                                Code Your Future là cuộc thi dành cho các sinh viên năm cuối của các trường đại học trên
                                địa bàn thành phố Hồ Chí Minh, khuyến khích các em thực hành chuyên môn IT thông qua
                                cuộc thi và từ đó nhằm tìm ra những nhân tài hàng đầu cho CJ
                            </div>
                        </div>
                        <div className={cx('rule_content')}>
                            <b>3. Đơn vị tổ chức</b>
                            <div>- CJ OliveNetworks Vina</div>
                            <div>- Hội tin học thành phố Hồ Chí Minh (HCA)</div>
                        </div>
                        <div className={cx('rule_content')}>
                            <b>4. Đơn vị tham gia đồng hành</b>
                            <div>- Văn phòng Đại diện tập đoàn CJ tại Việt Nam</div>
                            <div>- Cơ quan Xúc tiến Công nghệ Thông tin - Truyền thông (NIPA)</div>
                            <div>- CodePresso</div>
                            <div>- Tech Valley</div>
                        </div>
                        <div className={cx('rule_content')}>
                            <b>5. Thời gian</b>
                            <div>Từ ngày 01.09.2024 đến ngày 26.09.2024.</div>
                        </div>
                        <div className={cx('rule_content')}>
                            <b>6. Đối tượng tham gia</b>
                            <div>Đối tượng: Sinh viên năm cuối hoặc sắp tốt nghiệp các trường đại học.</div>
                            <div>Ngôn ngữ dự thi: Tiếng Anh</div>
                            <div>Hình thức tham dự: Thí sinh đăng ký thi cá nhân và cần lưu ý</div>
                            <div>
                                - Thí sinh có nghĩa vụ kê khai đầy đủ và chính xác toàn bộ thông tin theo yêu cầu của
                                ban tổ chức (BTC) khi đăng ký. Trong trường hợp thí sinh khai báo không chính xác hoặc
                                phát hiện gian lận về thông tin đăng ký, BTC sẽ hủy kết quả dự thi của thi sinh và loại
                                ra khỏi cuộc thi.
                            </div>
                            <div>- Mỗi thí sinh chỉ được đăng ký tham gia một lần duy nhất.</div>
                        </div>
                        <div className={cx('rule_content')}>
                            <b>7. Cách thức tham dự</b>
                            <div className={cx('rule_subtitle')}>7.1. Vòng sơ khảo</div>
                            <div>Thời gian: ngày 14.09.2024</div>
                            <div className={cx('rule_subtitle')}>a. Hình thức</div>
                            <div>
                                Thí sinh sẽ tham gia thi trực tuyến qua website được thông báo chính thức qua email với
                                tên đăng nhập và mật khẩu.
                            </div>
                            <div className={cx('rule_subtitle')}>b. Nội dung bài thi</div>
                            <div>
                                - Giải quyết vấn đề bằng các kỹ năng lập trình thực tế. Mỗi người tham gia có thể chọn
                                hai trong số năm chủ đề cho vòng sơ khảo và mỗi chủ đề có tổng thời gian thi là một giờ,
                                tổng thời gian để làm bài thi sơ khảo là hai giờ.
                            </div>
                            <div>- 5 chủ đề bao gồm:</div>
                            <ul>
                                <li>Data Analysis và Machine Learning sử dụng Python Library</li>
                                <li>Back-end development dựa trên Java Spring Boot</li>
                                <li>Front-end development dựa trên React.JS, JavaScript</li>
                                <li>Data Structure và Algorithm dựa trên Python</li>
                                <li>SQL và DB dựa trên MySQL</li>
                            </ul>
                            <div className={cx('rule_subtitle')}>c. Lưu ý quan trọng</div>
                            <div>
                                Các thí sinh cần tự đảm bảo về máy tính cá nhân và đường truyển internet, tránh việc bị
                                ngắt quãng trong thời gian làm bài thi.
                            </div>
                            <div>d. Công bố kết quả vòng sơ khảo</div>
                            <div className={cx('rule_subtitle')}>- 5 chủ đề bao gồm:</div>
                            <div>
                                30 thí sinh có số điểm cao nhất sẽ được liên hệ trực tiếp bằng thư điện tử để thông báo
                                tham dự Vòng Chung kết.
                            </div>
                            <div className={cx('rule_subtitle')}>7.2. Vòng Chung kết</div>
                            <div>a. Thời gian thi Chung kết: 26.09.2024 từ 9 giờ 30 phút đến 19 giờ 30 phút.</div>
                            <div>
                                b. Địa điểm: Tầng 10, tòa nhà CJ, 2 Bis 4-6 Lê Thánh Tôn, Bến Nghé, Quận 1, TP. HCM.
                            </div>
                            <div>c. Hình thức thi: Làm bài thi trực tiếp tại địa điểm thi trong tối đa 6 tiếng</div>
                            <div>
                                Mỗi thí sinh cần chuẩn bị máy tính cá nhân, giấy tờ tùy thân như căn cước công dân và
                                thẻ sinh viên.
                            </div>
                            <div>
                                Tất cả các thi sinh cần có mặt tại địa điểm thi Chung kết trước thời gian thi tối thiểu
                                30 phút. Thí sinh vắng mặt, hoặc đến muộn xem như bỏ cuộc và sẽ không được tham gia thi.
                            </div>
                            <div>
                                Lễ trao giải và kết quả vòng Chung kết sẽ được tổ chức và công bố vào cùng ngày thi.
                            </div>
                            <div className={cx('rule_subtitle')}>d. Nội dung bài thi</div>
                            <div>
                                Người tham gia có thể chọn lại chủ đề để thi vòng Chung kết, không liên quan đến các chủ
                                đề đã chọn trong vòng sơ khảo và được chọn hai chủ đề. Các câu hỏi vòng Chung kết được
                                thiết kể để giải trong vòng 5-6 tiếng nhằm đánh giá khả năng hiểu các yêu cầu và kỹ năng
                                lập trình.
                            </div>
                            <div className={cx('rule_subtitle')}>8. Cơ cấu giải thưởng</div>
                            <div className={cx('rule_subtitle')}>8.1. Giải nhất</div>
                            <div>
                                - Cơ hội làm việc chính thức tại CJ OliveNetworks Vina (06 tháng thực tập và sau đó ký
                                hợp đồng chính thức).
                            </div>
                            <div>- 10.000.000 đồng.</div>
                            <div>- Cúp và giấy chứng nhận.</div>
                            <div className={cx('rule_subtitle')}>
                                8.2. Giải thưởng cho thí sinh tham gia vòng Chung kết
                            </div>
                            <div>- Giấy chứng nhận</div>
                            <div>- CGV voucher.</div>
                            <div className={cx('rule_subtitle')}>9. Quy định đối với thí sinh dự thi</div>
                            <div className={cx('rule_subtitle')}>9.1. Cam kết tham dự</div>
                            <div>
                                Thí sinh tham gia cuộc thi cần cam kết thực hiện đúng và đầy đủ theo hướng dẫn của BTC,
                                đồng thời sắp xếp lịch trình để tham dự theo yêu cầu dưới đây nếu đăng ký tham dự cuộc
                                thi và vượt qua vòng sơ khảo. Thí sinh xác nhận đồng ý cho phép xử lý dữ liệu cá nhân
                                theo quy định pháp luật hiện hành (sau đây gọi là “Văn Bản Đồng Ý Xử Lý Dữ Liệu Cá
                                Nhân”). <a>[HD1]</a>
                            </div>
                            <div className={cx('rule_subtitle')}>a. Đối với vòng sơ khảo</div>
                            <div>
                                Cố vấn chuyên môn: Các thí sinh bắt buộc phải tham gia các buổi hỗ trợ online do BTC sắp
                                xếp để được hướng dẫn về cách sử dụng platform và cài đặt phần mềm chống gian lận.
                            </div>
                            <div className={cx('rule_subtitle')}>b. Đối với vòng Chung kết</div>
                            <div>
                                Các thí sinh sẽ tập trung thi Chung kết vào ngày 26.09.2024. Các thí sinh được lựa chọn
                                vào vòng trong nếu không đủ điều kiện sắp xếp tham dự theo lịch trình thì cần phản hồi
                                ngay đến BTC trong vòng 24 giờ sau khi nhận kết quả cuộc thi để BTC chọn thí sinh có số
                                điểm cao tiếp theo thay thế.
                            </div>
                            <div className={cx('rule_subtitle')}>9.2. Tư cách thí sinh</div>
                            <div>
                                Thí sinh tham dự vòng Chung kết sẽ phải nộp các giấy xác nhận gồm: (i) Cam kết tham gia
                                với có sự xác nhận của trường Đại học đang theo học; (ii) Căn cước công dân bản photo
                                công chứng nhằm mục đích tổ chức Cuộc Thi; (iii) Văn Bản Đồng Ý Xử Lý Dữ Liệu Cá Nhân
                                (theo mẫu của BTC).
                            </div>
                            <div className={cx('rule_subtitle')}>9.3. Quy định về thí sinh dự thi</div>
                            <div>
                                Người tham gia cam kết tự làm bài thi ở cả hai vòng sơ khảo và Chung kết, không sao chép
                                câu trả lời từ nguồn trên mạng.
                            </div>
                            <div>
                                Người tham gia phải tự đảm bảo về mạng internet thuận lợi cho việc tham gia bài dự thi
                                trực tuyến ở vòng sơ khảo. BTC không chịu trách nhiệm trước bất kỳ lỗi kỹ thuật nào dẫn
                                đến việc người tham gia không thể làm bài thi trong khung thời gian quy định.
                            </div>
                            <div>
                                Người tham gia sẽ đồng ý để Đơn vị tổ chức và Đơn vị tham gia PR (quan hệ công chúng) ủy
                                quyền liên hệ để tham gia vào các sự kiện quan hệ công chúng vốn được liên kết với chiến
                                dịch để tạo tin tức báo chí về cuộc thi.
                            </div>
                            <div>
                                Tin tức này có thể bao gồm, nhưng không bị giới hạn ở những trích dẫn được cung cấp để
                                đưa vào các thông cáo báo chí, họp báo, cuộc phóng vấn, v.v..
                            </div>
                            <div>
                                Đơn vị tổ chức có quyền loại bỏ quyền tham dự của người tham gia mà theo ý kiến của Đơn
                                vị tổ chức là không tuân thủ các nội quy và quy định từ những cuộc thi này. Điều này có
                                thể bao gồm thông tin cá nhân có thông tin không hợp lệ hoặc không đúng.
                            </div>
                            <div className={cx('rule_subtitle')}>9.4. Quy định chung về giải thưởng</div>
                            <div>
                                Chấp nhận bất kỳ giải thưởng nào đồng nghĩa với sự đồng ý từ phía người đoạt giải cho
                                phép Đơn vị tổ chức và Đơn vị tham gia hoặc các nhân viên PR (quan hệ công chúng) ủy
                                quyền liên hệ, sử dụng tên, hình ảnh, giọng nói và/ hoặc chân dung người đoạt giải vào
                                các mục đích đăng báo, quảng cáo, khuyến mãi, tiếp thị mà không phải trả thêm tiền. Khi
                                người đoạt giải chấp nhận bất kỳ giải thưởng nào, Đơn vị tổ chức và Đơn vị tham gia hoặc
                                cá nhân viên PR (quan hệ công chúng) ủy quyền liên hệ sẽ không chịu bất kỳ trách nhiệm,
                                các khiếu nại, yêu cầu, nguyên nhân hành động, và/ hoặc các thiệt hại mà người đoạt giải
                                có thể có, dù được xác định hay chưa xác định vào thời điểm hiện tại, thuộc bất kỳ loại
                                hình nào, phát sinh ngoài hoặc liên quan đến: (i) cuộc thi, (ii) chấn thương cá nhân và/
                                hoặc thiệt hại tài sản, bị trộm cắp hoặc mất mát từ người đoạt giải do sử dụng giải
                                thưởng, và hoặc (iii) bất kỳ trách nhiệm thuế nào liên quan đến cuộc thi, giải thưởng
                                và/ hoặc việc sử dụng giải thưởng.
                            </div>
                            <div>
                                Người thắng giải cũng sẽ được thông báo riêng bằng email và/ hoặc điện thoại đã đăng ký
                                khi tham gia chương trình, và sẽ được yêu cầu xác nhận bằng emai trong thời gian không
                                quá 03 (ba) ngày sau khi thông báo được gửi. Đơn vị tổ chức có quyền quyết định với các
                                giải thưởng không có người nhận theo bất kỳ cách thức phù hợp nào. Mọi thắc mắc, khiếu
                                nại về kết quả đối với giải thưởng sẽ được tiếp nhận và xem xét giải quyết trong vòng 07
                                (bảy) ngày kể từ ngày công bố kết quả. Sau thời hạn này, Đơn vị tổ chức có quyền không
                                tiếp nhận những thắc mắc và khiếu nại về kết quả.
                            </div>
                            <div>
                                Các giải thưởng sẽ được gửi trực tiếp cho người thắng giải theo thông tin đã đăng ký và
                                xác nhận với Đơn vị tổ chức trong vòng 45 (bốn mươi lăm) ngày kể từ ngày BTC gửi thư
                                điện tử thông báo chuyển giải đến người nhận. Đơn vị tổ chức sẽ không chịu bất kỳ trách
                                nhiệm nào nếu người thắng giải đăng ký hoặc xác nhận sai thông tin.
                            </div>
                            <div className={cx('rule_subtitle')}>9.5. Nghĩa vụ</div>
                            <div>
                                Đơn vị tổ chức sẽ không chịu trách nhiệm về bất kỳ mất mát, hư tổn, thiệt hại hay sự
                                thất vọng của thí sinh tham gia cuộc thi hay từ việc chấp nhận giải thưởng. Đơn vị tổ
                                chức cũng không chịu trách nhiệm về việc bảo quản, hoàn trả, hay việc không giao hồ sơ
                                dự thi hay hồ sơ dự thi bị thất lạc, trễ hạn, hay bị gửi nhầm, những vấn đề về trục trặc
                                kỹ thuật của mạng điện thoại, mạng toàn cầu, hệ thống mạng, nhà cung cấp, máy chủ, thiết
                                bị máy tính, phần mềm tin học; sự cố nghẽn mạng toàn cầu hay mạng điện thoại, bao gồm cả
                                những hư tổn và thiệt hại của máy vi tính hay điện thoại mà thí sinh hay người khác dùng
                                để tải bất kỳ tài liệu của cuộc thi.
                            </div>
                            <div>
                                Khi đã tham gia cuộc thi, thí sinh đã đồng ý rằng sẽ không buộc Đơn vị tổ chức phải chịu
                                trách nhiệm về bất kỳ tổn thất và thiệt hại nào (bao gồm những thiệt hại đặc biệt, gián
                                tiếp và có liên đới) cũng như các đối tác, bộ phận điều hành, nhân viên khỏi những trách
                                nhiệm về sự mất mát, thiệt hại, quyền lợi, bao gồm và không giới hạn, thương tổn cá
                                nhân, tử vong và thiệt hại tài sản.
                            </div>
                            <div className={cx('rule_subtitle')}>9.6. Sử dụng thông tin cá nhân</div>
                            <div>
                                Khi đã tham gia cuộc thi, thí sinh đồng ý với việc sử dụng tên và/ hoặc những thông tin
                                được đăng ký trên mẫu đăng ký dự thi, mà không có thù lao, cho mục đích quảng cáo và
                                tiếp thị của Đơn vị tổ chức và Đơn vị tham gia bằng việc ký xác nhận đồng ý tại Thông
                                Báo Xử Lý Dữ Liệu Cá Nhân đính kèm . <a>[HD2]</a> 
                            </div>
                            <div>
                                Đối với bất kỳ thông tin cá nhân do thí sinh cung cấp cho Đơn vị tổ chức hoặc Đơn vị tổ
                                chức có được từ các thí sinh từ đơn đăng ký này, mỗi cá nhân tham gia vào cuộc thi này
                                thừa nhận rằng: Thí sinh được phép tiết lộ những thông tin cá nhân như vậy; việc công bố
                                thông tin phù hợp với bất kỳ quy định bảo mật của bất cứ nước nào, trong phạm vi địa lý
                                của cuộc thi này, và đồng ý với việc sử dụng thông tin của Đơn vị tổ chức như dự tính
                                trong thể lệ này và Thông Báo Xử Lý Dữ Liệu Cá Nhân (bao gồm nhưng không giới hạn, việc
                                cung cấp thông tin cá nhân cho các cơ quan bên ngoài của Đơn vị tổ chức hay bên thứ ba).
                                Đơn vị tổ chức và các công ty thành viên tôn trọng quyền riêng tư các nhân của bất kỳ
                                các nhân nào truy cập website và hưởng ứng những quảng cáo và cuộc thi của chúng tôi.
                            </div>
                            <div className={cx('rule_subtitle')}>9.7. Điều khoản miễn trừ trách nhiệm</div>
                            <div>
                                Tất cả các tư liệu được đăng tải trên các trang web có thể được tải bởi bên thứ ba không
                                liên quan, Tuy nhiên, Đơn vị tổ chức luôn nỗ lực để bảo đảm rằng thông tin cá nhân được
                                bảo vệ tốt nhất theo quy định của pháp luật (bao gồm, nhưng không giới hạn các bước
                                phòng ngừa để ngăn chặn người dùng tải về). Tuy nhiên, trong các trường hợp bất khả
                                kháng hoặc ngoài tầm kiểm soát của Đơn vị tổ chức như các sự cố, tội phạm về an ninh
                                mạng (bao gồm nhưng không giới hạn, các hành vi tấn công mạng, khủng bố mạng, gián điệp
                                mạng trái phép, gây gián đoạn quá trình xử lý dữ liệu, hoặc rò rỉ thông tin cá nhân).
                                Trong trường hợp này, Đơn vị tổ chức sẽ hoặc yêu cầu các tổ chức, cá nhân liên quan sẽ
                                ngay lập tức thực hiện các hành vi cần thiết nhằm ngăn chặn, khắc phục, giảm thiểu các
                                thiệt hại không mong muốn có khả năng xảy ra với thông tin cá nhân. Nếu tình trạng trên
                                vẫn tiếp diễn, thí sinh cũng đồng ý rằng, Đơn vị tổ chức sẽ không chịu trách nhiệm về
                                bất kỳ thiệt hại nào được gây ra bởi bên thứ ba nào gây tác động bất lợi đến thông tin
                                cá nhân của thí sinh mà không phải do lỗi của Đơn vị tổ chức.
                            </div>
                            <div className={cx('rule_subtitle')}>9.8. Những quy định khác</div>
                            <div>
                                Nếu người tham gia vi phạm thể lệ hay các điều luật liên quan, giải thưởng sẽ bị tước bỏ
                                ngay lập tức. Quyết định lựa chọn người thắng giải của Đơn vị tổ chức là quyết định cuối
                                cùng và người tham gia sẽ không được phép khiếu nại hoặc tranh chấp sau khi quyết định
                                đã được đưa ra.
                            </div>
                            <div>
                                Người thắng giải có nghĩa vụ chịu thuế thu nhập cá nhân (nếu có) phát sinh từ giải
                                thưởng theo quy định và BTC có quyền được khấu trừ khoản thuế phải nộp và nộp thay cho
                                người thắng giải tùy theo quy định pháp luật.
                            </div>
                            <div>
                                Giải thưởng không được quy đổi thành tiền mặt, không được chuyển nhượng cho người khác.
                            </div>
                            <div>
                                Đơn vị tổ chức không chịu trách nhiệm về sự không vừa ý của người thắng giải về sản phầm
                                trao thưởng. Người thắng giải chịu trách nhiệm và giữ cho BTC miễn trừ trách nhiệm đối
                                với tất cả khiếu nại, tranh chấp của bên thứ ba liên quan đến bài dự thi của người thắng
                                giải, bao gồm nhưng không giới hạn quyền sở hữu trí tuệ, ý tưởng, và các vấn đề khác .
                                <a>[HD3]</a> <a>[HD4]</a> 
                            </div>
                            <div className={cx('rule_subtitle')}>10. Thông tin liên hệ</div>
                            <div>Hộp thư điện tử: info.cjolivenetworksvina@cj.net</div>
                            <div>Tổng đài hỗ trợ: 0966.958.953 - 028.2253.3728</div>
                            <div>
                                Thời gian làm việc từ 9h00 – 12:00 và 13:30 – 17:30 các ngày từ thứ 2 đến thứ 6 – trong
                                thời gian từ ngày 01.09.2024 đến hết ngày 26.09.2024.
                            </div>
                            <div>
                                <a>[HD1]</a>I suggest to add that: The contestant shall confirm the consent to process
                                personal data in accordance with applicable regulations (for the time being referred to
                                “Notice and Consent Form”)
                            </div>
                            <div>
                                <a>[HD2]</a>This addition has not been included in Linh’s revision, so we add it again
                            </div>
                            <div>
                                <a>[HD3]</a>Ms. Linh’s feedback: “This term is no need, because it’s coding contest. We
                                don’t collect their products or solutions”
                            </div>
                            <div>
                                <a>[HD4]</a>However, I suggest to add a waive clause regarding any claims of third
                                parties about IP of contestant’s products: “The winner is responsible for and holds the
                                Organizer harmless from all third-party claims and disputes related to the winner's
                                products, including but not limited to intellectual property rights, ideas, and other
                                matters”.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheLe;
