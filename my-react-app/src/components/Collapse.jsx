import React, {useState} from "react";

const Collapse = ({text, opened = true}) =>{
    const [open, setOpen] = useState(opened);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return(
        <div>
            <a href="#" onClick={toggleCollapse}>
                {open ? 'Скрыть' : 'Показать'}
            </a>
            {open && <div>{text}</div>}
        </div>

    );
};

export default Collapse;