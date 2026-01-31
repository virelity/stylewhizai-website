import './App.css';
import HomePage from './pages/HomePage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Toaster />
    </div>
  );
}

export default App;