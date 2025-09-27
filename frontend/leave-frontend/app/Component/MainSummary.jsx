import {react} from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import SummaryTable from './SummaryTable';
import SummaryTable2 from './SummaryTable2';

export default function MainSummary(){

    const handleQuerySubmit = (event) =>{
        
    }
    return (
    <div className="col-md-12" style={{display:"flex",padding:"5px 5px 5px 5px",margin:"5px 5px 5px 5px"}}>
    <SummaryTable />
    <SummaryTable2 />
    </div>
    )
}