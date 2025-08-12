import React from 'react';

const Developers = ({selected}) => {
    return (
        <div>
            <div>
                <div>
                    <h3>Available</h3>
                    <h3>Selected: {selected}/6</h3>
                </div>
                <div>
                    <button>Available</button>
                    <button>Selected</button>
                </div>
            </div>
        </div>
    );
};

export default Developers;