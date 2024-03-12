import React from 'react';
import AppComponent from "../App.jsx";


const Root = () => {
    return (
        <>
            <div>
                <AppComponent text="This is a primary alert" type="primary" />
                <AppComponent text="This is a success alert" type="success" />
                <AppComponent text="This is a danger alert" type="danger" />
            </div>
        </>
    );
};
export default Root