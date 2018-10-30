import React, { Component } from 'react';

import store from './store';
import {setTechnology} from './actions';

class ButtonGroup extends Component {
    dispatchBtnAction = (e) => {
        const tech = e.target.dataset.tech;
        store.dispatch(setTechnology(tech));
    };

    render () {
        return (
            <div>
                {this.props.technologies.map((tech, i) => (
                    <button
                        data-tech={tech}
                        key={`btn-${i}`}
                        className="hello-btn"
                        onClick={this.dispatchBtnAction}
                    >
                        {tech}
                    </button>
                ))}
            </div>
        );
    }
}

export default ButtonGroup;