import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './store/actions/index';
import './App.scss';

import Headline from './components/headline/headline';
import Header from './components/header/header';
import SharedButton from './components/button/button';
import ListItem from './components/list-item/listItem';

const tempArr = [
  {
    fName: "Joe",
    age: 22,
    onlineStatus: true
  }
];

const initialState = {
  hideBtn: false,
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }
  

  fetch() {
    this.props.fetchPosts();
    this.updateState();
  }

  updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsValue(number) {
    return number + 1;
  }
  
  render() {
    const { hideBtn } = this.state;
    const { posts } = this.props;

    const post = posts.map((p, index) => {
      return (
        <ListItem key={index} title={p.title} desc={p.body} />
      )
    })

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          
          <Headline header="Post" desc="Click the button to render" tempArr={tempArr}/>
          {!hideBtn && 
            <SharedButton {...configButton} />
          }
          {posts.length > 0 && 
          <div>
            {post}
          </div>}
        </section>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
