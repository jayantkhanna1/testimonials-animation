
//xml request to get data from json
var xmlhttp = new XMLHttpRequest();
var url = "testimonials.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    arr=myArr
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

var arr;
//this is to make sure testimonails always contain something should be similar to 1st data in json file
var default_comment="One of the best hospital hard working staff cannot believe my luck"
var default_name="Jayant Khanna"
var default_loc="Dehradun"
document.getElementById('testimonials_text').innerHTML=default_comment;
document.getElementById('testimonials_name').innerHTML=default_name;
document.getElementById('testimonials_loc').innerHTML=default_loc;

//this function changes data
function change(id){
    //this changes dataset value
    var temp2=document.getElementById('people-img-'+id).dataset.abc;
    document.getElementById('people-img-'+id).dataset.abc=document.getElementById('people-img-1').dataset.abc;
    document.getElementById('people-img-1').dataset.abc=temp2

    var dataval=document.getElementById('people-img-1').dataset.abc;

    //this changes image
    temp=document.getElementById('people-img-'+id).src;
    document.getElementById('people-img-'+id).src=document.getElementById('people-img-1').src
    document.getElementById('people-img-1').src=temp;

    //this changes data based on dataset values(images dont need to be changed)
    document.getElementById('testimonials_text').innerHTML=arr[dataval-1].comment;
    document.getElementById('testimonials_name').innerHTML=arr[dataval-1].name;
    document.getElementById('testimonials_loc').innerHTML=arr[dataval-1].location;
    //console.log(arr[id-1]);
}
