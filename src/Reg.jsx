import { useState } from 'react'
import './Reg.css'

export const Reg = () => {

    const [user, setUser] = useState({
        name: 'Ram Kumar',
        age: 25,
        gender: 'male',
        isMarried: true,
       country:"India",
       bio:""
    });

    function changeHandler(e){
        const name =e.target.name;
        const value =e.target.type === "checkbox" ? e.target.checked :e.target.value ;
        setUser ({...user,[name]:value});
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Married Status</td>
                        <td>{user.isMarried ? 'Married' : 'Not Married'}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>
                    <tr>
                        <td>Bio</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>

            <form>
                <input type="text" placeholder='FullName' value={user.name} onChange={changeHandler} name='name'  />
                <input type="number" placeholder='Age' value={user.age} onChange={changeHandler} name='age'  />

                <div className="gender">
                    <label htmlFor="male"><input type="radio" id="male" onChange={changeHandler} checked={user.gender=='Male'} name='gender' value="Male" />Male</label>
                    <label htmlFor="female"><input type="radio" id="female" onChange={changeHandler} checked={user.gender=='Female'} name='gender' value="Female" />Female</label>
                </div>
                <label htmlFor="isMarried">
                    <input type="checkbox" onChange={changeHandler} id="isMarried"  checked={user.isMarried} name="isMarried"/>
                    IsMarried
                </label>
                <div className="select-div">
                    <label htmlFor="country">Select Country:</label>
                    <select name="country" id="country" value={user.country} onChange={changeHandler}>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                    </select>
                </div>
                <textarea name="bio" id="bio" cols="30" rows="5" value={user.bio} placeholder='Write about You' onChange={changeHandler}></textarea>
            </form>


        </div>
    )
}
