import React from 'react'

const Login = () => {
    return (
        <>
        <h2 className = "mb-4">Login</h2>
   <form>
       <div className = "form group mb-3">
       <input type="email" class="form-control" id="exampleInputEmail1"autoComplete="off" aria-describedby="emailHelp" placeholder="Email" required/>
       </div>
       <div className = "input group">
       <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" required/>
       </div>
       <button type="submit" class="btn btn-primary btn-block mt-3">Login</button><br></br>
       <div className  = "mt-3">
       <span className>Forget your Password?</span>
       </div>
   </form>
        </>
    )
}

export default Login;
