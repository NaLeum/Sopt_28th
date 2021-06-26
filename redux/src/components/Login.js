import { useState } from "react";
import { withRouter } from "react-router";
import "../App.css";
import { loginAPI } from "../lib/api";

const Login = ({history}) => {

    const[formData,setFormData] = useState({
        "email":"",
        "password":""
    });
    const onInputChange = (e) => {
        const {value,name}=e.currentTarget;
        setFormData({...formData,[name]:value});     
        console.log(formData)
    }
    const onSubmitClick = async(e) => {
        e.preventDefault();
        try {
            const result = await loginAPI(formData);
            // console.log(result)

            if(result.loginSuccess){
                window.localStorage.setItem('token',result.token)
                // const result2= await getUserAPI(result.token);
                // console.log(result2);

                history.push("/success");
            }         
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="App">
          <h1>로그인</h1>
          <form onSubmit={onSubmitClick}>
            <input type="email" name="email" placeholder="이메일" onChange={onInputChange} value={formData.email}required/>
            <input type="password" name="password" placeholder="비밀번호" onChange={onInputChange} value={formData.password} required />
            <button type="submit" onSubmit={onSubmitClick} >로그인</button>
          </form>
        </div>
      );
}

export default withRouter(Login);