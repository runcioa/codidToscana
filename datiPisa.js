 let ajaxPisa = $.ajax({
   method: "GET",
   dataType: 'json',
   url: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json'
 })

 ajaxPisa.done(function(data){
  
  let datiPisaGiorno = new Array;
  let datiPisaCasi = new Array;
  let tabellaPisa = '';
  
  data.forEach(function(el, index){
    
    if(el.denominazione_provincia == "Pisa"){
    datiPisaGiorno.push(el.data.substring(0,10));
    datiPisaCasi.push(el.totale_casi);
    tabellaPisa += "<tr><td>"+ el.data.substring(0,10) + "</td>" + "<td>"+ el.totale_casi + "</td></tr>"  
    }
  })

  $('#tabellaPisa').append(tabellaPisa);

    var ctx1 = document.getElementById('myChart1').getContext('2d');
    
    var chart1 = new Chart(ctx1, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: datiPisaGiorno,
          datasets: [{
              label: 'Infetti Pisa',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
              data: datiPisaCasi
          }]
      },
      options: {
          responsive: true
      }
    })

    

  

});


