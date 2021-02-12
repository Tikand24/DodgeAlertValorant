import { useRouter } from 'next/router';
import { breakpoints } from '../../styles/theme';
import Grade from '../Icons/Grade';
import Clear from '../Icons/Clear';
import { useState } from 'react';

export default function ListItem({ item ,handleFavorite,handleDelete}) {
  const [isFavorite,setIsFavorite] = useState(false);
  const router = useRouter();
  return (
    <>
      <div>
        <span
          onClick={() => router.push(`/agent/${encodeURIComponent(item)}`)}
        >
          {item}
        </span>
      </div>
      <style jsx>{`
        div {
          padding: 0.5em 2em 0.5em 2em;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        @media (min-width: ${breakpoints.mobile}) {
          div {
            width: 50%;
            display: flex;
            justify-content: space-between;
          }
        }
        span {
          text-decoration-line: underline;
          cursor: pointer;
        }
        span:hover {
          text-decoration-line: underline;
          cursor: pointer;
          color: #777;
        }
        strong{
          margin: 0 2px 0 2px;
        }
        strong:hover{
          background-color:#e6e6e6;
          margin: 0 2px 0 2px;
        }
      `}</style>
    </>
  );
}
