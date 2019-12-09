import React from 'react';
import Reflux from 'reflux';

import actions from '../reflux/actions';
import StatusStore from '../reflux/store';

class Test extends Reflux.Component {

    constructor(props) {

        super(props);
        this.state = {}; // our store will add its own state to the component's
        this.store = StatusStore; // <- just assign the store class itself

    }

    render () {

        const flag = this.state.flag; // <- flag is mixed in from the StatusStore
        return (
            <div>
                User is {flag}
                <div onClick={() => {
                    actions.statusUpdate(true);
                }}>set it on</div>
                <div onClick={() => {
                    actions.statusUpdate(false);
                }}>set it off</div>
            </div>
        )

    }

}

export default Test;
