
const url = window.location.search;
const search = new URLSearchParams(url);
const na = search.get('name')
const link = `https://restcountries.com/v3.1/alpha/${na}`

const section = document.querySelector('section')


const getFlag = async (l) => {
    const res = await fetch(l)
    const data = await res.json();
    paintInfo(data)
}
getFlag(link)


const paintInfo = (flag) => {
    
    console.log(Object.values(flag[0].languages));
    const keys = Object.keys(flag[0])
    const values = Object.values(flag[0])
    console.log(keys);
    console.log(Object.values(values[9]));
    const container = document.createElement('div');
    console.log(flag[0].borders);
    container.innerHTML = ` 
                             <img src="${flag[0].flags.png}" alt="">
                             <div>
                              <h4>${flag[0].name.common}</h4>
                              <p>Population: ${flag[0].population}</p>
                              <p>Region: ${flag[0].region}</p>                      
                              <p>Subregion: ${flag[0].subregion}</p>
                              <p>Capital: ${flag[0].capital}</p>
                              <p>Currencies: ${Object.values(values[9])[0].name}</p>
                              <p>Language(s): ${Object.values(flag[0].languages)}</p>
                             </div>
                             <div>
                             <p>Border Countries:</p>
                              <div class="hola">
                              </div>
                             </div>
           
                        `;
   
    const getDivButt = container.children[2].children[1];

    const cantidadFronteras = flag[0].borders || {name:'hola'}


    if (cantidadFronteras.length> 0) {
        console.log('entra');
        const createButtons = (arrayButtons) => {
 arrayButtons.forEach(element => {
                console.log(getDivButt);
                getDivButt.innerHTML += `<a href="../pages/infoMore.html?name=${element}"><button>${element}</button></a>
                `;                    
                         
            });
          
        }
        createButtons(flag[0].borders);

     }else if (cantidadFronteras.name == 'hola') {
     console.log('no entra');
     }
    
    section.append(container)
    console.log(Object.values(flag[0])[4]); // codigo de país
  
}


