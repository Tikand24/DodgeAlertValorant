import Head from 'next/head';
import Search from '../../components/Search';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Search></Search>
      </div>
      <style jsx>{`
        div {
          margin: 5px;
        }
      `}</style>
    </>
  );
}
