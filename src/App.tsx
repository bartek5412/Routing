import './App.css';
import { useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Tutorial from './pages/Tutorial';
import Navbar from './components/Navbar';
interface State {

  counter: number
}
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'decrement': return {counter: state.counter > 0 ?state.counter - 1 : 0};
    case 'increment': return {counter: state.counter + 1};
    case 'reset': return {counter: 0};
    default: return state;
  }
}
const CouterWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0 });

  return (
    <div>
      <p> Count with reducer: {state.counter}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}
interface UsersProps {
  user: string,
  date?: any
}
interface CardProps {
  title?: string,
  children: React.ReactNode
}
const currentTime = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return today.toLocaleDateString(undefined, options);
};
const User: React.FC<UsersProps> = ({ user}) => {
  return (
    <div>
      <p>
        Hello, {user},
              </p>
      <p>Today is: {currentTime()}</p>
    </div>
  );
};

const Licznik: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Wartość jest mniejsza od zera")
    }
  }
  return (
    <div>
    <p>Current counter: {count}</p>
    <button onClick={() => setCount(count + 1)}>Add
    </button>
    <button onClick={removeCount}>Delete</button>
    </div>
  )
}
const Card: React.FC<CardProps> = ({title, children}) => {
  return (
    <div className="card" >
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
  );
}

const CardApp: React.FC = () => {
  return (
    <div>
    <Card title="Welcome">
      <p>This is a card with a title.</p>
    </Card>
    <Card>
      <p>This is a card without a title.</p>
    </Card>
  </div>
  )
}
function App() {
  return (
<div className="App">
      <Router>
        <header>
          <Navbar />
          </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tutorial" element={<Tutorial />} />
        </Routes>
      </Router>
      
      <User user="Jack" />
      <Licznik />
      <CardApp />
      <CouterWithReducer />
    </div>
  );
}

export default App;
