import React from 'react';
import { Image, Row, Col, Container, Tabs, Tab } from "react-bootstrap";

const Contact = () => {
    return (
          <div>
           <div>
                <div className="contact-main-carsoul" >
                    <div className="home-main-carsoul-overlay">
                    </div>
                    <Container data-aos="zoom-out-down">
                        <div className="home-slider-overlay-text" >
                            <h1 className="text-uppercase mb-5">
                                Contact us </h1>
                        </div>
                    </Container>
                </div>
            </div>
               <div>
                <Row className="m-0">
                    <Col md={6} className="bg-img-right p-0 pt-5">
                        <div className="text-center pt-5">
                            <h3>CONNECT WITH US</h3>
                            <p><input type="text" placeholder="Enter your Name" className="input-connect" /></p>
                            <p><input type="email" placeholder="Enter your email id" className="input-connect" /></p>
                            <p><input type="number" placeholder="Enter your Contect number" className="input-connect" /></p>
                            <button className="join-now-btn mt-3"> JOIN </button>
                        </div>
                    </Col>
                    <Col md={6} className=" p-0">
                       <iframe className="map-style" src="https://maps.google.com/maps?q= A-616, Sidhhivinayak business tower, Nr. Kataria Arcade, B/h. Divyabhaskar Press, Corporate road, S. G. Highway, Ahmedabad, Gujarat 380051&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
</Col>
                </Row>
            </div>
        </div>
    );
}
export default Contact