import { useState } from 'react';
import List from '../List';
import styles from './style.module.css'

export default function SectionSearch({ placeholder }) {
  const [section, setSection] = useState('recent');
  const recent = ['tikan', 'agnet 1', 'agent 2', 'agent 2', 'agent 2'];
  const favorites = ['tikan', 'agnet 1', 'agent 2'];
  return (
    <>
      <div>
        <section onClick={() => setSection('recent')} className={section === 'recent' ? styles.activeSection : ''}>Reciente</section>
        <section onClick={() => setSection('fav')} className={section === 'fav' ? styles.activeSection : ''}>Favoritos</section>
      </div>
      <div>
      {section === 'recent' ? (
        <List data={recent}></List>
      ) : (
        <List data={favorites}></List>
      )}
      </div>
      <style jsx>{`
        div {
          display: flex;
          background-color: white;
          border: 0;
        }
        section {
          padding: 0.5em;
          border-radius: 3px;
          width: 100%;
          text-align: center;
          background-color: #d4d4d4;
        }
      `}</style>
    </>
  );
}
