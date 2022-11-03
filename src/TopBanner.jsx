import React from 'react';
import ReactDOM from 'react-dom';

class TopBanner extends React.Component {
render() {
    return <div className="app-title-text top-banner-card">Nutri App</div>;
         }
};

ReactDOM.render(<TopBanner />, document.getElementByID('app'));

export {TopBanner};