import { useRouter } from 'next/router';
import { breakpoints } from '../../styles/theme';

export default function ListItem({ item }) {
  const router = useRouter();
  return (
    <>
      <div>
        <span
          onClick={() => router.replace(`/agent/${encodeURIComponent(item)}`)}
        >
          {item}
        </span>
        <button>*</button>
        <button>X</button>
      </div>
      <style jsx>{`
        div {
          padding: 0.5em 0 0.5em 2em;
          width: 100%;
        }
        @media (min-width: ${breakpoints.mobile}) {
          div {
            width: 50%;
          }
        }
        button {
          text-align: right;
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
      `}</style>
    </>
  );
}
