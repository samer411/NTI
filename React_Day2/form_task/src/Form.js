import "./Form.css";
import { useState } from "react";

export default function Form(){

    let [formData,setFormData]=useState({userName:"",password:"",gender:"male",language:""})
    function s(e){setFormData({...formData,userName:e.target.value})}
    return(
        <>
        <h1>This is Form Using React</h1>
        <form>
            <div>
                <label htmlFor="user">Username:</label>
                <input id="user" value={formData.userName} type="email"  onInput={(e) => s(e) }/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password"/>
            </div>
            <p>Gender</p>
            <div>
                <label htmlFor="male">Male:</label>
                <input id="male" value="male" name="gender" type="radio"/>
            </div>
            <div>
                <label htmlFor="female">Female:</label>
                <input id="female" value="female" name="gender" type="radio"/>
            </div>
            
            <div>
                <label htmlFor="language">Language:</label>
                <select id="language">
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">Javascript</option>
                </select>
            </div>
        </form>
        </>
        
    )
}
