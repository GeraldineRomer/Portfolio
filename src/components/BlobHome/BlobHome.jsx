import React from 'react';
import './BlobHome.scss';
import HiPhotoRoomImage from '../../assets/img/hi-PhotoRoom-removebg-preview.png';

const BlobHome = () => {

    const imageSize = 100; // Tamaño de la imagen
    const imageRotation = 180; // Ángulo de rotación de la imagen
    
        return (
        <div>
            <svg viewBox={`0 0 200 200`} xmlns="http://www.w3.org/2000/svg" className='blob'>
            <path fill="#7B68EE" d="M44.2,-30.7C49.7,-16,41.3,1.6,31.7,16.7C22,31.9,11,44.8,-2.8,46.4C-16.7,48,-33.3,38.4,-47.4,20.7C-61.5,2.9,-73.1,-23,-64.8,-39.4C-56.4,-55.8,-28.2,-62.7,-4.4,-60.1C19.3,-57.5,38.6,-45.5,44.2,-30.7Z" transform="translate(100 100)" />
            <g transform={`translate(166, 156) rotate(${imageRotation})`}>
                <image href={HiPhotoRoomImage} width={imageSize} height={imageSize} className='blob-image' />
            </g>
            </svg>
        </div>
        );
}

export default BlobHome;
