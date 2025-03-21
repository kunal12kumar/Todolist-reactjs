import './App.css';
import 'react-notifications/lib/notifications.css';
import { Faq } from './faq'
import './faq.css'
import './todolist.css'
import {Todolist} from './todolist'

function App() {
  return (
    <div className="App bg-gradient-to-t from-teal-500 to-blue-600 bg-cover">
      <div className='max-w-[1000px] mx-auto md:h-[80px] h-auto mb-20 bg-teal-300 rounded-xl shadow-2xl'>
        <h1 className='p-4 font-serif font-bold text-4xl'>TODOLIST(ADD WHAT YOU WANT)</h1> 
      </div>
      <div className='max-w-[1000px] mx-auto h-auto p-8 bg-teal-300 rounded-xl shadow-2xl m-6'>
        <Todolist></Todolist>
      </div>
      <div  className='max-w-[1000px] mx-auto  h-auto md:h-[80px] mb-20 bg-teal-300 rounded-xl shadow-2xl'>
      <h1 className='p-4 font-serif font-bold text-4xl'>FREQUENTLY ASKED QUESTION</h1>
      </div>
      <div className='max-w-[1000px] mx-auto h-auto p-8 bg-teal-300 rounded-xl shadow-2xl'>
        <Faq></Faq>
      </div>

    </div>
  );
}

export default App;
