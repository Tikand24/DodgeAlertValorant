import ListItem from "../ListItem";

export default function List({ data }) {
  return (
    <>
      <div>
        {data &&
          data.map((item,index) => {
            return <ListItem key={`list${index}`} item={item}></ListItem>;
          })}
      </div>
      <style jsx>{`
        div {
          background-color: white;
          display: flex;
          flex-wrap:wrap;
          width:100%;
        }
      `}</style>
    </>
  );
}
