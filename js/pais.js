let dropdown = document.getElementById('country-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://restcountries.eu/rest/v2/all';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Parece que hubo un problema. Código de error: ' + 
          response.status);  
        return;  
      }

      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });