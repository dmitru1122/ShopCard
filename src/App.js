import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./forAllApp.scss";
const AddIteam = lazy(() => import("./components/addIteams/index"));
const MainPage = lazy(() => import("./components/mainPage/index"));
const Catalog = lazy(() => import("./components/catalog/index"));

// import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
// import { addIteam } from "./redux/actions/addIteam";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Router>
          {/* <Header/> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={MainPage} />
            </Switch>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/catalog/forJeans" exact component={Catalog} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/catalog/forJacket" exact component={Catalog} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/catalog/forShirt" exact component={Catalog} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/catalog/forShoes" exact component={Catalog} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/catalog/forDresses" exact component={Catalog} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/catalog/forAll" exact component={Catalog} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/catalog/addIteam" exact component={AddIteam} />
          </Suspense>

          {/* <Footer /> */}
        </Router>
      </>
    );
  }
}

export default App;
