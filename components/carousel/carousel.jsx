import React from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./carousel.scss";

class Carousel extends React.Component{
    static propTypes={
        carouselArr: PropTypes.array,
        intervalTime:PropTypes.number
    };
    static defaultProps={
        carouselArr: []
    };
    constructor(props){
        super(props);
        this.state={
            imgIndex:0,
        };
        this.autoPaly=this.autoPaly.bind(this);
        this.autoRoll=undefined;
    }
    componentWillMount(){
        this.autoPaly()
    }
    autoPaly(){
        let {carouselArr,intervalTime}=this.props;
        return (
            this.autoRoll=setInterval(()=>{
                let {imgIndex}=this.state,
                    index= imgIndex===(carouselArr.length-1) ? 0: ++imgIndex;
                this.setState({imgIndex:index})
            },intervalTime)
        )
    }
	componentWillUnmount(){
       this.setState = ()=> null;
    }
    render(){
        let {imgIndex}=this.state,
            {carouselArr}=this.props,
            cureentImg=carouselArr[imgIndex];
        return(
            <div className="carouselBox"
                 onMouseOver={()=>{clearInterval(this.autoRoll)}}
                 onMouseOut={this.autoPaly}
            >
                <div className="imgBox">
                    <ReactCSSTransitionGroup
                        transitionName="carousel"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={200}>
                        <img src={require(`${cureentImg.url}`)} key={cureentImg.url}/>
                    </ReactCSSTransitionGroup>
                </div>
                <div className="textBox">
                    <p>{cureentImg.text}</p>
                    <div>
                        {
                            carouselArr.map((item,i)=>{
                                return <i key={i}
                                           className={classnames("circle",{active:i===imgIndex})}
                                          onClick={()=>{this.setState({imgIndex:i})}}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel
