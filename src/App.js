
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="container">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h3>Nidhinsha, This is your task to complete 🌝  </h3>
      </div>
        <div className="form">
          <input type="text" className="input" placeholder='Enter Your Task' />
          {/* <input type="submit" className="add" value="Add Task" /> */}
          <i className="fas fa-plus"></i>
         
        </div>
        <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" className='checkbox' name="" id="" />
            <p>Items will display here</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
       
        
      </div>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus"></i>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>Rect tutorial</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
