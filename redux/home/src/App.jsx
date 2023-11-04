import './App.css';

import { useStore } from 'store/store';
import { Button } from 'remoteApp/Button';

function App() {
  const { count } = useStore();

  return (
    <div className="card">
      <h1>
        Count is <span>{count}</span>
      </h1>

      <br />

      <Button />
    </div>
  );
}

export default App;
