//* First project of fetching from opensource API. Flags of the north. @author CLS***/

const body = document.querySelector("body");

const contriesContainer = document.createElement("div");
contriesContainer.setAttribute("id", "countries");
body.append(contriesContainer);

// const btn = document.createElement("button");
// btn.setAttribute("id", "btn-country");
// contriesContainer.append(btn);

//make an function to make it possible to get information of multiple countries
const getCountryData = function(country){

//oldschool-way, ajax 
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//open the request(above),(down) send request.asyncronys- donΒ΄t work to put it in a variable. sen fecthes the event and load is waiting for it to load
request.send();


//callback function. (get data i JSON)
request.addEventListener('load', function(){
// console.log(this.responseText);
});

//use [] round data to desctruct to get to the object. same as .[0]
request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);


    const html = `
    <article class="country">
    <img class="country_img" src="${data.flags.png}"/>
    <div class="country_data">
    <h3 class="country_name">${data.name.common}</h3>
    <h4 class="country_region">${data.region}</h4>
    <p class="country_row"><span>π©βπ€βπ§π½</span>${(+data.population/1000000).toFixed(1)}
    <p class="country__row"><span>π</span>${data.borders}</p>
    <p class="country__row"><span>π</span>${data.timezones}</p>
    
    <p class="country__row"<span>π</span>${data.capital}</p>
    </div>
    </article>`;

    contriesContainer.insertAdjacentHTML('beforeend', html);
    contriesContainer.style.opacity=1;
    });
}

getCountryData('sweden');
getCountryData('denmark');
getCountryData('finland');
getCountryData('norway');
getCountryData('iceland');
getCountryData('faroe Islands');

 