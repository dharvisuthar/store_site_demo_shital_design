import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../images/logo_sital_design.svg";
AOS.init();
const Footer = () => {
    return (
        <div>
            <div className="bg-darka text-white">
                <Container>
                    <Row className="pb-5">
                        <Col md={4} className="pt-5">
                            <h5 className="text-uppercase pt-5 font-weight-normal">Shital Design</h5>
                            <i className="fa fa-facebook-official fa-2x mr-3 li-footer mt-3 font-weight-normal" aria-hidden="true"></i>
                            <i className="fa fa-twitter-square fa-2x mr-3 li-footer mt-3 font-weight-normal" aria-hidden="true"></i>
                            <i className="fa fa-instagram fa-2x mr-3 li-footer mt-3 font-weight-normal" aria-hidden="true"></i>
                        </Col>
                        <Col md={4} className="pt-5">
                            <h5 className="text-uppercase pt-5 font-weight-normal">Info</h5>
                            <ul className="ul-li-remove">
                                <li className="li-footer"><a href="/contact" className="a-fff"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i> Join Us</a></li>
                                <li className="li-footer"><a href="/privacypolicy" className="a-fff"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i> Privacy & Policy</a></li>
                                <li className="li-footer"><a href="/termscondition" className="a-fff"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i> Term & Conditions</a></li>
                            </ul>
                        </Col>
                        <Col md={4} className="pt-5">
                            <h5 className="text-uppercase pt-5 font-weight-normal">Quick links</h5>
                            <ul className="ul-li-remove">
                                <li className="li-footer"><a href="/product" className="a-fff"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i> Products</a></li>
                                <li className="li-footer"><a href="/about" className="a-fff"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i> About Us</a></li>
                                <li className="li-footer"><a href="/contact" className="a-fff"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i> Contact Us</a></li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="bg-black text-white">
                <Container>
                    <p className="p-5 m-0">© 2021 Shital Design. All Rights Reserved.</p>
                </Container>
            </div>

        </div>
    );
}
export default Footer