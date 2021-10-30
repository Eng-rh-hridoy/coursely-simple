import logo from './logo.png';
import './App.css';
import Courses from './Components/AllCourses/Courses';
import FakeData from './Components/Data/Data';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

function App() {
  const data = FakeData;
  const [Carts, setCarts] = useState([]);
  const handelAddToCart  =(course)=>{
    const newCarts = [...Carts, course];
    setCarts(newCarts);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img className = "logo" src={logo} alt="logo" />
      </header>
      <div className = "course-cart-container">
        <div className = "course-list">
          {
            data.map(course => <Courses data = {course} key = {course.id} handelAddToCart = {handelAddToCart}></Courses>)
          }
        </div>
        <Cart data = {Carts}></Cart>
      </div>
    </div>
  );
}

export default App;
