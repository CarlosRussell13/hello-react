import logo from './baseball.webp';
import './App.css';

const Players = [
  {id: 1, title: 'JD Martinez', isAvailable: true},
  {id: 2, title: 'Miguel Cabrera', isAvailable: true},
  {id: 3, title: 'Aaron Judge', isAvailable: true}
]

const Stats= {
  PlayerName:'Miguel Cabrera',
  PlayerNumber:'24',
  HR: '511',
  image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mlb.com%2Fplayer%2Fmiguel-cabrera-408234&psig=AOvVaw00qFhy-GUWMnEuzsVPjcyq&ust=1712074182608000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjkmr2zoYUDFQAAAAAdAAAAABAE',
  width:'130',
  height:'185'
};

function Statspot(){
  return(
    <div>
      <h2>{stats.PlayerName}({book.published})</h2>
      <p>Number {stats.PlayerNumber}</p>
      <img className='StatImage' src={stats.image} alt={stats.title + ' cover'} style={{width: stats.width, height: stats.height}}/>
    </div>
  );
}

function Playerdata(){
const listPlay = Players.map(Play =>
  <li key={Play.id} style={{color: Play.isAvailable ? 'white':'black'}}>
    {play.title}
  </li>
);
return(
  <ul>{listPlay}</ul>
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
        <statspot/>
        <playerdata/>
      </header>
    </div>
  );
}

export default App;
