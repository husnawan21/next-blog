import Link from 'next/link'
import { useState } from 'react'
import Container from './_container'

export default function Navbar() {
	const [dropdown, setDropdown] = useState(false)
	const [offcanvas, setOffcanvas] = useState(false)
	const [search, setSearch] = useState(false)

	const dropdownList = [
		{ text: 'Internet', href: '/posts' },
		{ text: 'Books', href: '/posts' },
		{ text: 'Open Source', href: '/posts' },
	]

	const [arrow, setArrow] = useState(false)

	const arrowIcon = () => (
		<div className={`transition duration-200 ${arrow && '-rotate-180'}`}>
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M4 6L8 10L12 6'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)

	const searchIcon = () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-5 h-5'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
			/>
		</svg>
	)

	const hamburgerIcon = () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-6 h-6'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
			/>
		</svg>
	)

	const closeIcon = () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-6 h-6'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M6 18L18 6M6 6l12 12'
			/>
		</svg>
	)

	return (
		<>
			<nav className='py-10'>
				<Container>
					<div className='flex items-center'>
						<div className='flex w-3/12 lg:hidden'>
							<button
								onClick={() => setOffcanvas(!offcanvas)}
								className='text-slate-200'
							>
								{hamburgerIcon()}
							</button>
						</div>
						<div className='w-6/12 lg:justify-start lg:w-3/12 mr-4'>
							<Link
								href='/'
								className='flex items-center justify-center lg:justify-start'
							>
								<div className='flex items-center justify-center w-10 h-10 mr-6 font-bold rounded bg-lime-600'>
									E
								</div>
								Epictetus
							</Link>
						</div>
						<div className='lg:hidden w-3/12 flex justify-end items-center text-slate-200'>
							<button onClick={() => setSearch(!search)}>{searchIcon()}</button>
						</div>
						<div
							className={`transition-all duration-200 fixed z-20 lg:flex justify-end lg:w-6/12 pr-12 bg-gradient-to-b from-slate-700 to-slate-800 lg:bg-none lg:static top-0 h-full lg:h-auto lg:p-0 w-full pl-10 pt-24 ${
								offcanvas ? '-left-0' : 'left-full'
							}`}
						>
							<button
								onClick={() => setOffcanvas(false)}
								className='absolute lg:hidden top-10 left-6'
							>
								{closeIcon()}
							</button>
							<ul className='flex flex-col md:mr-12 lg:space-x-6 lg:flex-row rounded-lg space-y-4 lg:space-y-0'>
								<li>
									<Link href='/posts' className='hover:underline'>
										UI Design
									</Link>
								</li>
								<li>
									<Link href='/posts' className='hover:underline'>
										Front-End
									</Link>
								</li>
								<li>
									<Link href='/posts' className='hover:underline'>
										Back-End
									</Link>
								</li>
								<li className='relative'>
									<div
										className='flex items-center duration-200 hover:underline cursor-pointer'
										onClick={() => setDropdown(!dropdown, setArrow(!arrow))}
									>
										Others <div className='ml-2'>{arrowIcon()}</div>
									</div>
									{dropdown && (
										<ul className='absolute mt-4 rounded-md shadow-xl shadow-slate-900 w-52 bg-slate-900 '>
											{dropdownList.map(({ text, href }) => (
												<li
													key={text}
													className='flex px-5 py-2 border-b border-b-white/5 hover:bg-slate-800/40 last:border-b-0'
												>
													<Link href={href}>{text}</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							</ul>
						</div>
						<div
							className={`fixed lg:static transition-all duration-300 w-full left-0 lg:flex lg:w-3/12 px-5 lg:px-0 ${
								search ? 'top-10' : '-top-40'
							}`}
						>
							<div>
								<input
									className='relative pl-12 py-2 transition-all duration-100 border rounded-full outline-none border-slate-600 bg-slate-900 focus:ring-blue-500 focus:ring-2 focus:bg-slate-800 hover:bg-slate-800 w-full'
									placeholder='Search..'
								/>
								<div className='absolute ml-5 -mt-8 text-slate-400'>
									{searchIcon()}
								</div>
								<div className='absolute lg:hidden right-10 -mt-[33px] text-slate-300'>
									<button onClick={() => setSearch(false)}>
										{closeIcon()}
									</button>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</nav>
		</>
	)
}
