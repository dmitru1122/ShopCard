import React from 'react';
// import '../mainPage.scss';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visibility: false}
        this.handleClick = this.handleClick.bind(this);
        
    }
    handleClick (e) {
        this.setState({
            visibility: !this.state.visibility
        })
    }
    
    render() {
        return(
            <div className="menu" onClick={() => this.handleClick}>
                <span>Menu</span>
            </div>
        )
    }
}


export default Menu;