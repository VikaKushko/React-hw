import React, {useState} from 'react';
import './App.css';
const BtnGroup = () => {
    const [activeBtn, setActiveBtn] = useState(null);

    const handleBtnClick = (btnId) => {
        setActiveBtn(btnId);
    };

    return (
        <div>
            <button
                onClick={() => handleBtnClick(1)}
                className={activeBtn === 1 ? 'active' : ''}
            >
                Button 1
            </button>
            <button
                onClick={() => handleBtnClick(2)}
                className={activeBtn === 2 ? 'active' : ''}
            >
                Button 2
            </button>
        </div>
    );
};

export default BtnGroup;

