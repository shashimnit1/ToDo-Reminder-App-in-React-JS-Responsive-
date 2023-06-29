
import './App.css';
import Todo from './Todo.jsx';

function App() {
  const OuterBox = {
    width: "100vw",
    height: "100vh",
    padding: "5pt",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
