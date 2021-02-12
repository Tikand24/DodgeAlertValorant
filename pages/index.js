import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../components/Button';

export default function Home() {
  const router = useRouter();
  setTimeout(() => {}, 1000);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Dodge alert</h1> 
        <div>
          <Button color="#464646" onClick={()=>router.push('/home')}>Buscar</Button>
        </div>
        <p>
          Busca con quien vas a jugar y saber como jugar <br />
          Ver un historial con calificaciones dependiendo del desempeño del
          equipo
        </p>
        <p>
          <img src="giphy.gif" alt="this slowpoke moves" />
        </p>
      </section>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        section {
          padding: 2em;
          color: white;
        }
        h1 {
          text-align: center;
          font-weight: bold;
          font-size: 34px;
        }
        p {
          width: 100%;
          text-align: center;
        }
        img {
          width: 100%;
          border: 1px solid #fff;
          border-radius: 0.25em;
        }
      `}</style>
    </>
  );
}
