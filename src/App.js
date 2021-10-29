import logo from './logo.png';
import './App.css';
import Courses from './AllCourses/Courses';
import FakeData from './Data/Data';

function App() {
  const data = FakeData;
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img className = "logo" src={logo} alt="logo" />
      </header>
      <div>
        <h2>this is title</h2>
      </div>
      <Courses></Courses>
    </div>
  );
}

export default App;
