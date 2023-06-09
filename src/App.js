import React from 'react' ;
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import SpentSoFar from './components/SpentSoFar';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import ExpenseList from './components/ExpenseList';
import AddExpensefrom from './components/AddExpenseForm';
import { Appprovider } from './context/AppContext';
const App =() =>
{
  return(
    <Appprovider>
<div className='container'>
      <h1 className='mt-3'>My budget planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
          </div>
          <div className='col-sm'>
          <Remaining/>
          </div>
          <div className='col-sm'>
          <SpentSoFar/>
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
<div className='col-sm'>
  <ExpenseList />
</div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='mt-3'>
        <div className='col-sm'>
          <AddExpensefrom />
        </div>
      </div>
    </div>
    </Appprovider>
    
  );
};


export default App;