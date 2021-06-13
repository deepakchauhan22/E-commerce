import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Posts from './components/Post';
import PostForm from './components/PostForm';
import { Provider} from 'react-redux';
import {Home}  from './components/Home';
import {Switch,Route, Redirect,BrowserRouter as Router} from 'react-router-dom';
import store from './store'
import { Header } from './components/Header';
import  ProductListing  from './components/ProductListing';
import  ProductDetail  from './components/ProductDetail';

function App() {
  return (
  
    <div className="App">
      <Router>
        <Header />
          <Switch> 
          <Route path="/" exact component={ProductListing} />
          <Route path = "/product/:productId" exact component={ProductDetail} />
          <Route>404 not found</Route>
          </Switch>
      </Router>
     
      {/* <PostForm />
      <hr />
     <Posts /> */}
    </div>
   
  );
}

export default App;
