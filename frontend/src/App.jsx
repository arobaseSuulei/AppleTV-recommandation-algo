import Navbar from "./components/Navbar.jsx";
import UpNav from "./components/UpNav.jsx";
import Shows from "./components/Shows.jsx";
import Recommanded from "./components/Recommanded.jsx";


export default function App() {
  return (

      <div className="relative h-screen w-screen bg-[url('https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=2630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">


        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>



        <div className="relative z-10 flex gap-6  items-center justify-center h-full px-4">
          <Navbar/>
          <div className="w-[990px] h-[660px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl text-white p-4 px-12  ">

            <UpNav/>


              <Shows/>






          </div>



        </div>



      </div>









  );
}