import Image from 'next/image'
import InfoPost from './InfoPost'
import Link from 'next/link'

export default function CardPost({ thumbnail, ...infoPost }) {
	return (
		<>
			<article className='mb-10'>
				<Link href='/detail'>
					<Image
						src={thumbnail}
						width='1080'
						height='600'
						alt='image post'
						className='mb-4'
					/>
				</Link>
				<InfoPost {...infoPost} />
			</article>
		</>
	)
}
