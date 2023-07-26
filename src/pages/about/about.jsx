import React from 'react';
import './about.scss';
import ThanksImage from '../../assets/img/thanks-PhotoRoom-removebg-preview.png' ;
import Square from '../../components/Square/Square';

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
            <div>
                <g>
                    <image href={ThanksImage} width={100} height={100} className='about-image'/>
                </g>
            </div>
            <div>
                <Square width={width_square} height={height_square} title={title1} text={text1} icon={icon1} />
            </div>
        </div>
    );
}

export default About;
