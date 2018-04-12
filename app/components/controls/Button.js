import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Button =  (props) =>{
    function onClick(e) {
        e.target.blur();
        const val = props.val || props.children;
        props.returnValue(val);
    }
    return <RaisedButton type="button" style={{height: '88px'}} onClick={onClick} className={props.className}>{props.children}</RaisedButton>
}

Button.defaultProps = {
    returnValue: function () {
        
    },
    val: null
}

export default Button
