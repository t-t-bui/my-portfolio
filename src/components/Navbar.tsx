export default function Navbar() {
    return (
        <nav className="text-white px-6 py-4 w-full top-0">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold">My Brand</a>

                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-400 hover:border-transparent hover:bg-white px-2 mx-1 leading-none">Home</a>
                    <a href="#" className="hover:text-gray-400 hover:border-transparent hover:bg-white px-2 mx-1 leading-none">About</a>
                    <a href="#" className="hover:text-gray-400 hover:border-transparent hover:bg-white px-2 mx-1 leading-none">Services</a>
                    <a href="#" className="hover:text-gray-400 hover:border-transparent hover:bg-white px-2 mx-1 leading-none">Contact</a>
			    </div>	

                {/* Mobile menu*/}
                <div v-if="isMenuOpen" className="md:hidden mt-4 flex flex-col space-y-2">
                    <a href="{../pages/Home}" className="block text-center py-2 hover:text-gray-400">Home</a>
                    <a href="#" className="block text-center py-2 hover:text-gray-400">About</a>
                    <a href="#" className="block text-center py-2 hover:text-gray-400">Services</a>
                    <a href="#" className="block text-center py-2 hover:text-gray-400">Contact</a>
                </div>
            </div>
        </nav>
    );
}