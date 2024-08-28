import { Col, Row } from 'antd';
import './Skills.scss';
import React from 'react';
import Dropdown_ from '../../components/Dropdown/Dropdown';

const items_front = [
    {
        key: '1',
        label: 'HTML'
    },
    {
        key: '2',
        label: 'SCSS'
    },
    {
        key: '3',
        label: 'JavaScript'
    },
    {
        key: '4',
        label: 'React JS',
    },
    {
        key: '5',
        label: 'Bootstrap'
    }
];

const items_back = [
    {
        key: '1',
        label: 'Python'
    },
    {
        key: '2',
        label: 'Java'
    },
    {
        key: '3',
        label: 'Node JS'
    },
    {
        key: '4',
        label: 'Flask',
    },
    {
        key: '5',
        label: 'MySQL'
    }
];

const items_design = [
    {
        key: '1',
        label: 'Figma'
    },
];


const Skills = () => {
    const title1 = 'Frontend developer';
    const icon1 = <i class="bi bi-code-slash"></i>
    const title2 = 'Backend developer';
    const icon2 = <i class="bi bi-code-slash"></i>
    const title3 = 'UI/UX designer';
    const icon3 = <i class="bi bi-code-slash"></i>

    return (
        <div id='skills'>
            <div>
                <label className='skills-title'>Skills</label>
                <label className='skills-subtitle'>My technical level</label>
            </div>
            <div>
                <Row className='skills-dropdown'>
                    <Col md={12}>
                        <Dropdown_ icon={icon1} title={title1} items={items_front}/>
                    </Col>
                    <Col md={12}>
                        <Dropdown_ icon={icon2} title={title2} items={items_back}  />
                    </Col>
                </Row>
                <Row className='skills-dropdown'>
                    <Col md={12}>
                        <Dropdown_ icon={icon3} title={title3} items={items_design}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Skills;

