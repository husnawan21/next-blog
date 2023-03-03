import Head from 'next/head'
import { Inter } from 'next/font/google'
import FeaturedPost from '@/components/FeaturedPost'
import CardPost from '@/components/CardPost'
import { useState } from 'react'
import Container from '@/components/_container'
import Layout from '@/components/_layout'
import mockPosts from './api/data/posts.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [posts, setPosts] = useState(mockPosts)

	return (
		<>
			<Head>
				<title>Next Blog</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Container>
					<FeaturedPost />
					<div className='flex flex-wrap mt-12 -mx-6'>
						{posts.map(post => (
							<div
								key={post.id}
								className='px-6 md:w-6/12 lg:w-4/12 mt-12 md:mt-6'
							>
								<CardPost {...post} />
								<hr className='border-slate-600 md:invisible' />
							</div>
						))}
					</div>
				</Container>
			</Layout>
		</>
	)
}
