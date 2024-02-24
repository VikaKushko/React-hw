import React from "react";

class Card extends React.Component{
    render() {
        const {title, text} = this.props;

        return(
            <div className="card">
                <div className="card-body">
                    {<h4 className="card-title">{title}hi</h4>}
                    {<p className="card-text">how are you? {text}</p>}
                </div>
            </div>
        )
    }

}

export default Card;