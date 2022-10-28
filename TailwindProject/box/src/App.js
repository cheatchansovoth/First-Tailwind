import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container min-h-screen bg-gray-400 min-w-full flex justify-center items-center">
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center '>
          <div className='h-[100px] bg-green-400 flex justify-center items-center col-span-2 rounded-xl'>01</div>
          <div className='w-[100px] h-[100px] bg-green-100 flex justify-center items-center rounded-xl'>02</div>
          <div className='w-[100px] h-[100px] bg-green-200 flex justify-center items-center rounded-xl'>03</div>
          <div className='h-[100px] bg-green-400 flex justify-center items-center col-span-4 rounded-xl'>04</div>
          <div className='w-[100px] h-[100px] bg-green-500 flex justify-center items-center rounded-xl'>05</div>
          <div className=' h-[100px] bg-green-400 flex justify-center items-center col-span-2 rounded-xl'>06</div>
          <div className='w-[100px] h-[100px] bg-green-600 flex justify-center items-center rounded-xl'>07</div>
          <div className='w-[100px] h-[100px] bg-green-400 flex justify-center items-center rounded-xl'>08</div>
          <div className=' h-[100px] bg-green-800 flex justify-center items-center col-span-3 rounded-xl'>09</div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
