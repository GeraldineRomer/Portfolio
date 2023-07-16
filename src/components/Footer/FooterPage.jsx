import React from 'react';
import './FooterPage.scss';
import { Col, Row } from 'antd';

const FooterPage = () => {
    return (
        <footer className='footer'>
            <Row>
                <Col md={8} className='footer-geraldinefront'>
                    <label className='footer-geraldineromero'>Geraldine Romero</label>
                    <label className='footer-frontenddeveloper'>Frontend developer</label>
                </Col>
                <Col md={8} className='footer-icons'>
                    <i className="bi bi-github footer-icon"></i>
                    <i className="bi bi-linkedin footer-icon"></i>
                </Col>
                <Col md={8}>
                    <label className='footer-copyright'>© Copyright Geraldine Romero. All right reserved</label>
                </Col>
            </Row>
            
        </footer>
    );
}

export default FooterPage;

