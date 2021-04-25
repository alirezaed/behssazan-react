import React from 'react';

export default class Point extends React.Component{

    constructor(props){
        super(props);

        this.state={
            point:this.props.point
        }

        this.handleClickLike = this.handleClickLike.bind(this);
        this.handleClickDisLike = this.handleClickDisLike.bind(this);
        console.log('constructor');
    }

    handleClickLike(){
        if (this.state.point  - this.props.point <1){
            this.setState(currentState=>{
                return {
                    point:currentState.point + 1
                }
            })
        }else{
            alert('You Already Liked it.')
        }
    }

    handleClickDisLike(){
        if (this.props.point - this.state.point  <1){
            this.setState(currentState=>{
                return {
                    point:currentState.point - 1
                }
            })
        }else{
            alert('You Already DisLiked it.')
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        this.setState({
            name:'ali'
        });
        console.log('componentDidUpdate');
    }

    

    render(){
        console.log('render');
        const {point} = this.state;
        return <div style={{marginLeft:'auto'}}>
            <span onClick={this.handleClickLike}>👍</span>
            {point}
            <span onClick={this.handleClickDisLike}>👎</span>
        </div>
    }
}