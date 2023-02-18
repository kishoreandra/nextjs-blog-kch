import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getChuckNorrisFacts } from "../lib/chuck";
import Link from "next/link";

export default function Home({ allPostsData, getChucks }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey There, I am Kishore (KcH) ... A Passionate software developer who
          is currently learning NextJS and loving it so far !! 💃🎉🎊🥳
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <h2>Get some Chuckiness</h2>
      <section>
        <em>{getChucks.value}</em>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const getChucks = await getChuckNorrisFacts();

  return {
    props: {
      allPostsData,
      getChucks,
    },
  };
}
