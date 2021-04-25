import React from 'react';
import Avatar from './Avatar';
import Point from './Point_F';

export default class CommentBox extends React.Component{



    render(){
        const {text,point,date,imageurl,username} = this.props;
        return <div style={{border:'1px solid orange',margin:'4px',padding:'8px', display:'flex',flexFlow:'column'}} >
            <div style={{display:'flex',flexFlow:'row'}}>
                <Avatar imageurl={imageurl} username={username} /> 
                <Point point={point} />
            </div>
            <div style={{textAlign:'justify',margin:'4px'}}>
                {text}
            </div>
            <div style={{marginLeft:'auto',fontSize:'0.9em'}}>
                {date}
            </div>
        </div>
    }
}