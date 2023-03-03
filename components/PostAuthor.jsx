import Image from 'next/image'

export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
	return (
		<>
			<div className='flex items-center mt-5'>
				<div className='border-2 rounded-full border-slate-600 relative w-12 h-12 md:w-14 md:h-14'>
					<Image
						src={authorAvatar}
						alt={authorName}
						sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
						fill
					/>
				</div>
				<div className='ml-4'>
					<h3 className='font-medium'>{authorName}</h3>
					<h6 className='mt-1 text-sm text-slate-300'>{authorJob}</h6>
				</div>
			</div>
		</>
	)
}
