import React, { Component } from 'react';

import HelloWorld from './HelloWorld';
import store from './store';
import ButtonGroup from './ButtonGroup';

class App extends Component {
    render() {
        return (
            <div>
                <HelloWorld tech={store.getState().tech} />
                <ButtonGroup technologies={store.getState().technologies} />
            </div>
        );
    }
}

export default App;
