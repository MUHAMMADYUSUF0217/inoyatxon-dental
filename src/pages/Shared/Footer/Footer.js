import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const footerBg = {
        backgroundColor: "#2f353b"
    }
    const linkHeaderStyle = {
        color: "white"
    }
    return (
        <div style={footerBg}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                            <h2 style={linkHeaderStyle}>Xizmatlarimiz</h2>
                                <div className="text-secondary">
                                    <Link className="text-decoration-none text-secondary" to="/services"><h5>Barcha Xizmatlar</h5></Link>
                                    <h5>Bricket</h5>
                                    <h5>DENTISTRY</h5>
                                    <h5>VENEERS</h5>
                                </div>
                            </div>
                            <div className="col">
                                <h2  style={linkHeaderStyle}>Sahifalar</h2>
                                <div>
                                    <Link className="text-decoration-none text-secondary" to="/home"><h5>Uy</h5></Link>
                                    <Link className="text-decoration-none text-secondary" to="/about"><h5>Biz Haqimizda</h5></Link>
                                    <Link className="text-decoration-none text-secondary" to="/services"><h5>Xizmatlarimiz</h5></Link>
                                    <Link className="text-decoration-none text-secondary" to="/contact"><h5>Bog'lanish</h5></Link>
                                    <Link className="text-decoration-none text-secondary" to="/*"><h5>404! page</h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                            <h2 style={linkHeaderStyle}>Tezkor Linklar</h2>
                                <div>
                                    <a className="text-decoration-none text-secondary" href="https://www.facebook.com/"><h5><i className="fab fa-facebook"></i> Facebook</h5></a>
                                    <a className="text-decoration-none text-secondary" href="https://www.instragram.com/"><h5><i className="fab fa-instagram"></i> Instragram</h5></a>
                                    <a className="text-decoration-none text-secondary" href="https://www.twitter.com/"><h5><i className="fab fa-twitter"></i> Twitter</h5></a>
                                    <a className="text-decoration-none text-secondary" href="https://www.youtube.com/"><h5><i className="fab fa-youtube"></i> YouTube</h5></a>
                                </div>
                            </div>
                            <div className="col">
                                <h2  style={linkHeaderStyle}>Xususiyatlar</h2>
                                <div className="text-secondary">
                                    <h5>FAQ</h5>
                                    <h5>Yangiliklar</h5>
                                    <h5>Bloglar</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="text-white" />
                <div className="text-center">
                    <small className="text-secondary">© 2021 Inoyatxon Dental Private Limited. Barcha huquqlar himoyalangan</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;