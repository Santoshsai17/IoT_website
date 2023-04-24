const u1 = "https://blr1.blynk.cloud/external/api/get?token=14DftF1dHOTKX8LO9HSJ0F_RZC1aiQOU&V0"
const u2 = "https://blr1.blynk.cloud/external/api/get?token=14DftF1dHOTKX8LO9HSJ0F_RZC1aiQOU&V1"
const u3 = "https://blr1.blynk.cloud/external/api/get?token=14DftF1dHOTKX8LO9HSJ0F_RZC1aiQOU&V2"

const gaugeElement1 = document.querySelector(".gauge1");
const gaugeElement2 = document.querySelector(".gauge2");
const gaugeElement3 = document.querySelector(".gauge3");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill1").style.transform = `rotate(${
    (value / 2)
  }turn)`;

  value=value*100;
  
  if(gauge==gaugeElement1){
    if(value>36){
      gauge.querySelector(".gauge__fill1").style.background = "red";
    }
    else{
      gauge.querySelector(".gauge__fill1").style.background = "green";
    }
    value=value+ "°C"; 
  }
  
  gauge.querySelector(".gauge__cover1").textContent =value




  if(gauge==gaugeElement2){
    if(value>70){
      gauge.querySelector(".gauge__fill1").style.background = "red";
    }
    else{
      gauge.querySelector(".gauge__fill1").style.background = "green";
    }
  }




  if(gauge==gaugeElement3){
    if(value==0){
      gauge.querySelector(".gauge__fill1").style.background = "red";
    }
    else{
      gauge.querySelector(".gauge__fill1").style.background = "green";
    }
    
  }




}


function getData(gauge,u){
  fetch(u)
    .then(response => response.json())
    .then(data => {
      // handle the returned data here
      // while(data=="false"){
        var k=Math.floor(Math.random()*10);
        setGaugeValue(gauge,"0."+Math.floor(data));
        
      // }
      

    })
    .catch(error => console.error(error));
  }
getData(gaugeElement1,u1);
getData(gaugeElement2,u2);
getData(gaugeElement3,u3);

function callApi() {

}
callApi()
  setTimeout(() => { callApi() }, 3000);