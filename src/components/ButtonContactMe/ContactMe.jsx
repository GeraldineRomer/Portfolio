import React, { useState } from 'react';
import './ContactMe.scss';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const ContactMe = () => {
    const [size, setSize] = useState('large');
    return (
        <Button  shape="round"  size={size} className='contactme'>
            Contact Me <SendOutlined className='contactme-icon'/> 
        </Button>
    );
}

export default ContactMe;

