var arr;
function change(id){
    //this changes image
    temp=document.getElementById('people-img-'+id).src;
    document.getElementById('people-img-'+id).src=document.getElementById('people-img-1').src
    document.getElementById('people-img-1').src=temp;

    //this changes dataset value
    var temp2=document.getElementById('people-img-'+id).dataset.abc;
    document.getElementById('people-img-'+id).dataset.abc=document.getElementById('people-img-1').dataset.abc;
    document.getElementById('people-img-1').dataset.abc=temp2
    
    //this changes data based on dataset values(images dont need to be changed)
    var dataval=document.getElementById('people-img-1').dataset.abc;
    document.getElementById('testimonials_text').innerHTML=arr[dataval-1].comment;
    //console.log(arr[id-1]);
}

//xml request to gte data from json
var xmlhttp = new XMLHttpRequest();
var url = "data.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    arr=myArr
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    document.getElementById("testimonials_text").innerHTML;
}