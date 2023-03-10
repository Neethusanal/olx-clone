import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './Components/Firebase/Config'
import {FirebaseContext} from './store/FirebaseContext.js'
import Context from './store/FirebaseContext.js'

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
<Context>
    <App/>
</Context>   
</FirebaseContext.Provider>,
document.getElementById('root')

)






