import React from 'react'
import Header from "../Components/Header";
import "../Css/Portfolio.css";
import {Container, Row, Col} from "react-bootstrap"
import Footer from '../Components/Footer';
import Portfoliofile from '../Components/Portfoliofile';
import { images } from '../../Images';
const Portfolio = () => {
  return (
    <div>
        <Header/>
        <div className='ppotfiliohero'>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                    <p className='portherohead'>My Portfolio</p>
                    <p className='portherodesc'>Ultrices leo vulputate cras magna id urna mauris tellus consectetur. A duis volutpat sociis arcu, egestas. Ac, nunc aliquet mi viverra turpis lorem. Nisl id arcu fermentum volutpat.</p>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
           </div>
           <div className='portfolioseconfbluebg'>
            <Container>
                <Row>
                    <Col md={3} className='mblmargtop'>
                        <Portfoliofile image={images.portimg} name="Asset Name" feature="Feature 1.Feature 1.Feature 1" pricehead="Current Price" price="59WQ.568" valuehead="Total Value" value="KD6721"/>
                    </Col>
                    <Col md={3} className='mblmargtop'>
                        <Portfoliofile image={images.portimg} name="Asset Name" feature="Feature 1.Feature 1.Feature 1" pricehead="Current Price" price="59WQ.568" valuehead="Total Value" value="KD6721"/>
                    </Col>
                    <Col md={3} className='mblmargtop'>
                        <Portfoliofile image={images.portimg} name="Asset Name" feature="Feature 1.Feature 1.Feature 1" pricehead="Current Price" price="59WQ.568" valuehead="Total Value" value="KD6721"/>
                    </Col>
                    <Col md={3} className='mblmargtop'>
                        <Portfoliofile image={images.portimg} name="Asset Name" feature="Feature 1.Feature 1.Feature 1" pricehead="Current Price" price="59WQ.568" valuehead="Total Value" value="KD6721"/>
                    </Col>
                    <Col md={3} className=' marg-top-desk mblmargtop'>
                        <Portfoliofile image={images.portimg} name="Asset Name" feature="Feature 1.Feature 1.Feature 1" pricehead="Current Price" price="59WQ.568" valuehead="Total Value" value="KD6721"/>
                    </Col>
                    <Col md={3} className='marg-top-desk mblmargtop'>
                        <Portfoliofile image={images.portimg} name="Asset Name" feature="Feature 1.Feature 1.Feature 1" pricehead="Current Price" price="59WQ.568" valuehead="Total Value" value="KD6721"/>
                    </Col>
                    <Col md={3} className='marg-top-desk mblmargtop'>
                        <Portfoliofile image={images.portimg} name="Asset Name" feature="Feature 1.Feature 1.Feature 1" pricehead="Current Price" price="59WQ.568" valuehead="Total Value" value="KD6721"/>
                    </Col>
                    <Col md={3} className='marg-top-desk mblmargtop'>
                        <Portfoliofile image={images.portimg} name="Asset Name" feature="Feature 1.Feature 1.Feature 1" pricehead="Current Price" price="59WQ.568" valuehead="Total Value" value="KD6721"/>
                    </Col>
                </Row>
            </Container>
           </div>
           <Container>
            <Row>
            </Row>
           </Container>
           <Footer/>
    </div>
  )
}

export default Portfolio