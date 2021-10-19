

// const fetchPokemon = () => {
//   for (let i = 1; i <=150 ; i++) {
//       const url = `http://pokeapi.co/api/v2/pokemon/${i}`;
//       fetch(url, {
//           "method": "GET",
//       }).then((response) => {
//           return response.json();
//       }).then(
//           data => {
//               // console.log(data)
//               const name = result.name;
//               console.log("name" + name)

//               // image: result.sprites['front_default'],
//               // type: result.types.map((type) => type.type.name).join(', '),
//               // id: result.id
//               // Height  
//               // weight 
//               // egg
//               // abilities
//               // hp , attack , speed,
//               //      evolutione

//               // display(data.results);
//             }
//         )
//         .catch((err) => {
//             console.log('rejected', err)
//         });

// fetchPokemon();
// import{useEffect,useState}from"react";//<<---------------for the load more
const fetchPokemon = () => {
  for(i=1;i<=892;i++){
      const url = `http://pokeapi.co/api/v2/pokemon/${i}`
      
      fetch(url ,{"method":"GET"}).then((response) => {
        return response.json();
      }
      ).then(
        function cardMaker(data) {
    
          console.log(data)
          const name = data.name
          const id= data.id
          const img = data.sprites.front_default
          const type = data.types.map((type) => type.type.name).join(', ')
          //------------------coloer----------------------------------------------------
          const colors = {
            fire: '#FDDFDF',
            grass: '#DEFDE0',
            electric: '#FCF7DE',
            water: '#DEF3FD',
            ground: '#f4e7da',
            rock: '#d5d5d4',
            fairy: '#fceaff',
            poison: '#98d7a5',
            bug: '#f8d5a3',
            dragon: '#97b3e6',
            psychic: '#eaeda1',
            flying: '#F5F5F5',
            fighting: '#E6E0D4',
            normal: '#F5F5F5'
          };
          
          //-------------------------enrique-card---------------------------
        
          let pokodex = document.getElementById("poko")
          let inerdiv = document.createElement("div");
          let image = document.createElement("img");
          let title = document.createElement("h6");
          let p = document.createElement("p");
          
          title.innerText=id +"  "+name.toUpperCase();
          inerdiv.appendChild(title);
          // title.toUpperCase(); 
          
          const color = colors[type];
          inerdiv.style.backgroundColor = color;

          image.src = img;
          inerdiv.appendChild(image);
          
          
          p.innerText = type.toUpperCase();
          inerdiv.appendChild(p);
          // p.toUpperCase();
          
          poko.appendChild(inerdiv);
          inerdiv.className="minpoke";
     

          // const style=`cardMaker ${type}`
        }
             //---------------for the import load more-------------------------
            //  function poKemox(){
            //   const[allpokeman,setallpokmone]=useState([])
            //   const[loadmore , set loadmore]=useState('http://pokeapi.co/api/v2/pokemon?limit=6')
            //   //----------------------------part2-----------------------------------------
            //   const getallpokemox=async()=>{
            //     const res=await fetch(loadmore)
            //   }
            //     useEffect(()=>{
            //       getallpokemox()
            //     },[])
            //  return(
            //    <div className="contenar">
            //      <div className="poko-contenar">
            //        <div className="all-contenar"></div>
            //      </div>
            //      <button>more pokeman</button>
            //    </div>
            //  );
            //  }      
        //----------------------onclike----------------
                // function cardTag(data) {
                //   const name = data.name
                //   const id= data.id
                //   const img = data.sprites.front_default
                //   const type = data.types.map((type) => type.type.name).join(', ')
                //   console.log(data.name)
                // }
        //----------------------------------------
        
      )
      
      .catch()
  }
}

fetchPokemon()
