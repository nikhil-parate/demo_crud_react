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
          <p style={{color:"white", textAlign:"center", background:"#40404F", fontSize: "50px"}}>{context.str}</p>
          </>
        )
      }
    }
    </ContextStr.Consumer>
    <BrowserRouter >
    {/* <a href="/">Home</a>
    <a href="/about">About</a> */}
      <History /> <br />
     <Link style={{fontSize:"20px", paddingRight:"2px"}} to="/">Home</Link>
     <Link style={{fontSize:"20px", paddingRight:"2px"}} to="/about">About</Link>
     <Link style={{fontSize:"20px", paddingRight:"2px"}} to="/posts">Posts</Link>
     <Link  style={{fontSize:"20px", paddingRight:"2px"}}to="/props">Props</Link>
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
      <Prop name="nikhil" age="25" description="This is an example to present props working"/>
    </Route>
    </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
