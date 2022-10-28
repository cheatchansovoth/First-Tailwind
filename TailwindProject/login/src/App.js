import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center min-w-full bg-[#073B39]">
      <div className='login-form sm:flex sm:flex-row items-center justify-start rounded-2xl w-[70%] sm:bg-[#253631]'>
        <div className='image hidden md:block '>
          <img src='https://burst.shopifycdn.com/photos/elaborate-building-interior-with-light-teal-walls.jpg?width=1200&format=pjpg&exif=1&iptc=1' className='rounded-3xl h-[720px]'></img>
        </div>
        <div className='text-login mx-[20%]'>
          <p className='sm:text-5xl text-2xl font-serif font-bold my-2 underline text-center text-[#6F6658]'>LOGIN</p>
          <p className='text-center my-1 text-[#6F6658]'>We keep it secret</p> 
          <form className='flex flex-col'>
            <label className='text-[#6F6658] font-bold'>Email</label>
            <input className='rounded-lg placeholder:text-center ' type='text' placeholder='Enter your email'></input>
            <label className='mt-3 text-[#6F6658] font-bold'>Password</label>
            <input className='rounded-lg ' type='password' ></input>
            <button className='bg-[#6F6658] mt-5 rounded-lg text-white font-bold font-serif py-2 hover:bg-gray-500'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
