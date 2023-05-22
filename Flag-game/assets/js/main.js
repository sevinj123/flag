//Countries api-dən random 1 ölkə seçirsiniz. View hissəsində Bayraq, input və düymə olacaq.
// İstifadəçi inputa göstərilən bayrağın adını yazır. Əgər düzdürsə və ya səhvdirsə toastr (plugin) istifadə edərək  düzdür yazdırın.
//Bacaran bunu oyun kimi etsin. Vaxt qoysun və həmin vaxt bitənə qədər hər təxmindən sonra random yeni ölkə bayrağı seçilsin
$(document).ready(function(){
  
fetch('https://restcountries.com/v3.1/all/')
.then(res=>res.json())
.then(data=>{
  const randomFlag = Math.floor(Math.random() * 25);
  const img=document.querySelector("#img");
  const  btn=document.querySelector("#btn");
  const country = data[randomFlag].name.common;
  img.setAttribute("src",data[randomFlag].flags.png)
  

   btn.addEventListener('click',function(){
    const answer=document.querySelector("#inp").value.toLowerCase();
    if(answer===country.toLowerCase()){
      successAlert("It is right")
    }
    else{
      errorAlert("It is wrong")
    }
   })
})
  .catch(error => {
   errorAlert('Error');
});
})



function successAlert(message){
    Command: toastr["success"]("ela")

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
}


function errorAlert(message){
    Command: toastr["error"]("pis")

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
}