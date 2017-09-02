import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component{
  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" exact to="/">Home</NavLink>
          <NavLink activeClassName="selected" to="/create">Create Post</NavLink>
          <NavLink activeClassName="selected" to="/blogs">All Posts</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;
