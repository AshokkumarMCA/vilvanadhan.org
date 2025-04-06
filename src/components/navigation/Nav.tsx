
const Nav:React.FC=()=>{

    return(<>
     <nav className="bg-teal-500 text-white mt-2 hover:bg-orange-100">
          <div className="container mx-auto">
            <ul className="flex justify-end space-x-8 py-3">
              <li><a href="#home" className="hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-300 transition-colors">About</a></li>
              <li><a href="#deities" className="hover:text-teal-300 transition-colors">Deities</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Services</a></li>
              <li><a href="#events" className="hover:text-teal-300 transition-colors">Events</a></li>
              <li><a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>
    </>)
}
export default Nav;