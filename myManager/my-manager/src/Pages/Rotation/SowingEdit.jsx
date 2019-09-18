import React, {Component} from 'react';
import {editSowingData} from './../../Api/index'
import { Link } from "react-router-dom";
const IMG_PRE = 'http://localhost:1688/uploads/';

class SowingEdit extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);//通过路由传递的所有参数在保存在props中的location中
        console.log(this.props.location.state);
        // 要修改的原始数据
        const sowing = this.props.location.state.sowing;
        //将原始数据转换状态，通过状态的改变实现界面的渲染从而实现更新数据的操作
        this.state = {
            id: sowing._id,
            image_title: sowing.image_title,
            image_url: IMG_PRE + sowing.image_url,
            image_small_url:  IMG_PRE + sowing.image_small_url,
            image_link: sowing.image_link,
            s_time: sowing.s_time,
            e_time: sowing.e_time,
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="body teacher-profile">
                    <ol className="breadcrumb">
                        <li><Link to="/sowing/list">轮播图管理</Link></li>
                        <li className="active">编辑轮播图</li>
                    </ol>
                    <div className="settings">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">图片名称</label>
                                <div className="col-md-5">
                                    <input
                                        ref="image_title"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写图片名称"
                                        value={this.state.image_title}
                                        onChange={(e)=>this._dealInputValue(e,'image_title')}
                                    />
                                </div>
                            </div>
                            {/*大图*/}
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">大图</label>
                                <div className="col-md-2 preview">
                                    <img src={this.state.image_url} style={{border: 1}} />
                                    <input
                                        ref="image_url"
                                        type="file"
                                        className="form-control input-sm"
                                        placeholder="选择大图片"
                                        onChange={()=>this._previewImg('image_url')}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            {/*小图*/}
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">小图</label>
                                <div className="col-md-2 preview">
                                    <img src={this.state.image_small_url} style={{border: 1}} />
                                    <input
                                        ref="image_small_url"
                                        type="file"
                                        className="form-control input-sm"
                                        placeholder="选择小图片"
                                        onChange={()=>this._previewImg('image_small_url')}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">跳转页面链接</label>
                                <div className="col-md-5">
                                    <input
                                        ref="image_link"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写跳转链接"
                                        value={this.state.image_link}
                                        onChange={(e)=>this._dealInputValue(e, 'image_link')}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">计划上架时间</label>
                                <div className="col-md-5">
                                    <input
                                        ref="s_time"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="请填写上架的链接"
                                        value={this.state.s_time.substr(0,10)}
                                        onChange={(e)=>this._dealInputValue(e, 's_time')}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">计划下架时间</label>
                                <div className="col-md-5">
                                    <input
                                        ref="e_time"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="请填写下架的链接"
                                        value={this.state.e_time.substr(0,10)}
                                        onChange={(e)=>this._dealInputValue(e, 'e_time')}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8">
                                    <button onClick={()=>this._dealWithClick()} className="btn btn-danger btn-sm pull-right">确认修改</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    // 处理文本内容的改变
    _dealInputValue(e,type){
        //通过事件对象拿到输入的内容
        // console.log(e.target.value);
        const val = e.target.value;
        if(type === 'image_title'){
            this.setState({
                image_title: val
            })
        }else if(type === 'image_link'){
            this.setState({
                image_link: val
            })
        }else if(type === 's_time'){
            this.setState({
                s_time: val
            })
        }else if(type === 'e_time'){
            this.setState({
                e_time: val
            })
        }
    }
    // 处理图片内容的展示
    _previewImg(imgRef){
        // 1. 根据ref获取用户上传的文件
        let file = this.refs[imgRef].files[0];
        console.log(file);
        // 2. 修改图片的信息
        let src = "";
        /**
         *
         * @type {FileReader}
         * FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，
         * 使用 File 或 Blob 对象指定要读取的文件或数据。
         */
        let reader = new FileReader();
        /**
         readAsDataURL 方法
         会读取指定的 Blob 或 File 对象。
         读取操作完成的时候，readyState 会变成已完成DONE，
         并触发 loadend 事件，同时 result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容。
         */
        if(file){
            reader.readAsDataURL(file);
        }else {
            src = '';
        }
        // 阅读器已经解析完毕
        reader.onloadend = ()=>{
            src = reader.result;
            // 判断
            if(imgRef === 'image_url'){
                this.setState({
                    image_url: src
                })
            }else {
                this.setState({
                    image_small_url: src
                })
            }

        }
    }
    // 点击修改按钮
    _dealWithClick(){
        // 1. 处理请求的数据
        const {id, image_title, image_link, s_time, e_time} = this.state;
        // 2. 取出图片的原始名称
        const {image_url, image_small_url} = this.props.location.state.sowing;
        // 3. 创建formData
        let formData = new FormData();
        formData.append('id', id);
        formData.append('image_title', image_title);
        formData.append('image_link', image_link);
        formData.append('s_time', s_time);
        formData.append('e_time', e_time);
        formData.append('image_url', this.refs.image_url.files[0] || image_url);
        formData.append('image_small_url', this.refs.image_small_url.files[0] || image_small_url);
        editSowingData(formData).then((res)=>{
            console.log(res);
            if(res.status_code === 200){
                this.props.history.push('/sowing/list');
            }
        }).catch((error)=>{
            console.log(error);
            alert('修改数据失败！');
        })
    }
}

export default SowingEdit;