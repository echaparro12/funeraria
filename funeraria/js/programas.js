function change(ciclo, programas){
    ciclo = document.getElementById(ciclo);
    programas = document.getElementById(programas);
    programas.value ="";
    programas.innerHTML = "";
    if(ciclo.value == "sepultura"){
    var optionArray = ["|","Plan Integral - 1.000.000|Plan Integral - 1.000.000",
                       "Plan Intermedio - 2.000.000|Plan Intermedio - 2.000.000",
                       "Plan Superior - 3.000.000|Plan Superior - 3.000.000"];
    } else if(ciclo.value == "cremacion"){
    var optionArray = ["|","Plan Integral - 1.500.000|Plan Integral - 1.500.000",
                       "Plan Intermedio - 2.500.000|Plan Intermedio - 2.500.000",
                       "Plan Superior - 3.500.000|Plan Superior - 3.500.000"];                            
};

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    programas.options.add(newOption);
  };    
}