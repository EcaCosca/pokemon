const fetchPokemon = () => {
  for(i=1;i<=200;i++){
      const url = `http://pokeapi.co/api/v2/pokemon/${i}`
      
      fetch(url ,{"method":"GET"}).then((response) => {
        return response.json();
      }
      ).then(
        function cardMaker(data) {
    
          const name = data.name
          const id= data.id
          const img = data.sprites.front_default
          const type = data.types.map((type) => type.type.name).join(', ')
          const height= data.height
          const weight= data.weight
          const abilities=data.abilities[0].ability.name
          const xp=data.base_experience
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
            normal: '#F5F5F5',
          };
          
          //-------------------------enrique-card---------------------------
        
          // let pokodex = document.getElementById("poko")
          let inerdiv = document.createElement("div");
          let image = document.createElement("img");
          let title = document.createElement("h6");
          let p = document.createElement("p");
          
          title.innerText="#"+id +"  "+name.toUpperCase();
          inerdiv.appendChild(title);
          
          const color = colors[type];
          inerdiv.style.backgroundColor = color;

          image.src = img;
          inerdiv.appendChild(image);
          
          
          p.innerText = type.toUpperCase();
          inerdiv.appendChild(p);
          // p.toUpperCase();
          
          poko.appendChild(inerdiv);
          inerdiv.className="minpoke";
     

          inerdiv.addEventListener("click", function(){
            // console.log("hello")

            
            document.getElementById("mask").style.display="block"
            document.getElementById("mask").innerHTML=`  <div class="cardmom">
            <!-- -------------------div1--transperece + blur---------------------------------------------- -->
            <div class="one"> 
              <div class="name">
              <h3><em>`+ id +"  "+name+`</em></h3>
            
            </div>
              <!-- ----------------------one 1---flex------------------------------------ -->
              <div class="one1">
                <img id="ee" src=`+img+` width="300px" height="320px">
                <!-- ----------------------------one11-------------------------------- -->
                <div class="one11">
              
                  <div class="baby">
                  <h6>HEIGHT<br>`+height+`</h6>
                
                </div>
                <br>
                <div class="baby">
                  <h6>WEIGHT<br>`+weight+`</h6>
                 
                </div>
                
                <br>
                <div class="baby">
                  <h6>TYPE<br>`+type+`</h6>
                  
                </div>
                <br>
                <div class="baby">
                  <h6>Abilities<br>`+abilities+`</h6>
                  
                </div>
                <br>
                <div class="baby">
                  <h6>XP<br>`+xp+`</h6>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        
          </div>`

          let cardmom = document.getElementsByClassName("cardmom")
            cardmom[0].style.backgroundColor = color;
          })

          
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

function sayGoodbye() {
  document.getElementById("mask").style.display="none"
}

let carddiv = document.getElementById("carddiv")
console.log(carddiv)




// const allPokemon = [];

function searchPokemon(){
  // const url = `http://pokeapi.co/api/v2/pokemon/${i}`
  // const wantedPokemon = wantedPokemon
  console.log("HELLO")
  // console.log(wantedPokemon)
  // const allPokemon = [];
  
  // for (let i = 0; i < 200; i++) {
    //   const element = array[i];
    
    //   fetch(url ,{"method":"GET"}).then((response) => {
      //     return response.json();
      //   }).then(
        //     function pokemonStorageManager(data) {
          //       const poke = {
            //         name:data.name,
            //         id:data.id,
            //         // img:data.sprites.front_default,
            //         // type:data.types.map((type) :> type.type.name).join(', '),
            //         // height:data.height,
            //         // weight:data.weight,
            //         // abilities:data.abilities[0].ability.name,
            //         // xp:data.base_experience
            //       }
            //       allPokemon.push(poke)
            //     }
            
            //   ).catch((err) => {
              //     console.log(`That pokemon doesn't exist`)
              //   })
              // }
              // console.log(allPokemon)
              
            }


fetchPokemon()