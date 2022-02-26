import { createContext } from 'react';
import './App.css';
import ChildA from './ChildA';

const fname = createContext()
const lname = createContext()

function App() {
  return (
    <fname.Provider value={"Chaitali"}>
      <lname.Provider value={"Sakharkar"}>
        <div className="App">
          <h3>App Component</h3>
          <ChildA />
        </div>
      </lname.Provider>
    </fname.Provider>
  );
}

export default App;
export { fname, lname };
