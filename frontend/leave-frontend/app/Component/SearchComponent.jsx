//use Client;

import {react} from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
//import {useState} from 'react';

export default function SearchComponent(){

    // const [formdata,setformdata] = useState({
    //     "searchInput": ""
    // });
    // const handleInputChange = (event) => (
    //     [{...formdata,{"event.target.name" : "event.target.value"}}]
    // )
    return (
    <div className="col-md-12">
    <div className="col-md-4">
    </div>

    <div className="col-md-4">
    </div>

    <div className="col-md-2">
        Search
    </div>

    <div className="col-md-2">
       <input type="text" /> 
    </div>
    </div>
    )
}