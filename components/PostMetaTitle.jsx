import Link from 'next/link'

export default function PostMetaTitle({
	category,
	title,
	date,
	excerpt,
	center,
}) {
	return (
		<>
			<div className='flex items-center space-x-2 text-sm text-slate-300'>
				<div className='underline uppercase'>
					<Link href='/posts'>{category}</Link>
				</div>
				<span>&bull;</span>
				<div>{date}</div>
			</div>
			<h2
				className={`mt-4 text-2xl font-medium leading-tight ${
					center && 'text-center'
				}`}
			>
				<Link href='/detail'>{title}</Link>
			</h2>
			<p className='md:w-11/12 mt-5 text-slate-200'>{excerpt}</p>
		</>
	)
}
