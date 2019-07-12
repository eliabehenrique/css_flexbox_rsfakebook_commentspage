import React, { Component } from 'react';

import './Comment.css';

export default class Comment extends Component {
  render() {
    return (
      <div className="commentAuthor">
        <img src={this.props.comment.author.avatar} alt="Perfil" />
        <div className="comment">
          <strong>{this.props.comment.author.name}</strong>
          <span>{` ${this.props.comment.content}`}</span>
        </div>
      </div>
    );
  }
}
