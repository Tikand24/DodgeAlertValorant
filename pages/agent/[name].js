import { useRouter } from 'next/router';
import { useState } from 'react';

const Agent = () => {
  const [califaction, setCalifaction] = useState(null);
  const [observation, setObservation] = useState('');
  const router = useRouter();
  const { name } = router.query;
  console.log('query', router.query);
  const califications = [
    { id: 1, description: 'Bueno' },
    { id: 2, description: 'Regular' },
    { id: 3, description: 'Malo' },
  ];
  const handleChange = (event) => {
    const { value } = event.target;
    setCalifaction(value);
  };
  const handleObservation = (event) => {
    const { value } = event.target;
    setObservation(value);
  };

  return (
    <>
      <div>
        <img src="/avatar.png" alt="avatar" />
        <section>
          <h2>{name}</h2>
          <span>Rango</span>
        </section>
      </div>
      <div>
        <section>
          <h2>Calificación</h2>
          <select onChange={handleChange}>
            {califications.map((calification, index) => (
              <option key={`option${index}`} value={calification}>
                {calification.description}
              </option>
            ))}
          </select>
          <textarea
            placeholder="¿Qué esta pasando?"
            onChange={handleObservation}
            value={observation}
          ></textarea>
        </section>
      </div>
      <div>
        <section>
          <h2>Historial</h2>
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
          margin: 0 0 0 40px;
        }
        textarea {
          border: 3px solid transparent;
          border-radius: 10px;
          font-size: 14px;
          min-height: 200px;
          padding: 5px;
          outline: 0;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Agent;
