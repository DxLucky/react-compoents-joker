import React from "react";
import {Route,HashRouter} from "react-router-dom";
import Layout from "../src/layout.jsx";
import Home from "../app/home/home.jsx";//主页
import SelectExample from "../app/select-example/selcect-example.jsx";//下拉框
import AlertExample from "../app/alert-example/alert-example.jsx";//alert框
import CheckboxExample from "../app/checkbox-example/checkbox-example.jsx";//多选框

// const SelectExample= (location , cb) => { //工时日历
//     require.ensure([],(require) =>{
//         cb(null,{main:require("../app/select-example/selcect-example.jsx"),sidebar:'hours'});
//     },'hours')
// };
// const AlertExample= (location , cb) => { //工时日历
//     require.ensure([],(require) =>{
//         cb(null,{main:require("../app/alert-example/alert-example.jsx"),sidebar:'hours'});
//     },'hours')
// };
// const CheckboxExample= (location , cb) => { //工时日历
//     require.ensure([],(require) =>{
//         cb(null,{main:require("../app/checkbox-example/checkbox-example.jsx"),sidebar:'hours'});
//     },'hours')
// };

class Routers extends React.Component{
    render(){
        return (
            <HashRouter>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/selcet" component={SelectExample}/>
                    <Route exact path="/alert" component={AlertExample}/>
                    <Route exact path="/checkbox" component={CheckboxExample}/>
                </Layout>
            </HashRouter>
        )
    }
}

export default Routers