import logo from './baseball.png';
import './App.css';

const Stats= {
  PlayerName:'Miguel Cabrera',
  PlayerNumber:'24',
  HR: '511',
  image:'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/408234/headshot/67/current',
  height:'185'
};

const Players = [
  {ID: 1, name: 'JD Martinez', theme:'react', isAvailable: true},
  {ID: 2, name: 'Miguel Cabrera', theme:'react', isAvailable: true},
  {ID: 3, name: 'Aaron Judge', theme:'react', isAvailable: false}
]

function Statspot(){
  return(
    <div>
      <h2>{Stats.PlayerName}</h2>
      <p>{Stats.PlayerNumber}</p>
      <img className='StatImage' src={Stats.image} alt={Stats.name + ' cover'} style={{width: Stats.width, height: Stats.height}}/>
    </div>
  );
}

function Playersdata(){
const listPlay = Players.map(Play =>
  <li key={Players.id} style={{color: Players.isAvailable ? 'black':'white'}}>
    {Players.name}
  </li>
);
return(
  <ul>{listPlay}</ul>
);
}

function BOOM (){
  return(
    <>
      <h3>Click me for a HOMERUN!</h3>
      <button>BOOM</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey Mr. Siarto, Thanks for reviewing my work.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Have a good day.
        </a>
        <Statspot/>
        <Playersdata/>
        <BOOM/>
      </header>
    </div>
  );
}

export default App;

