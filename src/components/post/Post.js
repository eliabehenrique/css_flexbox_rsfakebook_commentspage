import React, { Component } from 'react';

import './Post.css';

import Comment from '../comment/Comment';

class Post extends Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <div className="containerPost">
        <div className="container">
          <div className="headerPost">
            <img src={this.props.post.author.avatar} alt="perfil" />
            <div className="nameStatus">
              <label>{this.props.post.author.name}</label>
              <span>{this.props.post.date}</span>
            </div>
          </div>

          <div className="commentPost">{this.props.post.content}</div>
        </div>

        <hr />

        {this.props.post.comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </div>
    );
  }
}

export default Post;
