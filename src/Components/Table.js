import React, { useContext } from "react";
import ContextD from "./Context";
import { useNavigate , Link } from "react-router-dom";
import Navbar from "../navBar";

const Table = () => {
    const DContext = useContext(ContextD);
    const nav = useNavigate();
    return (
        <>
        <Navbar/>
        <br/>
            <br/>
            <div className="btn">
            <h1>Student Details</h1>
            <button className="student" onClick={() => { nav('/addnew') }}>Add Student</button>
            </div>
            <br/>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>

{DContext.entries.map((item,index)=>(
    <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.course}</td>
        <td>{item.batch}</td>
        <td>
          
            <Link to ='/editStudent' state={{data:index}}>Edit</Link>
        </td>
    </tr>
))
}
                </tbody>
            </table>

        </>
    )
}

export default Table;