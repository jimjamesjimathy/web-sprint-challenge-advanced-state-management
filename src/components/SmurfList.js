import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

const SmurfList = (props)=> {

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurf.map(item => (<Smurf smurf={item} key={item.id}/>))}
    </div>);
}
//export default SmurfList;
const mapStateToProps = (state) => {
    console.log('list state',state)
    return {
        smurf:state.smurf,
        isLoading:state.isLoading
    }    
}

export default connect(mapStateToProps)(SmurfList);