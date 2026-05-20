import "./Form.css";
import { useState } from "react";

export default function Form(){

    let [formData,setFormData]=useState({userName:"",password:"",gender:"male",language:""})
    function handleUserName(e){setFormData({...formData,userName:e.target.value})}
    return(
        <>
        <h1>This is Form Using React</h1>
        <form>
            <div>
                <label htmlFor="user">Username:</label>
                <input id="user" value={formData.userName} type="email"  onChange={(e) => {setFormData({...formData,userName:e.target.value})} }/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" onChange={(e) => {setFormData({...formData,password:e.target.value})}}/>
            </div>
            <p>Gender</p>
            <div>
                <label htmlFor="male">Male:</label>
                <input id="male" value="male" name="gender" type="radio" onChange={(e) => {setFormData({...formData,gender:e.target.value})}}/>
            </div>
            <div>
                <label htmlFor="female">Female:</label>
                <input id="female" value="female" name="gender" type="radio" onChange={(e) => {setFormData({...formData,gender:e.target.value})}}/>
            </div>
            
            <div>
                <label htmlFor="language">Language:</label>
                <select id="language" defaultValue="html" onChange={(e)=>setFormData({...formData,language:e.target.value})}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">Javascript</option>
                </select>
            </div>
        </form>
        </>
        
    )
}
