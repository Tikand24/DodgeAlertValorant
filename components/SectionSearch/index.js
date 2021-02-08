import { useEffect, useState } from 'react';
import List from '../List';
import styles from './style.module.css';

export default function SectionSearch({ placeholder }) {
  const [section, setSection] = useState('recent');
  const [recent, setRecent] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setRecent(
      localStorage.getItem('recentSearch')
        ? JSON.parse(localStorage.getItem('recentSearch'))
        : []
    );
    setFavorites(
      localStorage.getItem('favoritesSearch')
        ? JSON.parse(localStorage.getItem('favoritesSearch'))
        : []
    );
  }, []);
  return (
    <>
      <div>
        <section
          onClick={() => setSection('recent')}
          className={section === 'recent' ? styles.activeSection : ''}
        >
          Reciente
        </section>
        <section
          onClick={() => setSection('fav')}
          className={section === 'fav' ? styles.activeSection : ''}
        >
          Favoritos
        </section>
      </div>
      <div>
        {section === 'recent' ? (
          recent.length == 0 ? (
            <p>No existen datos recientes</p>
          ) : (
            <List data={recent}></List>
          )
        ) : favorites.length == 0 ? (
          <p>No existen favoritos</p>
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
        p {
          text-align: center;
        }
      `}</style>
    </>
  );
}
