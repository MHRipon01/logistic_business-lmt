
const Footer = () => {
    return (
        <div>
            
        <footer className="flex flex-col">
            <div className="flex flex-col items-start justify-around gap-5 bg-sky-50 p-10 py-10 md:flex-row md:gap-0 md:items-center">
                <aside className="text-3xl">
                   
                    <p>Logistic Business Solution Ltd.</p>
                </aside>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Home</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Contact</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">About</a>
                        </li>
                    </ul>
                </nav>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Services</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Add</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <aside className="bg-sky-200 py-5 text-center text-sm">
                <p>&copy; 2024 LBS Ltd. All Rights Reserved.</p>
            </aside>
        </footer>
   
        </div>
    );
};

export default Footer;