import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import './Model.css';

const Model = ({children, visible, onClose}) => {



    return (
        <div className={classNames('model-bg', {visible: visible})}>
            <div className="model">
                <button onClick={onClose}>Close</button>
                {children}
            </div>
            
        </div>
    );
}

export default Model;
