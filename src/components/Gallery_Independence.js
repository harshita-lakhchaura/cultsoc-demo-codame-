import React, { useState } from 'react'
import imgt0 from '../Independence/imgt0.JPG'
import imgt1 from '../Independence/imgt1.JPG';
import imgt2 from '../Independence/imgt2.JPG';
import imgt3 from '../Independence/imgt3.JPG';
import imgt4 from '../Independence/imgt4.JPG';
import imgt5 from '../Independence/imgt5.JPG';
import imgt6 from '../Independence/imgt6.JPG';
import imgt7 from '../Independence/imgt7.JPG';
import imgt8 from '../Independence/imgt8.JPG';
import imgt9 from '../Independence/imgt9.JPG';
import imgt10 from '../Independence/imgt10.JPG';
import imgt11 from '../Independence/imgt11.JPG';
import imgt12 from '../Independence/imgt12.JPG';
import '../styling/gallery.scss'
import CloseIcon from '@mui/icons-material/Close';
function Gallery_Independence(){
    let data = [
        {
            id:0,
            imgSrc: imgt0
        },
        {   id: 1,
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
        {
            id: 10,
            imgSrc: imgt10
        },
        {
            id: 11,
            imgSrc: imgt11
        },
        {
            id: 12,
            imgSrc: imgt12
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
                <h2 class="section-heading text-uppercase">Independence Day</h2>
                <h3 class="section-subheading text-muted">Catch a sight of the patriotic fervour in IIITians</h3>
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

export default Gallery_Independence