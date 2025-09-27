import {react} from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

export default function TableComponent(){

    const handleQuerySubmit = (event) =>{
        
    }
    return (
    <div className="col-md-12">
    <table>
        <thead>
            <tr>
                <th>Sl. No.</th>
                <th> Ref. No.</th>
                <th> Employee Name</th>
                <th> Designation</th>
                <th>Leave Type</th>
                <th>Leave From</th>
                <th>Leave To</th>
            </tr>
        </thead>
        <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
        </tbody>

    </table>
    </div>


    )
}