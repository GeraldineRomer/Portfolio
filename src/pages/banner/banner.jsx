import React from 'react';
import './banner.scss';
import BannerImage from '../../assets/img/sticker.png' ;
import ContactMe from '../../components/ButtonContactMe/ContactMe';
import { Col } from 'antd';

const banner = () => {
    return (
        <div className='banner'>
            <div className='banner-square'>
                <Col md={10}>
                    <svg className='banner-square-svg'>
                        <image href={BannerImage} className='banner-square-svg-image'/>
                    </svg>
                </Col>
                <Col md={12}>
                    <div className='banner-square-info'>
                        <p className='banner-square-info-title'>You have a new project</p>
                        <p className='banner-square-info-subtitle'>Contact me and tell me about this new project.</p>
                        <div className='banner-square-info-btn'>
                            <ContactMe />
                        </div>
                    </div>
                </Col>
            </div>
        </div>
    )
}

export default banner

