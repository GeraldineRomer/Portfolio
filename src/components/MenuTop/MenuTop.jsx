import React from 'react';
import './MenuTop.scss';
import { Col, Row } from 'antd';

const MenuTop = () => {
    return (
        <div className='menu-top'>
            <Row>
                <Col md={1}>
                    <label className='menu-top-GR'>GR</label>
                </Col>
                <Col md={7}></Col>
                <Col md={2} align='middle' justify='center'>
                    <label className='menu-top-sections' style={{marginLeft:'7px'}}>Home</label>
                </Col>
                <Col md={2} align='middle' justify='center'>
                    <label className='menu-top-sections' style={{marginLeft:'7px'}}>About</label>
                </Col>
                <Col md={2} align='middle' justify='center'>
                    <label className='menu-top-sections' style={{marginLeft:'7px'}}>Skills</label>
                </Col>
                <Col md={3} align='middle' justify='center'>
                    <label className='menu-top-sections' style={{marginRight:'25px'}}>Services</label>
                </Col>
                <Col md={2} align='middle' justify='center' >
                    <label className='menu-top-sections' style={{marginRight:'100px'}}>Portfolio</label>
                </Col>
                <Col md={3} align='middle' justify='center'>
                    <label className='menu-top-sections' style={{marginLeft:'20px'}}>Contact me</label>
                </Col>
                <Col >
                    <i className="bi bi-moon-fill menu-top-sections" md={3} align='middle' justify='center' style={{marginLeft:'30px'}}></i>
                </Col>
            </Row>
        </div>
    );
}

export default MenuTop;
