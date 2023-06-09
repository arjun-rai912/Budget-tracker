import React,{useState,useContext} from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuid4} from "uuid";

const AddExpensefrom = () =>{
    const {dispatch} = useContext(AppContext);
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');
    const onSubmit = (event) =>{
        event.preventDefault();
        const expense ={
            id:uuid4(),
            name: name,
            cost:parseInt(cost),
        }
        dispatch({
            type:'ADD_EXPENSE',
            payload:expense,

        })
    };

return(
    <form onSubmit={onSubmit} >
<div className="row">
    <div className="col-sm">
<label htmlFor="label">Name</label>
<input  required="required" type="text" className="form-control"  id="name" value={name}
onChange={(event) => setName(event.target.value)} />
    </div>
    <div className="col-sm">
    <label htmlFor="label">Cost</label>
<input  required="required" type="text" className="form-control"  id="cost" value={cost}
onChange={(event) => setCost(event.target.value)} />
    </div>
    <div className="col-sm mt-auto">
        <button type="submit" className="btn btn-primary">save</button>
    </div>
</div>
    </form>
)
}

export default AddExpensefrom