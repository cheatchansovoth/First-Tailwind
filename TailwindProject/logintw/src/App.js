import './App.css';
import { BsFacebook } from "react-icons/bs";
function App() {
  return (
    <section className='min-h-screen bg-gray-600 justify-center items-center flex'>
      <div className='bg-[#045189] flex shadow-lg '>
          <div className='w-1/2 ml-5 my-5 text-center'>
            <h2 className='font-bold font-sans text-2xl'>Login</h2>
            <p className='mt-2'>We will keep your information in secret</p>
            <form className='flex flex-col p-5'>
            <input className='m-3 rounded-lg text-center' placeholder='Username'></input>
            <input className='m-3 rounded-lg text-center' placeholder='Password'></input>
            <button className='bg-white rounded-lg mx-5 my-1 py-1 hover:bg-blue-300'>Login</button>
            </form>
            <div className='mt-10 grid grid-cols-3 items-center'>
              <hr/>
              <p className='text-center'>OR</p>
              <hr/>
            </div>
            <button className='bg-white border w-full rounded-xl flex justify-center items-center'><BsFacebook className='w-[25px] mr-3'/>Login with facebook </button>
          </div>
          <div className='w-1/2 p-5 '>
            <img src='https://img.freepik.com/premium-photo/fantasy-abandoned-city-night_141465-12.jpg?w=2000' className='rounded-2xl sm:block hidden'></img>
          </div>
      </div>
    </section>
  );
}

export default App;
