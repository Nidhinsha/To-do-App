
import './App.css';
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]) // [] becoz we are storing data in an array
  const [toDo, setToDo] = useState('') // this one for storing the typing in the input field and for validation
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
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" className="input" placeholder='Enter Your Task' />
          {/* <input type="submit" className="add" value="Add Task" /> */}
          <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>

        </div>
        {/* in here we are using map to loop the result */}
        <div className="todos">
          {toDos.map((obj) => {

            return (<div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked, 'the value');
                  console.log(obj, 'obj');
                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" className='checkbox' name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=>{
                  setToDos(toDos.filter((obj2,index)=>{
                    if (obj2.id===obj.id) {
                      console.log(obj.id,'obj.id in dletete');
                      console.log(obj2.id,'obj2.id in dletete');
                      delete toDos[index]
                    }
                    console.log(obj2,'in deleteion retrn');
                    return obj2
                   
                  }))
                }}></i>
              </div>
            </div>)
          })}
          {toDos.map((obj) => {
            if (obj.status) {
              return (<h1>{obj.text}</h1>)
            }
            return null
          })}
        </div>
      </div>
    </div>
  );

}
// not finished
export default App;
