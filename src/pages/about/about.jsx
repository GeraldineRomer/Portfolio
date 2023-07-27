import React from 'react';
import './about.scss';
import ThanksImage from '../../assets/img/thanks-PhotoRoom-removebg-preview4.png' ;
import Square from '../../components/Square/Square';
import ContactMe from '../../components/ButtonContactMe/ContactMe';
import { Row } from 'antd';

const About = () => {
    const width_square = 158;
    const height_square = 132;
    const title1 = 'Experience';
    const title2 = 'Completed';
    const text1 = '02 years';
    const text2 = '02 projects';
    const icon2 = <i class="bi bi-briefcase-fill"></i>
    const icon1 = <i class="bi bi-star-fill"></i>

    return (
        <div> 
            <label className='about-title' >About Me</label>
            <div className='about'>
                <div className='about-content'>
                    <svg className='about-svg'>
                        <g>
                            <image href={ThanksImage} className='about-image'/>
                        </g>
                    </svg>
                </div>
                <div>
                    <Row className='about-square'>
                        <Square width={width_square} height={height_square} title={title1} text={text1} icon={icon1} />
                        <div className='about-square2'>
                            <Square   width={width_square} height={height_square} title={title2} text={text2} icon={icon2} />
                        </div>
                    </Row>
                    <Row>
                        <p className='about-text'>
                            Junior frontend developer, I create web pages 
                            with UI/UX design and I am in progress to create 
                            mobile applications. I also have knowledge as a 
                            backend developer.
                        </p>
                    </Row>
                    <Row>
                        <ContactMe/>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default About;
