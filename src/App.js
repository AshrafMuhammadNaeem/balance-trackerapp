
import './App.css';
import { Balance } from './Balance';
import { Header } from './Header';
import { IncomeExpense } from './IncomeExpense';


function App() {
  return (
    <div >

      <Header/>

      <div className="container">
      <Balance/>

      </div>

      <IncomeExpense/>
      
      
    </div>
  );
}

export default App;
