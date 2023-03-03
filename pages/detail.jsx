import CardPost from '@/components/CardPost'
import Container from '@/components/_container'
import Layout from '@/components/_layout'
import { useState } from 'react'
import mockPosts from './api/data/posts.json'
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import PostMetaTitle from '@/components/PostMetaTitle'
import PostAuthor from '@/components/PostAuthor'
import Image from 'next/image'

// const inter = Inter({ subsets: ['latin'] })

export default function Detail() {
	const [posts, setPosts] = useState([])

	return (
		<>
			<Head>
				<title>Detail Post | Next Blog</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Container>
					<div className='flex flex-col items-center'>
						<PostMetaTitle
							category='UI Design'
							date='March 3, 2023'
							title='How to design a product that can grow itself 10x in year'
							center
						/>
						<PostAuthor
							authorName='Leslie Alexander'
							authorAvatar='/../public/img/author-1.png'
							authorJob='UI Designer'
						/>
						<div className='md:w-10/12 rounded-xl overflow-hidden my-8 md:my-10'>
							<Image
								src='/../public/img/detail-image.png'
								width={1080}
								height={640}
								alt='detail image'
							/>
						</div>
						<div className='md:w-8/12 mx-auto leading-loose text-slate-300'>
							<p className='text-lg md:text-xl leading-relaxed italic text-slate-100'>
								Male sixth sea it a. Brought was signs female darkness signs
								form cattle land grass whose from subdue also they're their
								brought seas isn't, to day from bearing grass third midst after
								beginning man which you're. Dry, gathering beginning given made
								them evening.
							</p>
							<br />
							<p>
								Lights dry. Thing, likeness, forth shall replenish upon
								abundantly our green. Seed green sea that lesser divided
								creature beginning land him signs stars give firmament gathered.
								Wherein there their morning a he grass. Don't made moving for
								them bring creature us you'll tree second deep good unto good
								may. Us yielding.
							</p>
							<br />
							<p>
								Have. Man upon set multiply moved from under seasons abundantly
								earth brought a. They're open moved years saw isn't morning
								darkness. Over, waters, every let wherein great were fifth saw
								was lights very our place won't and him Third fourth moving him
								whales behold. Beast second stars lights great was don't green
								give subdue his. Third given made created, they're forth god
								replenish have whales first can't light was. Herb you'll them
								beast kind divided. Were beginning fly air multiply god Yielding
								sea don't were forth.
							</p>
						</div>
					</div>
				</Container>
			</Layout>
		</>
	)
}
