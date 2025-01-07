import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-neutral-950">
            <div className="max-w-md mx-auto text-center bg-neutral-950 bg-opacity-90 p-8 rounded-lg shadow-lg">
                <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
                <h1 className="text-4xl font-bold text-white/65 mb-6">Oops! Page Not Found</h1>
                <p className="text-lg text-white/65 mb-8">The page you&apos;re looking for seems to have gone on a little adventure. Don&apos;t
                    worry, we&apos;ll help you find your way back home.</p>
                <Link to="/"
                    className="inline-block bg-neutral-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound