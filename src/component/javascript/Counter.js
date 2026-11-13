import { useState } from 'react';

function Counter({ titre }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{titre}</h5>
        <p className="card-text">Compteur : {count}</p>
        <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>+</button>
        <button className="btn btn-danger me-2" onClick={() => setCount(count - 1)}>-</button>
        <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;