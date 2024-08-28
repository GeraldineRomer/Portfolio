import React from 'react';
import './MenuTop.scss';
import { Col, Row } from 'antd';
import { Link } from 'react-scroll';

const MenuTop = () => {
    return (
        <div className='menu-top'>
            <Row>
                <Col md={1}>
                    <label className='menu-top-GR'>GR</label>
                </Col>
                <Col md={7}></Col>
                <Col md={2} align='middle' justify='center'>
                    <Link 
                        className='menu-top-sections' 
                        style={{marginLeft:'7px'}}
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500}
                    >
                        Home
                    </Link>
                </Col>
                <Col md={2} align='middle' justify='center'>
                    <Link 
                        className='menu-top-sections' 
                        style={{marginLeft:'7px'}}
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        About
                    </Link>
                </Col>
                <Col md={2} align='middle' justify='center'>
                    <Link 
                        className='menu-top-sections' 
                        style={{marginLeft:'7px'}}
                        to="skills" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        Skills
                    </Link>
                </Col>
                <Col md={3} align='middle' justify='center'>
                    <Link 
                        className='menu-top-sections' 
                        style={{marginRight:'25px'}}
                        to="services" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >   
                        Services
                    </Link>
                </Col>
                <Col md={2} align='middle' justify='center' >
                    <Link 
                        className='menu-top-sections' 
                        style={{marginRight:'100px'}}
                        to="portfolio" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        Portfolio
                    </Link>
                </Col>
                <Col md={3} align='middle' justify='center'>
                    <Link 
                        className='menu-top-sections' 
                        style={{marginLeft:'20px'}}
                        to="contactme" 
                        spy={true} 
                        smooth={true} 
                        offset={-10} 
                        duration={500}
                    >
                        Contact me
                    </Link>
                </Col>
                <Col >
                    <i className="bi bi-moon-fill menu-top-sections" md={3} align='middle' justify='center' style={{marginLeft:'30px'}}></i>
                </Col>
            </Row>
        </div>
    );
}

export default MenuTop;
