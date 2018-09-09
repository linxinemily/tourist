var areas = document.getElementById('areas');
var list = document.querySelector('.list');
var title = document.querySelector('.title');
var btn = document.querySelectorAll('.btn');

areas.addEventListener('change',getData,false);


for(i =0;i<btn.length;i++){
btn[i].addEventListener('click',getData,false)
};

var data = []

axios.get('/data.json')
.then((response) => {
    data = response.data
})

function getData(e){
var select = e.target.value;
var array = [];

for(i=0;i<data.length;i++){
  if (data[i].Zone == select){
    
    array.push({
      Add:data[i].Add,
      Name:data[i].Name,
      Opentime:data[i].Opentime,
      Tel:data[i].Tel,
      Picture1:data[i].Picture1
    });
 
    
  }
  
}


var str = '';
for(i = 0; i<array.length;i++){
  str += '<div class="col-md-6"><div class="card"><div class="top" style="background:url('+ array[i].Picture1 +')"><div class="title">'+ array[i].Name+'</div></div><div class="bottom"><p><i class="fa fa-clock-o" aria-hidden="true"></i> '+ array[i].Opentime +'</p><p><i class="fa fa-map-marker" aria-hidden="true"></i> '+array[i].Add+'</p><p><i class="fa fa-phone" aria-hidden="true"></i> '+ array[i].Tel +'</p></div></div></div>';
}
list.innerHTML = str;
title.textContent = select;
;}
