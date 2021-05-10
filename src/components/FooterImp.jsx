import React from 'react';


class FooterImp extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
        return (
          <div className="footer">
            <p>This is some content in sticky footer</p>
          </div>
        )
  }
}

export default FooterImp;