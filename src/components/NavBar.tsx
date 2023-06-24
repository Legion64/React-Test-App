function NavBar() {
    return (
        <>
            <nav className="min-h-full bg-gray-800">
                <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-white font-bold uppercase">Study Case</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;