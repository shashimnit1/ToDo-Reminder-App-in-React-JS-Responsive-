
import './App.css';
import Todo from './Todo.jsx';

function App() {
  const OuterBox = {
    width: "100vw",
    height: "100vh",
    padding: "5pt",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "center",
    flexWrap: "wrap",
    
   
  };

  return (
    <>
      <div style={OuterBox}>
        <Todo />
      </div>
    </>
  );
}

export default App;
