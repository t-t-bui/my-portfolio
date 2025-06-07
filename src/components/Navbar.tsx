export default function Navbar() {
    return (
        <nav className="text-white px-6 py-4 fixed w-full top-0">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold">My Brand</a>

                <div className="hidden md:flex spave-x-6">
                    <a href="#" className="hover:text-gray-400 px-2">Home</a>
                    <a href="#" className="hover:text-gray-400 px-2">About</a>
                    <a href="#" className="hover:text-gray-400 px-2">Services</a>
                    <a href="#" className="hover:text-gray-400 px-2">Contact</a>
			    </div>	

                {/* Mobile menu*/}
                <div v-if="isMenuOpen" className="md:hidden mt-4 flex flex-col space-y-2">
                    <a href="#" className="block text-center py-2 hover:text-gray-400">Home</a>
                    <a href="#" className="block text-center py-2 hover:text-gray-400">About</a>
                    <a href="#" className="block text-center py-2 hover:text-gray-400">Services</a>
                    <a href="#" className="block text-center py-2 hover:text-gray-400">Contact</a>
                </div>
            </div>
        </nav>
    );
}