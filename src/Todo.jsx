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
        console.log(msg)
    }
    const remove=(event)=>{
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
                    <button  onClick={addTask}> <AddCircleOutlinedIcon/> </button>
                </div>
                <div className="box2">
                    {msg.map((currentElement, index) => {
                        return (
                            <div className="box3">
                                <div className="task">{index + 1}. {currentElement}</div>
                                <button className="buttonRemove" name={currentElement} onClick={remove}> x </button>
                            </div>
                        );
                    })}


                </div>





            </div>





        </>
    );
}

export default Todo;