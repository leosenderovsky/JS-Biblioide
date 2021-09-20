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

/* $(document).ready(function(){
    $.get('https://restfulcountries.com/api/v1/countries?fetch_type=slim',function(countries){

        $.each(countries.data,function(key,value){
            $('#country-select')
                .append($("<option></option>")
                    .attr("value", value.name)
                    .text(value.name));
        });
    });
});

function initStates(){
  //Get selected country name
  let country=$("#country-select").val();

  //Remove previous loaded states
  $('#state-select option:gt(0)').remove();
  $('#district-select option:gt(0)').remove();

  //Call restful countries states endpoint
  $.get('https://restfulcountries.com/api/v1/countries/'+country+'/states?fetch_type=slim',function(states){

      //Loop through returned result and populate states select
      $.each(states.data,function(key,value){
          $('#state-select')
              .append($("<option></option>")
                  .attr("value", value.name)
                  .text(value.name));
      });
  });
} */