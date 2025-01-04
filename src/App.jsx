import { useState } from "react";


function App() {
  const[passwordLength,setpasswordLength]=useState(7);
  const[Password,setPassword]=useState('');
  const[useUppercase,setuseUppercase]=useState(true);
  const[useLowercase,setuseLowercase]=useState(true);
  const[useNumber,setuseNumber]=useState(true);
  const[useSymbol,setuseSymbol]=useState(true);
  const generatePassword = () => {
		let charset = "";
		let newPassword = "";
    

		if (useSymbol) charset += "!@#$%^&*()";
		if (useNumber) charset += "0123456789";
		if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
		if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		for (let i = 0; i < passwordLength; i++) {
			newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
		}

		setPassword(newPassword);
	};
  // console.log("useNumber",useNumber)
  // console.log("useUppercase",useUppercase)
  // console.log("useLowercase",useLowercase)
  // console.log("useSymbol",useSymbol)
  return (

    <>
    <div className="container ">

      <fieldset className="border border-3 p-2 row bg-light rounded mt-5 col-lg-9 col-xs-12">
        <h3>Create Strong password</h3>
        <div className="div-input">
          <label htmlFor="creat">Password passwordLength :</label> <input type="number" id="creat" value={passwordLength} onChange={(e)=>{setpasswordLength(e.target.value);console.log(e.target.value)}}/>
        </div>
        <div className="div-input">
        <input type="checkbox" id="num" checked={useNumber} name="useNumber" onChange={()=>{ useNumber?setuseNumber(false):setuseNumber(true)}}/><label htmlFor="num">include useNumber</label>
        </div>
        <div className="div-input">
        <input type="checkbox" id="useUppercase"name="useUppercase" checked={useUppercase}  onChange={()=>{ useUppercase?setuseUppercase(false):setuseUppercase(true)}}/><label htmlFor="useUppercase">include useUppercase</label>
        </div>
        <div className="div-input">
        <input type="checkbox" id="useLowercase" name="useLowercase" checked={useLowercase} onChange={()=>{useLowercase?setuseLowercase(false):setuseLowercase(true)}}/><label htmlFor="useLowercase">include useLowercase</label>
        </div>
        <div className="div-input">
        <input type="checkbox" id="useSymbol" name="useSymbol" onChange={()=>{useSymbol?setuseSymbol(false):setuseSymbol(true)}} checked={useSymbol} /><label htmlFor="useSymbol">include useSymbol</label>
        </div>
        <div className="div-input-btn bg-secondary-subtle col-12">
        <button class="button-81 ms-3" role="button"onClick={generatePassword}><span class="text">Generate password</span></button><input value={Password} className="ms-3" type="text" />
        <button class="button-89 ms-3" role="button" onClick={()=>{console.log("copy");navigator.clipboard.writeText(Password)}}>Copy clipboard</button>
        
        </div>
      </fieldset>
    </div>

    </>
  )
}

export default App;
