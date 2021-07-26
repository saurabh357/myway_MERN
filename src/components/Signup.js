import React,{useState} from 'react'

const Signup = () => {

    const   [user,setUser] = useState(
        {
            name:"",email:"",phone:"",password:"",cpassword:""
        }
    );
    let name, value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]:value});
    }
    return (
        <>
    <h2 className = "mb-3">Signup</h2>
        <form>
  <div className="form-group mt-3">
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" autoComplete = "off"
        value = {user.name}
        onChange = {handleInputs}
    placeholder="Full Name" required/>
    </div>
    <div className="form-group mt-3">
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" autoComplete = "off"
        value = {user.email}
        onChange = {handleInputs}
    placeholder="Email" required/>
    </div>
    <div className="form-group mt-3">
    <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp" autoComplete = "off"
        value = {user.phone}
        onChange = {handleInputs}
    placeholder="Phone Number" required/>
    </div>
    <div className="form-group mt-3">
    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" autoComplete = "off"
        value = {user.password}
        onChange = {handleInputs}
    placeholder="Password" required/>
    </div>
    <div className="form-group mt-3">
    <input type="password" className="form-control" id="cpassword" aria-describedby="emailHelp" autoComplete = "off"
        value = {user.cpassword}
        onChange = {handleInputs}
    placeholder="Confirm Password" required/>
    </div>
  <div className="form-check mt-3">
    <input type="checkbox" className="form-check-input" id="Check"/>
    <label className="form-check-label" htmlFor="exampleCheck1">By registering, you agree the terms and conditions</label>
  </div>
  <button type="submit" className="btn btn-primary btn-block mt-3">Register as Candidate</button>
</form>
        </>
    )
}

export default Signup;
