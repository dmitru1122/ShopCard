import React from 'react';
import './forAllApp.scss';
import AddIteam from './components/addIteams/index';
import MainPage from './components/mainPage/index';
import Catalog from './components/catalog/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { addIteam } from './redux/actions/addIteam';


class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <>
        <Router>
          {/* <Header/> */}

                
                
                <Route path="/" exact component={MainPage} />
                    <Route path="/catalog/forJeans" exact component={Catalog}/>
                    <Route path="/catalog/forJacket" exact component={Catalog}/>
                    <Route path="/catalog/forShirt" exact component={Catalog}/>
                    <Route path="/catalog/forShoes" exact component={Catalog}/>
                    <Route path="/catalog/forDresses" exact component={Catalog} />
                    <Route path="/catalog/forAll" exact component={Catalog} />
                    <Route path="/catalog/addIteam" exact component={AddIteam}/>

            {/* <Footer /> */}
        </Router>
      </>
    );
  }
}

export default App;
