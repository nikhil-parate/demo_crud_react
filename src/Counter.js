import React from 'react';
import  propTypes  from 'prop-types';
class count extends React.Component{
    constructor() {
        super();
    }
    render() {
        return(
            <>
              <p>name: {this.props.name}</p>
              <p>age: {this.props.age}</p>
            </>
        )
    }
}
count.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
}
export default count;