import React, { useState } from 'react';

const Currency = () => {

    const [currency, setCurrency] = useState('Pound');

    return (
        <div>
            <div className='alert alert-success'>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                        <option value="Doller" name="doller" selected={ currency==="Doller" }> $Doller</option>
                        <option value="Pound" name="pound" selected={ currency==="Pound" }>Pound</option>
                        <option value="Euro" name="euro" selected={ currency==="Euro" }>Euro</option>
                        <option value="Ruppee" name="ruppee" selected={ currency==="Ruppee" }>Ruppee</option>
                  </select>
                </div>
        </div>
    );
};
export default Currency;