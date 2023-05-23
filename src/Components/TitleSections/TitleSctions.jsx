import React from 'react';

const TitleSctions = ({heading, subHeading}) => {
    return (
        <div className='w-4/12 mx-auto text-center mb-8'>
            <h3 className='text-yellow-600'>{subHeading}</h3>
            <h2 className='text-3xl uppercase font-semibold border-y-4'>{heading}</h2>
        </div>
    );
};

export default TitleSctions;