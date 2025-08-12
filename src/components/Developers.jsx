import { useEffect, useState } from "react";
import Developer from "./Developer";

const Developers = ({ handleToggle, toggle, selected, handleBuy }) => {
    const [developers, setDevelopers] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [sDevelopers, setSDevelopers] = useState([]);
    useEffect(() => {
        fetch('developers.json')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, [])
    useEffect(() => {
        let filtered = developers.filter(dev => selected.includes(dev.id));
        setSDevelopers(filtered);
    }, [developers, selected]);
    console.log("selected developer", sDevelopers);
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h3 className={`${toggle ? 'block' : 'hidden'}`}>Available</h3>
                    <h3 className={`${toggle ? 'hidden' : 'false'}`}>Selected: {selected.length}/6</h3>
                </div>
                <div>
                    <button onClick={() => handleToggle(true)} className={`${toggle ? "btn-success" : ""} btn btn-outline mr-2`}>Available</button>
                    <button onClick={() => handleToggle(false)} className={`${toggle ? "" : "btn-success"} btn btn-outline`}>Selected {selected.length}</button>
                </div>
            </div>
            <div>
                <div className={`${toggle ? 'block' : 'hidden'}`}>
                    <div className="grid grid-cols-3">
                        {
                            developers.map(developer => <Developer key={developer.id} developer={developer} handleBuy={handleBuy} />)
                        }
                    </div>
                </div>
                <div className={`${toggle ? 'hidden' : 'false'}`}>
                    <div className="grid grid-cols-3">
                        {
                            sDevelopers.map(developer => <Developer developer={developer} key={developer.id} handleBuy={handleBuy} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developers;