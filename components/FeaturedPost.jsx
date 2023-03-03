import Image from 'next/image'
import InfoPost from './InfoPost'
import Link from 'next/link'

export default function FeaturedPost() {
	return (
		<>
			<article>
				<div className='flex flex-wrap lg:items-center -mx-6 -mb-12 lg:mb-0'>
					<div className='w-full px-6 md:w-7/12 lg:w-8/12'>
						<div className='overflow-hidden rounded-xl mb-4 md:mb-0'>
							<Link href='/detail'>
								<Image
									src='/../public/img/featured-thumbnail.png'
									width='1080'
									height='600'
									alt='Featured Post'
									priority
								/>
							</Link>
						</div>
					</div>
					<div className='w-full px-6 md:w-5/12 lg:w-4/12'>
						<InfoPost
							category='UI Design'
							date='July 2, 2021'
							title='Understanding color theory: the color wheel and finding complementary colors'
							excerpt='Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. '
							authorAvatar='/../public/img/author-1.png'
							authorName='Leslie Alexander'
							authorJob='UI Designer'
						/>
						<hr className='border border-slate-700 mt-10 md:hidden' />
					</div>
				</div>
			</article>
		</>
	)
}
