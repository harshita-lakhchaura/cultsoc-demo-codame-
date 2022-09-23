import React, { useState } from 'react'
import imgt1 from '../Teachers/imgt1.jpg';
import imgt2 from '../Teachers/imgt2.jpg';
import imgt3 from '../Teachers/imgt3.jpg';
import imgt4 from '../Teachers/imgt4.jpg';
import imgt5 from '../Teachers/imgt5.jpg';
import imgt6 from '../Teachers/imgt6.jpg';
import imgt7 from '../Teachers/imgt7.jpg';
import imgt8 from '../Teachers/imgt8.jpg';
import imgt9 from '../Teachers/imgt9.jpg';
import '../styling/gallery.scss'
import CloseIcon from '@mui/icons-material/Close';

function Gallery_Teachers() {
    let data = [
        {
            id: 1,
            imgSrc: imgt1
        },
        {
            id: 2,
            imgSrc: imgt2
        },
        {
            id: 3,
            imgSrc: imgt3
        },
        {
            id: 4,
            imgSrc: imgt4
        },
        {
            id: 5,
            imgSrc: imgt5
        },
        {
            id: 6,
            imgSrc: imgt6
        },
        {
            id: 7,
            imgSrc: imgt7
        },
        {
            id: 8,
            imgSrc: imgt8
        },
        {
            id: 9,
            imgSrc: imgt9
        },
    ]

    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    return (
        <>
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Teachers' Day</h2>
                <h3 class="section-subheading text-muted">Get a glimpse of how IIIT Bhopal celebrated Teachers' Day 2022</h3>
            </div>
            <div id="display">
                <div className={modal ? 'modal open' : 'modal'}>
                    <img src={tempImgSrc} />
                    <CloseIcon onClick={() => setModal(false)} />
                </div>
                <div className='gallery_gallery'>
                    {data.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Gallery_Teachers