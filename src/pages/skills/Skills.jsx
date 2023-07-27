import { Col, Dropdown, Row, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Skills.scss';
import React from 'react';

const items = [
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

const Skills = () => {
    return (
        <div>
            <div>
                <label className='skills-title'>Skills</label>
                <label className='skills-subtitle'>My technical level</label>
            </div>
            <div>
                <Row>
                    <Col md={8}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            className='skills-dropdown1'
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <i class="bi bi-code-slash skills-dropdown1-devicon"></i>
                                    <label className='skills-dropdown1-label'>Frontend developer</label>
                                    <DownOutlined className='skills-dropdown1-drownicon'/>
                                </Space>
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Skills;

