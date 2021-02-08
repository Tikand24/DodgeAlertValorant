import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import History from '../../components/History';
import Select from '../../components/Select';
import { addPlayer, getDataByAgent } from '../../firebase/client';

const Agent = () => {
  const [ranked, setRanked] = useState('Oro');
  const [qualification, setQualification] = useState('Regular');
  const [game, setGame] = useState('Valorant');
  const [observation, setObservation] = useState('');
  const [status, setStatus] = useState(false);
  const [history, setHistory] = useState([]);
  const router = useRouter();
  const { name } = router.query;
  useEffect(() => {
    getDataByAgent(name)
      .get()
      .then((response) => {
        let history = [];
        response.forEach((doc) => {
          history.push(doc.data());
        });
        setHistory(history);
      })
      .catch((res) => console.error('err', res));
    const recentSearch = localStorage.getItem('recentSearch');
    if (recentSearch) {
      let playersName = JSON.parse(recentSearch);
      if (!playersName.find((player) => player === name)) {
        if (playersName.length >= 4) {
          playersName.pop();
        }
        playersName.push(name);
        localStorage.setItem('recentSearch', JSON.stringify(playersName));
      }
    } else {
      localStorage.setItem('recentSearch', JSON.stringify([name]));
    }
  }, []);
  const qualifications = ['Bueno', 'Regular', 'Malo'];
  const games = ['League of legends', 'Valorant'];
  const rankeds = [
    'Hierro',
    'Bronze',
    'Plata',
    'Oro',
    'Platino',
    'Diamante',
    'Diamante ++++',
  ];
  const handleChangeQualification = (event) => {
    const { value } = event.target;
    setQualification(value);
  };
  const handleChangeGame = (event) => {
    const { value } = event.target;
    setGame(value);
  };
  const handleChangeRanked = (event) => {
    const { value } = event.target;
    setRanked(value);
  };
  const handleObservation = (event) => {
    const { value } = event.target;
    setObservation(value);
  };
  const handleSubmit = () => {
    setStatus(true);
    addPlayer({
      player: name,
      ranked: ranked,
      game: game,
      qualification: qualification,
      observations: observation,
      userId: 1,
    })
      .then(() => {
        router.push('/home');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div>
        <img src="/phoenix-avatar.jpg" alt="avatar" />
        <section>
          <h2>{name}</h2>
          <span>Rango</span>
        </section>
      </div>
      <div>
        <section>
          <h2>Calificación</h2>
          <p>
            <Select
              onChange={handleChangeGame}
              data={games}
              value={game}
              kei={'game'}
            ></Select>
          </p>
          <p>
            <Select
              onChange={handleChangeRanked}
              data={rankeds}
              value={ranked}
              kei={'ranked'}
            ></Select>
          </p>
          <p>
            <Select
              onChange={handleChangeQualification}
              data={qualifications}
              value={qualification}
              kei={'qualification'}
            ></Select>
          </p>
          <p>
            <textarea
              placeholder="Escribe tus putasos aqui"
              onChange={handleObservation}
              value={observation}
            ></textarea>
          </p>
          <p>
            <Button color="#222222" onClick={handleSubmit} disabled={status}>
              Guardar
            </Button>
          </p>
        </section>
      </div>
      <div>
        <section>
          <History histories={history}></History>
        </section>
      </div>
      <style jsx>{`
        div {
          color: white;
          display: flex;
          border-radius: 9px;
          margin: 5px;
        }
        img {
          height: 100px;
          width: 100px;
        }
        section {
          margin: 0 20px 0 20px;
          width: 100%;
        }
        textarea {
          color: #fff;
          background: #222222;
          border: 1px solid #7b7b7b;
          border-radius: 0.25em;
          font-size: 14px;
          padding: 5px;
          outline: 0;
          resize: none;
          width: 100%;
          margin-bottom:20px;
        }
        p{
          margin: 0 0 8px 0;
        }
      `}</style>
    </>
  );
};

export default Agent;
