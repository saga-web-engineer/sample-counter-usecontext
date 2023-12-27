import './App.css';
import { Counter } from './components/counter/Counter';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
