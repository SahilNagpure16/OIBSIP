function temperature(){
    let degree=document.getElementById("degree").value;
     let Measure=document.getElementById("Measure").value;

    let result=0;
    if(Measure=="celsius"){
        result=(degree-32)*5/9;
    }
    else if(Measure=="fahrenheit"){
        result=degree*9/5+32;
      
        
    }
    else if(Measure=="Kelvin_in_cel"){
        result=degree-273.15;
       
    }
    else if(Measure=="Kelvin_in_fah"){
        result=(degree-273.15)*9/5+32;
        
    }
    document.getElementById("result").value = result.toFixed(2);
    console.log(degree,Measure,result);
}
   
