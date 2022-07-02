import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import doctors from '../../images/doctors.jpg';

const Appointment = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data);
        history.push("/conformation")
    };
    const hrWidth = {
        width: "6.5em",
        heigth: "7px"
    };
    return (
        <div className="container py-5">
            <div className="text-start">
                <h4 className="mt-5 fs-3 text-secondary">Tishlaringizni To'g'ri Davolating</h4>
                <hr style={hrWidth} className="text-info" />
                <h1 className="header_color fs-1 fw-bolder">O'z Doktoringizni <span className="span_color">Band Qiling</span></h1>
                <p className="fs-6">Ba'zi rivojlanayotgan tendentsiyalar - mustaqil sog'liqni saqlash markazlari uchun sog'liqni saqlashni birlashtirish, 
                ular kutilmagan to'lovlarni qisqartiradi.</p>
            </div>
            <div className="row text-start gx-0 gx-lg-4 gy-4">
                <div className="col-md-6 pe-3">
                    <img src={doctors} className="img-fluid" alt="" />
                    <div className="mt-3">
                        <div className="row">
                            <div className=" col-2 d-flex align-items-center">
                                <h1 className="fs=1 mb-0"><i className="fas fa-phone-square-alt text-info"></i></h1>
                            </div>
                            <div className="col-10">
                                <h4 className="fw-bold">Xohlagan payt qo'ng'iroq qiling</h4>
                                <p className="mb-1">+998 99 0028395 +998 94 3042064</p>
                            </div>
                        </div>
                        <hr className="text-info" />
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className=" col-2 d-flex align-items-center">
                                <h1 className="fs=1 mb-0"><i className="fas fa-map-marker-alt text-info"></i></h1>
                            </div>
                            <div className="col-10">
                                <h4 className="fw-bold"></h4>
                                <p className="mb-1">Istiqlol ko'chasi 2 uy</p>
                                <p className="mb-1">Andijon viloyati, Shahrixon tumani</p>
                            </div>
                        </div>
                        <hr className="text-info" />
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className=" col-2 d-flex align-items-center">
                                <h1 className="fs=1 mb-0"><i className="fas fa-tooth text-info"></i></h1>
                            </div>
                            <div className="col-10">
                                <h4 className="fw-bold">Muolajaga borish</h4>
                                <p className="mb-1">Inoyatxon Dentaldan muolaja kunini band qilish uchun buni bosing.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <Form onSubmit={handleSubmit(onSubmit)} className="px-lg-5">
                        <Form.Group className="mb-3">
                            <Form.Label>Ismingiz <span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={user.displayName} type="text" placeholder="Enter name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={user.email} type="email" placeholder="Enter email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefon <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="number" placeholder="Phone number" {...register("phone", { required: true })} />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select {...register("doctor", { required: true })}>
                                <option>Abdusamat Urmonov</option>
                                <option>MuhammadIslom Urmonov</option>
                                <option>Lola Qosimova</option>
                                <option>Fazilat Safarova</option>
                                <option>Dilnavoz Rahimova</option>
    
                            </Form.Select>
                            {errors.doctor && <span className="text-danger">iltimos birini tanlang</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Muolaja Kuni <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="date" placeholder="Date" {...register("date", { required: true })}/>
                            {errors.date && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select {...register("time", { required: true })}>
                                <option>9 AM - 11 AM</option>
                                <option>2.30 PM - 4 PM</option>
                                <option>7 PM - 9 PM</option>
                            </Form.Select>
                            {errors.time && <span className="text-danger">Please select one</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Qo'shimcha Ma'lumotlar</Form.Label>
                                <Form.Control as="textarea" rows={3} {...register("message")}/>
                            </Form.Group>
                        <Button variant="info" type="submit">
                            Bosing
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;