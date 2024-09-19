import { useState } from "react";
function Calculator(){
    const [num1,setnum1]=useState("");
    const [num2,setnum2]=useState("");
    const [num3,setnum3]=useState("");
    


    function handlenum1(evt){
        setnum1(evt.target.value);
    }
    function handlenum2(evt){
        setnum2(evt.target.value);
    }
    function handleAdd(){
        setnum3(parseFloat(num1)+parseFloat(num2));
    }
    function handleSub(evt){
        setnum3(parseFloat(num1)-parseFloat(num2));
    }
    function handleMul(evt){
        setnum3(parseFloat(num1)*parseFloat(num2));
    }
    function handleDiv(evt){
        setnum3(parseFloat(num1)/parseFloat(num2));
    }
    function handleClear(evt){
            setnum3( );
    }

    return(<div>
        <div class="ccontainer">
        <h1 class="title">Basic Calculator</h1>
        <div class="icontainer">
        <label>Number1: </label>
        <input type="number"  value={num1} onChange={handlenum1} className="field"></input>
        </div>
        <div class="icontainer" >
        <label>Number2: </label>
        <input type="number" value={num2} onChange={handlenum2} className="field"></input>
        </div>
        <br></br>
        <div class="button-container">
    <button onClick={handleAdd} className="button">Add</button>
    <button onClick={handleSub} className="button">Sub</button>
    <button onClick={handleMul} className="button">Mul</button>
    <button onClick={handleDiv} className="button">Div</button>
    <button onClick={handleClear} className="button">Clear</button>
</div>

        <h1>Result:{num3}</h1>
        </div>
    </div>)
 }
  export default Calculator