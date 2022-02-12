import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login-form';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;
