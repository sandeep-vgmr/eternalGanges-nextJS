import React, { useState } from 'react';
import Wrapper from '@/components/atom/wrapper';
import Image from 'next/image';
import Coupondata from './applycoupondata';
import Link from 'next/link';

// Images import links 
import CloseIcon from '@/assets/images/icons/close-icon.svg';
import Tickicon from '@/assets/images/icons/tick-right-icon.svg';


const Applycoupon = ({ openMyCoupon, HandleMyCoupon, HandleMyCouponBtn }) => {
    const [checkboxTick, setCheckboxTick] = useState(false);
    const [data, setdata] = useState(Coupondata);


    const HandleTick = (id) => {
        let arr = Coupondata;
        Coupondata.forEach(item => {
            if (item.id === id) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        })
        setdata(arr)
        setCheckboxTick(!checkboxTick);
    }


    return (
        <div className={`apply-coupon ${openMyCoupon ? "displayblk" : "displaynone"}`}>
            <div className='overlay'></div>
            <Wrapper>
                <div className='coupon-cart'>
                    <h5>Apply Coupon <Image src={CloseIcon} alt='Close Icon' onClick={HandleMyCoupon} /></h5>
                    <div className='main-section'>
                        {
                            Coupondata.map((item, i) => {
                                return <div className={`select-coupon ${item.isActive ? "activeColor" : " "}`} key={i} onClick={() => HandleTick(item.id)}>
                                    <div className='checkbox'>
                                        <div className={`tick-checkbox ${item.isActive ? "addcolor" : " "}`} onClick={HandleTick}>
                                            <Image src={Tickicon} alt='Tick Icon' />
                                        </div>
                                    </div>
                                    <div className='coupon-content'>
                                        <h6>{item.offercode}</h6>
                                        <p>{item.offerdesc} Get <b>{item.discount}% </b>off on your first purchase. Expires on: {item.expiredata}</p>
                                    </div>

                                    <div className='discount-count'><span>Save $ {item.offersave}</span></div>
                                </div>
                            })
                        }
                    </div>

                    <div className='max-saving-info'>
                        <ul>
                            <li>
                                <p>Maximum Savings</p>
                                <span>$ 10</span>
                            </li>
                            <li>
                                <Link href={'#'}><button type='button' onClick={HandleMyCouponBtn}>Apply</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Applycoupon;