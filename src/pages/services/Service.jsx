import { Col, Row } from 'antd';
import './Services.scss';
import React from 'react';
import Square from '../../components/Square/Square';

const Service = () => {
    const title1 = 'Web developer';
    const text1 = 'I develop web pages according to customer needs. Using current technologies and libraries in the working field.';
    const icon1 = <i class="bi bi-file-code-fill"></i>
    const title2 = 'UI/UX designer';
    const text2 = 'I usually make the interfaces of the web pages, using programs like figma.';
    const icon2 = <i class="bi bi-vector-pen"></i>
    const font_size_icon = 80;
    const width = 393;
    const height = 300;

    return (
        <div>
            <label className='service-title'>My Services</label>
            <label className='service-subtitle'>What I do</label>
            <Row style={{marginTop: '70px'}}>
                <Col md={12} className='service-col'>
                    <Square width={width} height={height} title={title1} text={text1} icon={icon1} font_size={font_size_icon}/>
                </Col>
                <Col md={12} className='service-col'>
                    <Square width={width} height={height} title={title2} text={text2} icon={icon2} font_size={font_size_icon}/>
                </Col>
            </Row>
        </div>
    );
}

export default Service;

