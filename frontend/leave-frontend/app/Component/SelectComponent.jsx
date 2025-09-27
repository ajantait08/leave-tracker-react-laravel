import {react} from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

export default function SelectComponent(){

    const handleQuerySubmit = (event) =>{
        
    }
    return (
    <div className="col-md-12" style={{display:"flex",margin:"10px 10px 10px 10px"}}>
    <div className="col-md-2">
        Select Date
    </div>

    <div className="col-md-2">
        <input type="date" />
    </div>

    <div className="col-md-3">
        Select Department
    </div>

    <div className="col-md-3">
        <select>
           <option value=""></option> 
        </select>
    </div>

    <div className="col-md-2">
        <button onClick={handleQuerySubmit()} style={{backgroundColor:"green",color:"white"}}
        >Search</button>
    </div>
    </div>
    )
}