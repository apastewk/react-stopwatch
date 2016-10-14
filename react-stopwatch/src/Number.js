import React from 'react'

var Numbers = React.createClass({
     padDigits : function(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
    },
    render : function(){
        var paddedNumber = this.padDigits(this.props.number, 2);
        return <div>{paddedNumber}</div>
    }

});

export default Numbers;