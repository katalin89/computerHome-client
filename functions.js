function createRow(computer){
    let tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${computer.id}</td>
    <td>${computer.marca}</td>
    <td>${computer.pret}</td>
    <td>${computer.description}</td>
    `
}

/*function createRow(car){

   
    let tr=document.createElement("tr");


    tr.innerHTML=`
    <td>${car.id}</td>
    <td>${car.marca}</td>
    <td>${car.model}</td>
    <td>${car.culoare}</td>
    <td>${car.nrDeLocuri}</td>
    <td>${car.pret}</td
    
    `
    console.log(car.nrDeLocuri);
    console.log(car.model);

    return tr;
  
}

function attachRows(arr){
    let container=document.querySelector(".container");
    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
       // console.log(arr[i]);
    }
}

function  returnMarcile(arr){
    let arrNou;
    for(let i=0;i<arr.length;i++){
        arrNou.appendChild(arr[i].marca);
    }
    return arrNou;
}

 function returnMasina(data,marca){
    for(let i=0;i<data.length;i++){
        if(data[i].marca==marca){
            return data[i].marca;
        }

    }
    return -1;
 }
 


*/