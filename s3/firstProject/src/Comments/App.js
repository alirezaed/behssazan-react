import React from 'react';
import CommentBox from './CommentBox';

export default class App extends React.Component{


    render(){
        return <div style={{padding:'10px',border:'1px solid blue',margin:'auto'}}>
            {this.props.comments.map(comment=><CommentBox key={comment.id} {...comment} />)}
        </div>
    }
}