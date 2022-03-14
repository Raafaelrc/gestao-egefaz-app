import React from "react";

import './css/cards.css'

class Cards extends React.Component {

    render() {

        return (


            <div className="card md-3">
                <div className="card-headerr" >{this.props.title}</div>
                <div className="card-body">

                    {this.props.children}
                </div>
            </div>

        )

    }

}

export default Cards