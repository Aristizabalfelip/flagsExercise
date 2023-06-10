
const link = `https://restcountries.com/v3.1/all`
const section = document.querySelector('section')

const getFlags = async(l) => { 
    const res = await fetch(l)
    const data = await res.json();
    
    data.forEach(countries => {
        pinkFlags(countries)
    });
}
getFlags(link);

const pinkFlags = (co) => {
    const container = document.createElement('div');
    console.log(co);
    console.log(Object.values(co)[4]);
   
    container.innerHTML = ` <a href="./pages/infoMore.html?name=${Object.values(co)[4]}">
                             <img src="${co.flags.png}" alt="">
                             <div>
                              <h4>${co.name.common}</h4>
                              <h4>Population: ${co.population}</h4>
                              <h4>Region: ${co.region}</h4>                      
                              <h4>Capital: ${co.capital}</h4>
                             </div>
                            </a>

                          `;
                          
section.append(container)
}
console.log(section);

