import React from 'react';
import { Image, Row, Col, Container, } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Product = () => {

    const whyWorkHome = (url, title, price, duration) => {

        return <Col md={4}  >
            <div className="m-3" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration={duration}>
                <Row className="bg-col-div-why-work">
                    <Col md={12} className="p-0"><img src={url} className="w-100 card-img" /></Col>
                    <Col md={12} className="p-2"><p>{title}</p></Col>
                    <Col md={6} className="p-2 bg-e6e1d3  text-center"><h5 className="m-0">{price} </h5></Col> <Col md={6} className="p-2 bg-e6e1d3 text-center"><b>Add To Cart</b></Col>
                    {/* <i className="fa fa-arrow-circle-o-right fa-2x icon-align-bt-why-work" aria-hidden="true"></i> */}
                </Row>
            </div>
        </Col>
    }
    return (
        <div>
            <div>
                <div className="product-main-carsoul" >
                    <div className="home-main-carsoul-overlay">
                    </div>
                    <Container data-aos="zoom-out-down">
                        <div className="home-slider-overlay-text" >
                            <h1 className="text-uppercase mb-5">
                                Product </h1>
                            <button className="join-us-btn mr-3">Shop Now</button>
                        </div>
                    </Container>
                </div>
            </div>
            <Row className="row p-5 m-0">
                <Col md={3}>
                    <div>
                        <Row className="pt-5 pb-5 row m-0 border-right">
                            <Col md={12}>
                                <div>
                                    <ul>
                                        <li><b><h5>Category</h5></b></li>
                                        <li className="pl-3 pt-3"><i className="fa fa-chevron-down pr-1 font-weight-normal" aria-hidden="true"></i>Copper</li>
                                        <li className="pl-5 pt-3"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Plates</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Galss</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Bowl</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Spoon</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Handi</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Pan</li>
                                        <li className="pl-3"><i className="fa fa-chevron-down pr-1 font-weight-normal" aria-hidden="true"></i>Brass</li>
                                        <li className="pl-5 pt-3"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Plates</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Galss</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Bowl</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Spoon</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Handi</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Pan</li>
                                        <li className="pl-3"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Bronze</li>
                                        <li className="pl-5 pt-3"><i className="fa fa-chevron-down pr-1 font-weight-normal" aria-hidden="true"></i>Plates</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Galss</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Bowl</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Spoon</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Handi</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Pan</li>
                                        <li className="pl-3"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Steel</li>
                                        <li className="pl-5 pt-3"><i className="fa fa-chevron-down pr-1 font-weight-normal" aria-hidden="true"></i>Plates</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Galss</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Bowl</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Spoon</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Handi</li>
                                        <li className="pl-5"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Pan</li>
                                    </ul>
                                     <ul className="border-top pt-3">
                                        <li><b><h5>Work Types</h5></b></li>
                                        <li className="pl-3 pt-3"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Lvory Work</li>
                                        <li className="pl-3 pt-3"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Lacquered work</li>
                                        <li className="pl-3 pt-3"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Enamel Work</li>
                                        <li className="pl-3 pt-3"><i className="fa fa-chevron-right pr-1 font-weight-normal" aria-hidden="true"></i>Metalware</li>
                                        </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={9}>
                    <div>
                        <Row className="pt-5 pb-5 row m-0">
                            {whyWorkHome("https://img.tatacliq.com/images/i7/658Wx734H/MP000000008442904_658Wx734H_202012250219481.jpeg", "Reddish Copper Water Dispenser", "₹ 6296", "1000")}
                            {whyWorkHome("https://img.tatacliq.com/images/i7/658Wx734H/MP000000010436940_658Wx734H_202108271309201.jpeg", "Red Copper Modak Patr", "₹ 5795", "1100")}
                            {whyWorkHome("https://5.imimg.com/data5/WT/AH/TL/IOS-37656293/product-jpeg-250x250.png", "Hammered Steel Copper Thali Sets", "₹ 1700", "1200")}
                            {whyWorkHome("https://5.imimg.com/data5/UI/WV/CX/SELLER-52149104/20190306-155339-250x250.jpg", "Platter Round Brass Thali with Handle", "₹ 415", "1000")}
                            {whyWorkHome("https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQm3346TbOe8Uj7PKTk6j5bT646elagyxxMUlxRunS6AIyOtGv6NQkN7_MyhJJ33d41Xo2gzfSPwEceTFdSLZdh-AAHgkz93ECOVaNWJSEBbma-_LBYxkW7&usqp=CAE", "Brass Paraat", "₹ 250", "1100")}
                            {whyWorkHome("https://5.imimg.com/data5/SELLER/Default/2021/3/MA/PK/TW/123133374/brass-maharaja-thali-set-250x250.jpg", "Silver Brass Maharaja Thali Set", "₹ 2150", "1200")}
                            {whyWorkHome("https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1tbZIYZo16TbL0Vpjruym6sEixgB9e8UvTrFpvX-68Z0emte7NQI122pMd7NPwNT05YViHD-UT4iLayf61OOt81CLtMpJS4MaYVi-SYFhrW2L1GYOlv4QQkI&usqp=CAE", "Bhuban Kansa Bronze Utensils Midium Bowl Katori", "₹ 2199", "1000")}
                            {whyWorkHome("https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSINvHXaeFLo91ce9WEl12BxJAhc1xnoJEquSggTDncxD-Xn-gRUxC1UIMBUyjaYE0E6ZcFenTgoOBU2EGqIlA5h0ytK_8urjPNHLgmU9y0&usqp=CAE", "Cooking Bowl (Handi) with Nandi Head Handle | Brass Cooking Handi ", "₹ 15400", "1100")}
                            {whyWorkHome("https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/8/1/810013715-2_2.jpg", "Golden Bronze Ayas Kansa Tumbler (D-2.8in, H-3.3in) (Set Of 2 )", "₹ 3799", "1200")}
                            {whyWorkHome("https://5.imimg.com/data5/SELLER/Default/2021/4/XV/VF/MP/123133374/stainless-steel-platter-250x250.jpg", "Silver Round Stainless Steel Platter", "₹ 450", "1000")}
                            {whyWorkHome("https://content3.jdmagicbox.com/comp/def_content/utensil-dealers/shutterstock-1042252666-utensil-dealers-7-6ixy3.jpg", "Stainless Steel Utensils Set", "₹ 4550", "1100")}
                            {whyWorkHome("https://5.imimg.com/data5/ME/GK/IU/SELLER-13719174/20191113-160217-250x250.jpg", "Stainless Steel Sauce Pan", "₹ 255", "1200")}
                        </Row>
                    </div>
                </Col>
            </Row>
            <div className="w-75 m-auto border-top">
                <div className="mt-5">
                    <h3>New Arrivals </h3>
                </div>
                <Row className="m-0 mb-5">
                    {whyWorkHome("https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSq1y6rO7J057OnydEvnBZRtgvutWodykA6zrwl-JwfHM3mVSnnjN7c9OLy4xIm7SBX6WfyhiUAuIA62AJbGv25-Shi78-P9cZFmLfDL3M&usqp=CAE", "Handpainted Kettle Rajasthani Jharoka - Blue", "₹ 1250", "1000")}
                    {whyWorkHome("https://www.gharobaar.com/uploads/images/202110/img_x500_6177c7716f59f0-09204437-30734357.jpg", "Advaita Handicrafts Handpainted Candle Holder", "₹ 1999", "1100")}
                    {whyWorkHome("https://imgmedia.lbb.in/media/2020/05/5eac0a9a833b2b7acdc57b61_1588333210001.png", "Baarique Hand-Painted Utensils Set", "₹ 2250", "1200")}  </Row>
            </div>
        </div>
    );
}
export default Product