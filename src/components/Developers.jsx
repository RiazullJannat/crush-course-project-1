import React from 'react';

const Developers = ({handleToggle, toggle}) => {
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h3 className={`${toggle?'block':'hidden'}`}>Available</h3>
                    <h3 className={`${toggle?'hidden':'false'}`}>Selected: 0/6</h3>
                </div>
                <div>
                    <button onClick={()=>handleToggle(true)} className={`${toggle?"btn-success":""} btn btn-outline mr-2`}>Available</button>
                    <button onClick={()=>handleToggle(false)} className={`${toggle?"":"btn-success"} btn btn-outline`}>Selected</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Developers;