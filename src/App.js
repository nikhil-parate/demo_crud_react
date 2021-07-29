import Form from './form';
import React  from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import About  from './About';
import Home from './Home';
import Post from './posts';
import History from './history';
import {ContextStr} from './context';
import Prop from './Counter';

function App(props) {
  
  return (
    <> 
    <ContextStr.Consumer>
    {
      (context)=> {
        return(
          <>
          <p>{context.str}</p>
          </>
        )
      }
    }
    </ContextStr.Consumer>
    <BrowserRouter>
    {/* <a href="/">Home</a>
    <a href="/about">About</a> */}
      <History /> <br />
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/posts">Posts</Link>
     <Link to="/props">Prop</Link>
    <Switch>
    <Route  path="/about" >
    <About /> 
    </Route>
    <Route exact path="/" render={()=><Home />}/>
    <Route path="/posts">
      <Post />
      <Form />
    </Route>
    <Route path="/props">
      <Prop name="nikhil" age="25" />
    </Route>
    <Route path="*">
      404 Page
    </Route>
    </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
