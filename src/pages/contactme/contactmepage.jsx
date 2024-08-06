import React from 'react';
import './contactmepage.scss';
import TextField from '@mui/material/TextField';
import { Button } from 'antd';

const contactmepage = () => {
    return (
        <div>
            <label className='contactme-title' >Contact Me</label>
            <label className='contactme-subtitle' >Write me your project</label>
            <div className='contactme-nameemail'>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue="Insert your name"
                    className='contactme-nameemail-name'
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue="Insert your email"
                    className='contactme-nameemail-email'
                />
            </div>
            <div className='contactme-project'>
                <TextField
                    id="outlined-multiline-static"
                    label="Project"
                    multiline
                    rows={10}
                    defaultValue="Write your project"
                    className='contactme-project-text'
                />
            </div>
            <div className='contactme-sendmessage'>
                <Button shape="round" className='contactme-sendmessage-btn'>
                    Send message
                </Button>
            </div>
        </div>
    )
}

export default contactmepage;

