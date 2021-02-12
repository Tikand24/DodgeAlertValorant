import ListItem from "../ListItem";

export default function List({ data=[] }) {
  
  const handleFavorite = (item)=>{
    const favoritesSearch = localStorage.getItem('favoritesSearch');
    if (favoritesSearch) {
      let playersName = JSON.parse(favoritesSearch);
      if (!playersName.find((player) => player === item)) {
        if (playersName.length >= 4) {
          playersName.pop();
        }
        playersName.push(item);
        localStorage.setItem('favoritesSearch', JSON.stringify(playersName));
      }
    } else {
      localStorage.setItem('favoritesSearch', JSON.stringify([item]));
    }
  }
  const handleDelete = (item)=>{
    console.log('handle',item)
    const indexFind = data.findIndex(d=>d === item)
    if(indexFind){
      data.splice(indexFind,1);
      localStorage.setItem('recentSearch', JSON.stringify(data));
    }
  }
  return (
    <>
      <div>
        {data &&
          data.map((item,index) => {
            return <ListItem key={`list${index}`} item={item} handleFavorite={handleFavorite} handleDelete={handleDelete}></ListItem>;
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
