
/* Global Variables */
const basalink = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const api = ',us&appid=1062b0f80ff59348a2d800a8b4184800';


// Create a new date instance dynamically with JS
let d = new Date();
let newData = d.getMonth() + 1 + "."+d.getDate()+"."+d.getFullYear();
console.log(newData)



//click function 
document.getElementById('generate').addEventListener('click',perform);
function perform(e){
  const feel = document.getElementById('feelings');
  const zip = document.getElementById('zip').value;
  if(!zip){
    alert('this input can not be empity')
  }else(
    getData(basalink + zip + api)
    .then((data)=>{
      console.log(data)
      postData('/wether',{
        temp:data.main.temp,
        feel:feel.value,
        date:newData,
      })
    }).then(updataUI())
  )
}




//get data  
const getData = async (url='') => {
  const units = '&units=metric'
  const req = await fetch(url);
  try {
    const data = await req.json();
    return data
  }
  catch (error) {
    console.log('error', error);
  }
}



//post data 
const postData = async (url = '', data = {}) => {

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

//updateUI function
const updataUI = async()=>{
  const req = await fetch('/allData')
  try{
  const last = await req.json()
  console.log(last);
  document.getElementById('date').innerHTML = "date:  "+last[0].data;
  document.getElementById('temp').innerHTML = "temp:  "+last[0].temp + "C";
  document.getElementById('content').innerHTML = "your feel:  "+last[0].feel
  }catch(error){
    console.log('error',error)
  }
}
