var inputnum =  document.getElementById('num');
var store = document.getElementById('storenum');
var hinput = document.getElementsByClassName('history')[0];
function input(a){
    // alert(a);
    if(inputnum.value == '0'){
        inputnum.value = a;
    }
    else{
         inputnum.value += a;
}   
}
function clearall(){
    // alert('hii');
    inputnum.value ='0';
    store.value= '';
    
}
function cancel(){
    // alert('hii');
   demo = inputnum.value;
   if(demo.length > 1){
    inputnum.value = demo.slice(0, -1);
}
    else{
        inputnum.value='0';
    }

}

function equalto(){
    // alert('hii');
    
    demo= inputnum.value;
    inputnum.value = eval(demo);
    store.value = demo + ' =';

    showhistory();
}
function showhistory()
{
      var history = '<div class="history">';
      history+="<p>"+store.value+"</p> <p>"+inputnum.value+"</p";
      history+='</div>';
      hinput.innerHTML +=history;
  
}