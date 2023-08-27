import React, { useState } from "react";
import "./Todo.css"
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Todo = () => {
    const [task1, setTask1] = useState("");
    const [inText, setInText] = useState("");

    const [msg,setmsg] = useState([])

    const update = (event) => {
        setInText(event.target.value)
        
    }
    
    function clearInput(){
        var getValue= document.getElementById("input");
          if (getValue.value !="") {
              getValue.value = "";
          }
   }

    const addTask = () => {
        setmsg([...msg, inText])
        clearInput()     
        
    }
    const remove=(event)=>{
        console.log(event.target.name)
          alert("Do You want to delete following:\n"+event.target.name)
          const tempList=msg.filter((x)=>x!==event.target.name);
          setmsg(tempList);
        
    }
    
    return (
        <>
            <div className="box">

                <div className="bar"> To-Do List</div>
                <div className="box1">
                    <input type="text" id="input" placeholder="Enter a Task" onChange={update} />
                    <button class="btn button1" onClick={addTask}><i class="fa fa-plus"></i></button>
                    {/* <button  onClick={addTask}> <AddCircleOutlinedIcon className="Add" /> </button> */}
                </div>
                <div className="box2">
                    {msg.map((currentElement, index) => {
                        return (
                            <div className="box3">
                                <div className="task">{index + 1}. {currentElement}</div>
                                {/* <button className="buttonRemove" name={currentElement} onClick={remove}>x</button> */}
                                <button className="button2" name={currentElement} onClick={remove}>X</button>
                            </div>
                        );
                    })}


                </div>





            </div>





        </>
    );
}

export default Todo;