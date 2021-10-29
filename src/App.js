import logo from './logo.png';
import './App.css';
import Courses from './AllCourses/Courses';
import FakeData from './Data/Data';

function App() {
  const data = FakeData;
  return (
    <div className="App">
      <header className="App-header">
        <img className = "logo" src={logo} alt="logo" />
      </header>
      <div className = "course-list">
        {
          data.map(course => <Courses data = {course} key = {course.id}></Courses>)
        }
      </div>
    </div>
  );
}

export default App;
