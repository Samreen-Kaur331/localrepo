import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const[btn ,setbtn]=useState(true)
const[todos ,setTodos]=useState([

  {title:"heuy0",
  des:"i am good person"},  

  {title:"heuy1",
  des:"i am good person"}, 

   {title:"heuy2",
  des:"i am good person"}
  ])

  const Todo = ({todo})=>{
    return(<>

      <div className='  todo'>{todo.title} </div>
      <div className=' todo'>{todo.des} </div>
      </>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
           {/* { btn?<button>i will show on when every second</button> :""} */}
           {btn &&<button>true</button>
           }
           <button on onClick={()=>setbtn(!btn)}>count is{count}</button>
           {todos.map(todo=>{
            return<Todo key={todo.title} todo={todo}/>
           })}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 
  );
}

export default App;
