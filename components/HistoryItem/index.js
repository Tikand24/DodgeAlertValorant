export default function HistoryItem({ item }) {
  return (
    <>
      <div>
        <section>{item.createdAt.toDate().toLocaleString('es-ES')}</section>
        <p>
          <strong>Juego:</strong> {item.game}
        </p>
        <p>
          <strong>Rango:</strong> {item.ranked}
        </p>
        <p>
          <strong>Califiacion:</strong>{' '}
          {item.qualification ? item.qualification : item.calification}
        </p>
        <p>
          <strong>Observacion:</strong> {item.observations}
        </p>
      </div>
      <style jsx>{`
        div{
            border: 1px solid #7b7b7b;
            border-radius: 0.25em;
            padding: 0.5em;
        }
        p {
          margin:0;
        }
        section{
            text-align:end;
        }
      `}</style>
    </>
  );
}
