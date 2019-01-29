import Layout from '../components/shared/Layout';
import BasePage from '../components/shared/BasePage';
import Link from 'next/link';

const PostLink = (props) => (
    <li>
      <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )

const Blog = () => (
    <Layout>
        <BasePage>
        <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" title="Hello Next.js"/>
                <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
                <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
            </ul>
        </BasePage>
    </Layout>
)

export default Blog