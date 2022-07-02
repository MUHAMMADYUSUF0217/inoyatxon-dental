import React from 'react';
import Doctors from '../../Home/Doctors/Doctors/Doctors';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const About = () => {
    const hrWidth = {
        width: "6.5em",
        heigth: "7px"
    }
    return (
        <div className="mb-5">
            <div className="container">
            <h1 className="mt-5 text-secondary">Biz Haqimizda</h1>
            <p>Tega Kaydagi stomatologik parvarishlash oilaviy amaliyoti bemor munosabatlari umr bo'yi davom etadigan hamkorlik va ikki tomonlama muloqot salomatlik garovi deb hisoblaydi. Biz bemorlarga yo'naltirilgan tibbiy yordam ko'rsatishga intilamiz va bemorlarimiz va ularning oilalarini qaror qabul qilish va davolash jarayonida teng huquqli a'zolar sifatida parvarishlash guruhining bir qismi bo'lishga taklif qilamiz.
             Bizning birlamchi tibbiy yordam ko'rsatuvchi provayderlarimizning har biri har bir bemorni bir butun sifatida ko'rish uchun yillik imtihonlar va tashxis yoki davolash usullaridan tashqariga chiqadi. Biz sog'liqni saqlash ehtiyojlarini boshqarish bo'yicha keng qamrovli ko'rsatmalar berish uchun bemorlarning turmush tarzi va sog'lig'i namunalari bilan tanishish uchun ishlaymiz.</p>
            <div className="text-start">
                <h3 className="mt-5 text-secondary">Bizning Jamoamiz</h3>
                <hr style={hrWidth} className="text-info" />
                <h1 className="header_color fw-bolder">Shifokorlar <span className="span_color">Jamoasi</span></h1>
            </div>
            <Doctors></Doctors>
            </div>
        <Testimonials></Testimonials>
        </div>
    );
};

export default About;