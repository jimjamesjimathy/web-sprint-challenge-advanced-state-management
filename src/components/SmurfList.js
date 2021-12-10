import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

const SmurfList = (props)=> {
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    } else {
        return(<div className="listContainer">
            {props.smurf.map(item => (<Smurf smurf={item} key={item.id}/>))}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        smurf: state.smurf,
        isLoading: state.isLoading
    }    
}

export default connect(mapStateToProps)(SmurfList);