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
    const keys = Object.keys(flag[0])
    const values = Object.values(flag[0])
    const container = document.createElement('div');
    container.innerHTML = ` 
                             <img src="${flag[0].flags.png}" alt="">
                             <div class="conText">
                              <h4>${flag[0].name.common}</h4>
                              <p>Population: ${flag[0].population}</p>
                              <p>Region: ${flag[0].region}</p>                      
                              <p>Subregion: ${flag[0].subregion}</p>
                              <p>Capital: ${flag[0].capital}</p>
                              <p>Currencies: ${Object.values(values[9])[0].name}</p>
                              <p>Language(s): ${Object.values(flag[0].languages)}</p>
                              <br><br> <br> 
                              <p>Border Countries:</p>
                             </div>       
                             <div>
                             <p></p>
                               <div class="butons">
                               </div>
                            </div>
              
                        `;
    const getDivButt = container.children[2].children[1];
    const cantidadFronteras = flag[0].borders || { name: 'hola' }
    if (cantidadFronteras.length > 0) {
        const createButtons = (arrayButtons) => {
            arrayButtons.forEach(element => {
                getDivButt.innerHTML += `<a href="../pages/infoMore.html?name=${element}"><button>${element}</button></a>
                `;
            });
        }
        createButtons(flag[0].borders);

    } else if (cantidadFronteras.name == 'hola') {
        console.log('no entra');}

    section.append(container)
}


