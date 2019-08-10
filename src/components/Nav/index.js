import React from 'react';
import Navbar from './Navbar';

class Nav extends React.PureComponent {
  state = {
    isMobileNavFolded: true,
  }

  onMobileNavToggle = () => {
    this.setState(prevState => ({
      isMobileNavFolded: !prevState.isMobileNavFolded,
    }))
  }

  onRouteChange = () => {
    this.setState({
      isMobileNavFolded: true,
    })
  }

  render() {
    return (
      <div>
        <Navbar
          isMobileNavFolded={this.state.isMobileNavFolded}
          onMobileNavToggle={this.onMobileNavToggle}
        />
      </div>
    )
  }
}

export default Nav
