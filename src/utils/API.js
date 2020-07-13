import React, { Component } from 'react';

class API extends Component {
    constructor(){
        super();
        this.state={
            data: [],
        }
    }

    componentDidMount(){
        //change to be github pages when operational
        fetch('http://localhost:3000')
        .then((Response)=>Response.json())
        .then((findresponse)=>
        {
            this.setState ({
                data:findresponse,
            });
        });
    }
    
    render() {
        return (
            <div>
                {
                    this.state.data.map((dynamicData)=>
                    <div>
                        <span>{dynamicData.Username}</span>
                        <span>{dynamicData.Password}</span>
                    </div>
                    )
                }
            </div>
        );
    }
}
export default API;