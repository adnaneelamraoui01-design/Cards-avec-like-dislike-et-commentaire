import './App.css';
import users from './component/javascript/User';
import UserCard from './component/javascript/UserCard';
import Counter from './component/javascript/Counter';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
        <Counter titre="Compteur 1" />
        <Counter titre="Compteur 2" />
        <Counter titre="Compteur 3" />
      </div>
    </div>
  );
}

export default App;