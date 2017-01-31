import React from 'react';

class Product extends React.Component{
  render(){
    return(
      <p>
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}
      </p>
    )
  }
}


Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, weight, componentName){
    if(props[weight] === undefined){
      return new Error('Invalid prop ' + weight)
    }
    else if(isNaN(props[weight])){
      return new Error('Errors')
    }
    else if(props[weight] > 300 || props[weight] < 80){
      return new Error('Error')
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}

module.exports = Product
