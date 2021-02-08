import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
  }, 1000);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div>
            <button onClick={()=>router.replace('/home')}>Home</button>
            <h3>Doge alert</h3>
            <p>Buscar con quien vas a jugar y saber como jugar con el </p>
          </div>
        </div>
      </main>
    </div>
  );
}
