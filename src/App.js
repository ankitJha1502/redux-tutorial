import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import Store from './Redux/Store';
import CakeContainerHooks from './Components/CakeContainerHooks';
import IceCreamContainerHook from './Components/IceCreamContainerHook';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      {/* <CakeContainer /> */}
      {/* <CakeContainerHooks />
      <IceCreamContainerHook/> */}
      {/* <ItemContainer cake />
      <ItemContainer /> */}
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
