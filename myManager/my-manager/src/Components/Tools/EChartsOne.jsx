import React, {Component} from 'react';
import echarts from "echarts";
import {connect} from "react-redux";

class EChartsOne extends Component {
    render() {
        return (
            <div id="main1" style={{height:400}} />
        );
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps.order_counter);
        let order_counter = nextProps.order_counter;
        console.log(Object.keys(order_counter));
        let main1 = echarts.init(document.getElementById('main1'));
        let option = {
            title: {
                text: '订单统计'
            },
            tooltip: {},
            legend: {
                data:['购买数量']
            },
            xAxis: {
                data: Object.keys(order_counter),
                axisLabel: {
                    interval:0
                }
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: Object.values(order_counter)
            }]
        };
        main1.setOption(option);
    }
}

const mapStateToProps = (state)=>{
    return {
        order_counter: state.homeData.order_counter
    }
};

export default connect(mapStateToProps, null)(EChartsOne);