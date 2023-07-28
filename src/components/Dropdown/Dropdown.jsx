import './Dropdown.scss';
import React from 'react';
import { Dropdown ,  Menu,  Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Dropdown_ = ({icon, title, items}) => {
    const menu = (
        <Menu className='dropdown-menu'>
            {items.map((item) => (
                <Menu.Item   key={item.key}>
                    <div className='dropdown-menu-label-container'>
                        <span className='dropdown-menu-label'>{item.label}</span>
                    </div>
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <div>
            <Dropdown
                overlay={menu}
                menu={{
                    menu,
                }}
                className='dropdown'
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        {icon && <i className='dropdown-devicon'>{icon}</i>}
                        {title && <label className='dropdown-label'>{title}</label>}
                        <DownOutlined className='dropdown-drownicon'/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
}

export default Dropdown_;

