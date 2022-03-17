let setup = document.getElementById("setup");
let delivery = document.getElementById("delivery");
let url = `https://v2.jokeapi.dev/joke/`;
var arr = [];
var arr2 = [];

function bringJoke(){
    const xhr = new XMLHttpRequest();
    var temp_url = url;
    if(arr.length===0){
        temp_url += 'Any';
    }
    else{
        for(let i=0;i<arr.length;i++){
            if(i==0){
                temp_url = temp_url+ arr[i];
            }
            else{
            temp_url = temp_url+","+arr[i];
            }
        }
    }
    xhr.open('GET', temp_url , true);
    console.log(temp_url);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);

            let setup1 = json.setup;
            currentSetup = setup1;

            if(typeof(setup1)=="undefined"){
                bringJoke();
            }
            else{

            let delivery1 = json.delivery;
            currentDelivery  =delivery1;

            setup.innerText = setup1;
            delivery.innerHTML = delivery1;}
        }
        else {
            console.log("Some error occured")
        }
    }
    xhr.send();
}

function addPrior(e)
{
  // if check
  if(e.target.checked){
     addToArray(e.target);
     bringJoke();
     console.log(arr);
  }else{
     removeToArray(e.target);
     bringJoke();
     console.log(arr)
  }
}
var arr = [];
function addToArray(obj){
  arr.push(obj.value)
}
function removeToArray(obj){
var index = arr.indexOf(obj.value);
if (index > -1) {
   arr.splice(index, 1);
 }
}

// console.log($("#name").val())

// function addPrior2(e)
// {
//   if(e.target.checked){
//      addToArray1(e.target);
//      bringJoke();
//      console.log(arr2);
//   }else{
//      removeToArray1(e.target);
//      bringJoke();
//      console.log(arr2)
//   }
// } 
// function addToArray1(obj){
//   arr2.push(obj.value)
// }
// function removeToArray1(obj){
// var index = arr2.indexOf(obj.value);
// if (index > -1) {
//    arr2.splice(index, 1);
//  }
// }

bringJoke();
$("#refresh").click(bringJoke);