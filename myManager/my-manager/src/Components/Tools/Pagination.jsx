import React, {Component} from 'react';
import RCPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css'
class Pagination extends Component {
    render() {
        return (
            <div className="pagination pull-right">
                <RCPagination
                    {...this.props}
                    hideOnSinglePage
                    showQuickJumper
                />
            </div>
        );
    }
}
/*
hideOnSinglePage 如果数据不足pageSize的最大条数，那么不会出现分页器
showQuickJumper 跳转到
*/

export default Pagination;