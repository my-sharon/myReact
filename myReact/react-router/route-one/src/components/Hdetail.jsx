import React,{Component} from "react";
import url from "url";
export default class Hdetail extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div style={{background:"yellow"}}>
                我是details板块
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props);
        console.log(url.parse(this.props.location.search,true).query);
    }
}