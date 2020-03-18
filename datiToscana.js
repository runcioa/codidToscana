 let ajaxToscana = $.ajax({
   method: "GET",
   dataType: 'json',
   url: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json'
 })

 ajaxToscana.done(function(data){
  
  let datiToscanaGiorno = new Array;
  let datiToscanaCasi = new Array;
  let datiToscanaCasiPrevisione = new Array;
  let tabellaToscana = '';

  
  data.forEach(function(el, index){
    
    if(el.denominazione_regione == "Toscana"){
    datiToscanaGiorno.push(el.data.substring(0,10));
    datiToscanaCasi.push(el.totale_casi);

    tabellaToscana += "<tr><td>"+ el.data.substring(0,10) + "</td>" + "<td>"+ el.totale_casi + "</td></tr>"  
  }

  })
  $('#tabellaToscana').append(tabellaToscana);
  
  
  console.log(datiToscanaCasi);
   
    var ctx = document.getElementById('myChart').getContext('2d');
    
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: datiToscanaGiorno,
          datasets: [{
              label: 'Infetti Toscana',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
              data: datiToscanaCasi
          }]
      },
      options: {
          responsive: true
      }
    })

    var ctx2 = document.getElementById('myChart2').getContext('2d');
    
    var chart = new Chart(ctx2, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ["24/02/2020","25/02/2020","26/02/2020","27/02/2020","28/02/2020","29/02/2020","01/03/2020","02/03/2020","03/03/2020","04/03/2020","05/03/2020","06/03/2020","07/03/2020","08/03/2020","09/03/2020","10/03/2020","11/03/2020","12/03/2020","13/03/2020","14/03/2020","15/03/2020","16/03/2020","17/03/2020","18/03/2020","19/03/2020","20/03/2020","21/03/2020","22/03/2020","23/03/2020","24/03/2020","25/03/2020","26/03/2020","27/03/2020","28/03/2020","29/03/2020","30/03/2020","31/03/2020"],
          datasets: [{
              label: 'Infetti Toscana',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
              data: datiToscanaCasi
          }, 
          {
              label: 'Infetti Toscana Previsione',
              backgroundColor: 'rgb(150, 154, 132)',
              borderColor: 'rgb(150, 154, 132)',
              fill: false,
              data: [0,2,2,2,8,11,13,13,19,38,61,79,113,166,208,264,320,364,470,630,781,866,994,1126,1266,
                    1413,1569   ,1732   ,1904   ,2083   ,2270   ,2465   ,2668   ,2878   ,3097   ,3323   ,3558]

        }]
      },
      options: {
          responsive: true
      }
    })

  

});


