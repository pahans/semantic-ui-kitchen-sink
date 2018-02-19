import React from 'react';
import {render} from 'react-dom';
import './ballerina-theme/semantic.less';
import KitchenSink from './kitchen-sink';

class App extends React.Component{

    render(){
        return (<div style={{padding: 10}}>
            <KitchenSink />
        </div>);
    }
}

render(<App />, document.getElementById('app'));