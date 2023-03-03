import CardPost from '@/components/CardPost'
import Container from '@/components/_container'
import Layout from '@/components/_layout'
import { useState } from 'react'
import mockPosts from './api/data/posts.json'
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'

// const inter = Inter({ subsets: ['latin'] })

export default function Posts() {
	const [posts, setPosts] = useState(mockPosts)

	return (
		<>
			<Head>
				<title>Posts | Next Blog</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Container>
					<SectionHeader>UI Design</SectionHeader>
					<div className='flex flex-wrap mt-16 -mx-6'>
						{!posts.length ? (
							<>
								<div className='text-center mx-auto px-6'>
									<h1 className='text-4xl lg:text-6xl'>No result 😥</h1>
									<p className='text-slate-200 my-12 text-xl md:w-9/12 mx-auto'>
										We couldn’t find any posts with the keyword `yahahahayuk`.
										Please try another keyword.
									</p>
								</div>
							</>
						) : (
							<>
								{posts.map(post => (
									<div key={post.id} className='px-6 md:w-6/12 lg:w-4/12'>
										<CardPost {...post} />
									</div>
								))}
							</>
						)}
					</div>
				</Container>
			</Layout>
		</>
	)
}
