import './App.css';

import { useStore } from 'store/store';
import { Button } from 'remoteApp/Button';
import { observer } from 'mobx-react-lite';

function App() {
  const { counter } = useStore();
  const { count } = counter;

  return (
    <div className="card">
      <h1>
        MobX count is <span>{count}</span>
      </h1>

      <br />

      <Button />
    </div>
  );
}

export default observer(App);
