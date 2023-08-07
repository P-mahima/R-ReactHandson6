import React from 'react'
import { useContext } from 'react'
import Context from './Context'
import { useNavigate } from 'react-router-dom';


const Addnew = () => {
    const DataContext = useContext(Context)
    const nav = useNavigate();
    const newObj = {
        name: "",
        age: "",
        course: "",
        batch: ""
    }

    const handlechange = (e) => {
        newObj[e.target.name] = e.target.value;
    }

    const HandleSubmit = () => {
        DataContext.entries.push(newObj)
        nav(-1);
    }

    return (
        <>

            <div className='middle'>
                <div className='form'>
                    <label> Name:  <input name="name" onChange={handlechange} placeholder='Entre your name'></input>
                    </label>
                    <label> Age: <input name="age" onChange={handlechange} placeholder='Entre your age'  ></input>
                    </label>
                </div>

                <div className='form'>
                    <label>Course:  <input name="course" onChange={handlechange} placeholder='Entre your course' ></input>
                    </label>
                    <label>Batch:   <input name="batch" onChange={handlechange} placeholder='Entre your batch'></input>

                    </label>
                </div>
            </div>
            <div className='btn2'>
                <button onClick={HandleSubmit}>Submit</button>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={()=> nav('/Student')}>Cancel</button>
            </div>


        </>
    )
}

export default Addnew;