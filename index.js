
function change(id){
    temp=document.getElementById('people-img-'+id).src;
    document.getElementById('people-img-'+id).src=document.getElementById('people-img-1').src
    document.getElementById('people-img-1').src=temp;
}