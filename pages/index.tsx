import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Categories, PostCard, PostWidget } from '../components'
import { getPosts } from '../services'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
]

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Perang Dunia 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post: any) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
