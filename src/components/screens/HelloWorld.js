import React from "react";

class HelloWorld extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <h2>{this.props.title}</h2>
                <h3>{this.props.title}</h3>
            </>
        )
    
    }
}

export default HelloWorld;