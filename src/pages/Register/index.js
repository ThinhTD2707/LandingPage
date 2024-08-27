import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import classNames from 'classnames/bind';
import styles from './register.module.scss';
import { FALSE } from 'sass';
const cx = classNames.bind(styles);

function Register() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isAccepted, setIsAccepted] = React.useState(false);
    const [errors, setErrors] = useState({});
    const [registerForm, setRegisterForm] = React.useState({
        fullname: '',
        dob: '',
        phone: '',
        email: '',
        username: '',
        password: '',
        place: '',
        school: '',
        major: '',
        studentId: '',
        topic: '',
    });

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleAccept = () => {
        console.log('accpect term and conditional');
        setIsAccepted(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterForm({ ...registerForm, [name]: value });
        console.log(registerForm);
    };

    const validate = () => {
        const newErrors = {};

        // Validate name
        if (!registerForm.fullname) {
            newErrors.fullname = 'Tên không được để trống';
        }

        if (!registerForm.username) {
            newErrors.username = 'Username không được để trống';
          } else if (registerForm.username.length <= 6) {
            newErrors.username = 'Username phải chứa nhiều hơn 6 ký tự';
          } else if (/\s/.test(registerForm.username)) {
            newErrors.username = 'Username không được chứa khoảng cách';
          }

        // Validate email
        if (!registerForm.email) {
            newErrors.email = 'Email không được để trống';
        } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
            newErrors.email = 'Email phải có @';
        }

        // Validate password
        if (!registerForm.password) {
            newErrors.password = 'Password is required';
        } else if (registerForm.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        } else if (!/[A-Z]/.test(registerForm.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(registerForm.password)) {
            newErrors.password = 'Password must contain at least one number';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(registerForm.password)) {
            newErrors.password = 'Password must contain at least one special character';
        }

        return newErrors;
    };

    const handleSignup = (e) => {
        console.log('handleSignup');
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, do something (e.g., submit data)
            console.log('Form submitted:');
        } else {
            // Form is invalid, show errors
            setErrors(validationErrors);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <img />
            <h1 className={cx('register_title')}>Into The Future | ONLYONE</h1>
            <h2>Đăng kí tham gia</h2>
            <form onSubmit={handleSignup} className={cx('form-container')}>
                <div className={cx('input-group')}>
                    <label>Họ và tên (*)</label>
                    <input
                        className={cx('input_form')}
                        placeholder="Nhập Họ Và Tên"
                        name="fullname"
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('flex_pc')}>
                    <div className={cx('input-group')}>
                        <label>Năm Sinh (*)</label>
                        <input
                            className={cx('input_form')}
                            type="date"
                            placeholder="01/01/2001"
                            value={registerForm.dob}
                            min="1997-01-01"
                            max="2030-12-31"
                            name="dob"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={cx('input-group')}>
                        <label>Số Điện Thoại (*)</label>
                        <input
                            className={cx('input_form')}
                            placeholder="Nhập SĐT"
                            name="phone"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={cx('input-group')}>
                    <label>Email (*)</label>
                    <input className={cx('input_form')} placeholder="Nhập Mail" name="email" onChange={handleChange} />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                </div>
                <div className={cx('input-group')}>
                    <label>Tên Đăng Nhập (*)</label>
                    <input
                        className={cx('input_form')}
                        placeholder="Nhập Tên Đăng Nhập"
                        name="username"
                        onChange={handleChange}
                    />
                    {errors.username && <small style={{ color: 'red' }}>{errors.username}</small>}
                </div>
                <div className={cx('input-group')}>
                    <label>Password (*)</label>
                    <input
                        className={cx('input_form')}
                        placeholder="Nhập mật khẩu"
                        name="password"
                        onChange={handleChange}
                        type='password'
                    />
                    {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
                </div>
                <div className={cx('input-group')}>
                    <label>Nơi công tác học tập (*)</label>
                    <input
                        className={cx('input_form')}
                        placeholder="Nhập nơi công tác học tập"
                        name="place"
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('input-group')}>
                    <label>Tên trường đại học (*)</label>
                    <input
                        className={cx('input_form')}
                        placeholder="Nhập tên trường "
                        name="school"
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('flex_pc')}>
                    <div className={cx('input-group')}>
                        <label>Chuyên ngành (*)</label>
                        <input
                            className={cx('input_form')}
                            placeholder="Nhập chuyên ngành"
                            name="major"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={cx('input-group')}>
                        <label>Mã số sinh viên (*)</label>
                        <input
                            className={cx('input_form')}
                            placeholder="Nhập Mã số sinh viên"
                            name="studentId"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={cx('input-group')}>
                    <label>Chọn chủ đề (*)</label>
                    <div className={cx('input_form')}>
                        <select name="topic" onChange={handleChange}>
                            <option value="op1">Data Analysis và Machine Learning sử dụng Python Library</option>
                            <option value="op2">Back-end development dựa trên Java Spring Boot</option>
                            <option value="op3">Front-end development dựa trên React.JS, JavaScript</option>
                            <option value="op4">Data Structure và Algorithm dựa trên Python</option>
                            <option value="op5">SQL và DB dựa trên MySQL</option>
                        </select>
                    </div>
                </div>
                <div className={cx('check-form')}>
                    {/* <input className={cx('check-box')} type="checkbox" /> */}
                    <div>
                        Tôi đã đọc và hiểu rõ các nội dung được trình bày ở Văn Bản{' '}
                        <a onClick={() => setIsModalOpen(!isModalOpen)}>Đồng Ý Xử Lý Dữ Liệu Cá Nhân</a> và Thể lệ Cuộc
                        Thi Lập Trình Code Your Future. Tôi hoàn toàn đồng ý với các nội dung và điều kiện nêu tại các
                        tài liệu. Đồng thời, tôi cũng đồng ý việc BTC thu thập, sử dụng và tiết lộ Dữ Liệu Cá Nhân của
                        tôi cho các mục đích được nêu.
                    </div>
                </div>
                <button className={cx('button-primary')} type="submit" disabled={!isAccepted}>
                    ĐĂNG KÝ
                </button>
            </form>
            <div className={cx('modal_container')}>
                {isModalOpen && <Modal onClose={handleModalClose} onAccept={handleAccept} />}
            </div>
        </div>
    );
}

export default Register;
