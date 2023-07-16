import React from 'react';
import './Home.scss';
import ContactMe from '../../components/ButtonContactMe/ContactMe';
import BlobHome from '../../components/BlobHome/BlobHome';
import { Row } from 'antd';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-content'>
                <Row>
                    <label className='home-hi'>Hi, I'm Geraldine Romero</label>
                </Row>
                <Row>
                    <label className='home-frontdev'>Frontend developer</label>
                </Row>
                <Row className='home-btn'>
                    <ContactMe />
                </Row>
                <Row>
                    <a href='#' className='home-icons'>
                        <i className="bi bi-github home-icon"></i>
                    </a>
                    <a href='#' className='home-icons-linkendin'>
                        <i className="bi bi-linkedin home-icon"></i>
                    </a>
                </Row>
                <Row>
                    <a href='#' className='home-scroll'>
                        <i class="bi bi-mouse2-fill"></i>
                        <label>Scroll down</label>
                        <i class="bi bi-arrow-down"></i>
                    </a>
                </Row>
            </div>
            <div className='home-blob'>
                <BlobHome/>
            </div>
        </div>
    );
}

export default Home;

