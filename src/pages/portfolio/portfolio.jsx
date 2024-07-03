import './portfolio.scss';
import React, { useRef, useState } from 'react';
import { Tabs, Col, Row } from 'antd';
import allImg from '../../assets/img/portfolio1.jpg' ;
import webImg from '../../assets/img/portfolio2.jpg' ;
import mobileImg from '../../assets/img/portfolio3.jpg' ;
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Portfolio = () => {

    const projects = [
        {
            img: allImg,
            title: 'Library',
            content: 'Web page about a bookstore. It has a panel for administrator, user and visitor. Registration and login opportunity. Manage books and authors. Several sections such as new books, available books, table book and featured author. Also the user can add books to his favorites list.'
        },
        {
            img: webImg,
            title: 'Portfolio',
            content: 'Own portfolio. You will find the skills and services that a junior systems engineering professional has to offer. All in constant learning and practice with various tools. Connections through email.'
        },
        {
            img: mobileImg,
            title: 'Cost Control',
            content: `Mobile application that will register the client's expenses and income, in addition to registering the user's balance with their respective dates for a better understanding.`
        }
    ];

    const webProjects = [
        {
            img: allImg,
            title: 'Library',
            content: 'Web page about a bookstore. It has a panel for administrator, user and visitor. Registration and login opportunity. Manage books and authors. Several sections such as new books, available books, table book and featured author. Also the user can add books to his favorites list.'
        },
        {
            img: webImg,
            title: 'Portfolio',
            content: 'Own portfolio. You will find the skills and services that a junior systems engineering professional has to offer. All in constant learning and practice with various tools. Connections through email.'
        },
    ]

    const mobileProjects = [
        {
            img: mobileImg,
            title: 'Cost Control',
            content: `Mobile application that will register the client's expenses and income, in addition to registering the user's balance with their respective dates for a better understanding.`
        }
    ]

    const all = {
        label: 'All',
        key: 1,
        children: (
            <div>
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <>
                                    <Row>
                                        <Col span={12} className='portfolio-tabs-img'>
                                            <img src={project.img} className='portfolio-tabs-img-all' alt={project.content} />
                                        </Col>
                                        <Col span={10} className='portfolio-tabs-content'>
                                            <h3>{project.title}</h3>
                                            <p className='portfolio-tabs-content-p'>{project.content}</p>
                                        </Col>
                                    </Row>
                                </>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </div>
        )
    };

    const web = {
        label: 'Web',
        key: 2,
        children: (
            <div>
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {webProjects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <>
                                    <Row>
                                        <Col span={12} className='portfolio-tabs-img'>
                                            <img src={project.img} className='portfolio-tabs-img-all' alt={project.content} />
                                        </Col>
                                        <Col span={10} className='portfolio-tabs-content'>
                                            <h3>{project.title}</h3>
                                            <p className='portfolio-tabs-content-p'>{project.content}</p>
                                        </Col>
                                    </Row>
                                </>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </div>
        )
    }

    const mobile = {
        label: 'Mobile',
        key: 3,
        children: (
            <div>
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {mobileProjects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <>
                                    <Row>
                                        <Col span={12} className='portfolio-tabs-img'>
                                            <img src={project.img} className='portfolio-tabs-img-all' alt={project.content} />
                                        </Col>
                                        <Col span={10} className='portfolio-tabs-content'>
                                            <h3>{project.title}</h3>
                                            <p className='portfolio-tabs-content-p'>{project.content}</p>
                                        </Col>
                                    </Row>
                                </>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </div>
        )
    }

    return (
        <div>
            <label className='portfolio-title'>Portfolio</label>
            <label className='portfolio-subtitle'>My recent works</label>
            <Tabs
                defaultActiveKey="1"
                centered
                className='portfolio-tabs'
                items={[
                    {
                        ...all
                    },
                    {
                        ...web
                    },
                    {
                        ...mobile
                    }
                ]}
            />
        </div>
    );
}

export default Portfolio;

