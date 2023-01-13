import logo from './logo.svg';
import {useState, useRef} from 'react';
import './App.css';

import Pencils from './pencils.png';

const initialTodo = [
  'Insira suas tarefas aqui',
  'Comece apagando essas tarefas'
]


//---console.log simplificado----
function log(arg1='---', arg2='')
{
  console.log(arg1,arg2);
}



/*
==========================================
MAIN
==========================================
*/
function App() {


  const mystyle = {
    left:'0px',
   }; 

   const mystyleMove = {
    left:'3px',
   }; 


  const [newTask,setNewTask] = useState('');
  const [todo,setTodo] = useState(initialTodo);
  const todoList = useRef(initialTodo);

  const [pLapis, setPlapis] = useState(mystyle);



  const inputRef = useRef(null);

  //esse state é usado somente para forçar um re-render
  const [render, setRender] = useState(false);



  const [classUp, setClasslUp] = useState('upside_up');
 
 /*

  const [delay, setDelay] = useState(false);
  const [renewDelay, setrenewDelay] = useState(false);

  window.addEventListener('keydown', (event) => {
    if(event.key == "Backspace"){
      upDownPencil();
    }
  });

  window.addEventListener('keyup', (event) => {
    if(event.key == "Backspace"){
      upUpPencil();
    }
  });

  const upDownPencil = ()=>{
    if(classUp == 'upside_down') return;
    else setClasslUp('upside_down');
  }

  const upUpPencil = ()=>{
    delayIt(function() {
     // if(setDelay) return; ///--------
      setClasslUp('upside_up');
    });
  }

  const delayIt = (func)=>
  {
    setTimeout(function() {
      func();
    }, 2000);
  }

*/
  const movePencil = ()=>{

    log('move', pLapis.left);
    log('stl',mystyle);
    if (pLapis.left == '0px') 
      setPlapis(mystyleMove);
    else setPlapis(mystyle);
      
  }

  const addTask = ()=>{
   
    if (!newTask) return;   
    todoList.current.push(newTask);
    setNewTask('');

    //abaixo: somente para causar um re-render
    setRender(Math.random());
  }


  const deleteTodo = (index)=>{
    //log('index',index);

    todoList.current.splice(index,1);
    log('todo',todoList.current);
  
    //abaixo: somente para causar um re-render
    setRender(Math.random());
  }
 
  //--------------------------------------------+++++++++++++++++++++++
  

  return (
    <>

    {/*

    Formulário  - Nova Tarefa
    ============================*/}
  <div className="todo_container">
    <h1>Lembrar de fazer</h1>


    <div className='input_box'>
        <div className='wrap_input'>
          
        <label>
        Nova tarefa:
          <input type="text"
          size='35'
          value={newTask}
          onChange={(e) => {
            if(e.target.value.length < 35){
              setNewTask(e.target.value);
              movePencil(); 
            }
            
          }}
          ></input>
        </label>

          <div className='wrap_div_btn'>
            <div className="div_btn add_btn no_select" onClick={addTask}> +</div>
          </div>
        </div>

        <div className='wrap_logo'> 
          <img src={Pencils} alt="lapis"  ref={inputRef} className={classUp} style={pLapis}/>
        </div>
      </div>
      {/**
      <div className='wrap_div_btn'>
        <div className="div_btn"> +</div>
      </div>
       */}
      
    <hr/>

{/*

Lista - toDos
============================*/}
    <div className="tarefas_wrap light_shadow">
      <div className='wrap_list'>
          {(!todo.length) && <h2>Sem tarefas Hoje</h2>}
        { todo.map((el,index)=>{

          return (
          <div className="item_tarefa light_shadow" key={index}>
            <div>{index+1} - {el}</div>
            <div className="delete_btn no_select" onClick={ ()=>{deleteTodo(index)} }>X</div>

            </div>
          );
        })}

    </div>
    { 
    ///feature to be implemented in the future
    //todo.length && <div className='delete_list'>Apagar<br/>Lista</div>
    
    }
    
    </div> 

    </div>
    </>
  );
}


{/*===========================*/}
export default App;
