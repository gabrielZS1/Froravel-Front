import { Link } from 'react-router-dom';

export default function Header() { 
    return(
        <>
            <header className="bg-pink-400 h-12 flex items-center px-4">
                <div className="Logs flex gap-4">
                    <Link to="/login" className="text-white hover:underline">Login</Link>
                    <Link to="/cadastro" className="text-white hover:underline">Cadastro</Link>
                </div>
            </header>
        </>
    )
}