import React from 'react';
import Image from 'next/image';
import Loadergrey from '../../../assets/images/loadergrey.svg';


const Loader = () => {
    return (
        <div className="loader" >
            <div className="loading_div">
                 <Image src={Loadergrey} className='loader-img-grey' alt='Loader Image' title='Loader Image' />
            </div>
        </div>
    )
}

export default Loader;