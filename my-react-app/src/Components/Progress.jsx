import React, {  Component} from "react";

class Progress extends Component{
    render() {
        const {percentage} = this.props;

        return(
            <div className='progress'>
                <div className='progress-bar' style={{ width: `${percentage}%` }}></div>
            </div>
        );
    }
}
export default Progress