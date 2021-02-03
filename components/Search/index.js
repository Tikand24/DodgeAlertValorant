import Button from '../Button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SectionSearch from '../SectionSearch'

export default function Search({ placeholder }) {
    const router = useRouter();
  const [agent, setAgent] = useState('');
  const handleSubmit = () => {
    router.push(`/agent/${encodeURIComponent(agent)}`);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setAgent(value);
  };
  return (
    <>
      <div>
        <input
          placeholder={placeholder || 'Agente1, Agente2.....'}
          onChange={handleChange}
          onKeyPress={event => event.key === 'Enter' && handleSubmit()}
        />
        <Button onClick={handleSubmit}>GG</Button>
      </div>
      <section>
        <SectionSearch></SectionSearch>
      </section>
      <style jsx>{`
        div {
          display: flex;
          background-color: white;
          padding: 0.5em;
          border-radius: 9px;
          border: 0;
        }
        input {
          border: none;
          width: 100%;
          outline: none !important;
        }
        section{
          margin-top:10px;
        }
      `}</style>
    </>
  );
}
