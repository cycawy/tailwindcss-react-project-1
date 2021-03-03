import React from 'react';
import ImageOne from '../images/img-1.jpeg';
import ImageTwo from '../images/img-2.jpeg';

function Content(){
    return(
        <div>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={ImageOne} alt="food 1" className='h-full rounded mb-20 shadow'>
                </img>
                <div>
                    <h2 className='flex flex-col justify-center items-center'>banana sandwich</h2>
                    <p className='mb-2'>crisp, delicious, and nutricious</p>
                    <span>$18</span>
                </div>
            </div>
                <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={ImageTwo} alt="food 1" className='h-full rounded mb-20 shadow'>
                </img>
                <div>
                    <h2 className='flex flex-col justify-center items-center'>banana sandwich</h2>
                    <p className='mb-2'>crisp, delicious, and nutricious</p>
                    <span>$18</span>
                </div>
            </div>
        </div>
        
    )
}

export default Content;