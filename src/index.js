import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// components
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={CreatePost} />
        <Route path="/blogs/:blog" component={ShowPost} />
        <Route path="/blogs" component={PostList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
document.getElementById('root'));
registerServiceWorker();
