import './App.css';
import list from'./8810413.jpg';
import girl from './8625305.jpg'
import { DailyPlanner } from './DailyPlanner';

function App() {
  return (
    <div className='app'>
    <div className='container'>
    <img src={list} alt='list' width="200px" />
    </div>
    <div className='container'>
     <h1>To Do List</h1>
    </div>
    <DailyPlanner />
    <div className='container'>
    <img src={girl} alt='list' width="200px" />
    </div>
    </div>
  );
}

export default App;
