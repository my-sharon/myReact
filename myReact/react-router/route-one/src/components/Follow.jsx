import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class Follow extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div style={{background:"red"}}>
                我是关注板块
                <p>
                    <button>
                        <Link to="/login/">关注一下</Link>
                    </button>
                </p>
            </div>
        )
    }
}