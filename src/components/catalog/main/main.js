import React, {useState} from 'react';
import Filter from './filter/allFilterConteiner';
import Content from './content/index';

import {FilterMobile} from './filterMobile';



import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Main (props) {
    const [filterVisibility, setFilterVisibility] = useState(false);
    const resultClass = props.styleClass + ' ' + 'main';
     
    let content = filterVisibility? 'show': 'hidd';
    let filter = !filterVisibility? 'show': 'hidd';
    return (
            <>
                <Header />
                <BrowserRouter >
                <main className={resultClass}>
                        <FilterMobile className="for-mobile" handle={() => setFilterVisibility(!filterVisibility)} />

                        <div className="mobile-design">
                            <div className={filter}>   
                                <Route path="/catalog" className={filterVisibility}  component={Filter}/> 
                            </div>
                            <div className={content}>
                                <Content  path="/catalog" component={Content}/>
                            </div>
                        </div>
                        <div className="tablet-design"> 
                            <Route path="/catalog" component={Filter}/>
                            <Content  path="/catalog" component={Content}/>
                        </div> 
                            
                </main>
                </BrowserRouter>
                <Footer />
            </>
    )
}

export default Main;