import Reflux from 'reflux';
import actions from './actions';

class StatusStore extends Reflux.Store {

    constructor () {

        super();
        this.state = {
            flag: 'OFFLINE'
        }; // <- set store's default state much like in React
        this.listenables = actions;

    }

    onStatusUpdate (status) {

        console.log('status: ', status);

        const flag = status ? 'ONLINE' : 'OFFLINE';
        this.setState({
            flag
        });

    }
}

export default StatusStore;
