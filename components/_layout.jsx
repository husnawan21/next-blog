import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<main className='min-h-screen px-6 pb-5 text-white bg-gradient-to-b from-slate-800 to bg-slate-900'>
			<Navbar />
			{children}
			<Footer />
		</main>
	)
}
