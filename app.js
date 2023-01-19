fetch("http://localhost:8080/kati/v1/computers").then(data=>{
    return data.json();
}).then(data=>{
    attachRows(data);
})

fetch("http://localhost:8080/api/v1/computers/marci").then(data=>{
    return data.json();
}).then(data=>{
    createOptions(data);
})

function createOptions(marci){
    let marcile=document.querySelector(".marci");
    for(let i=0;i<marci.length;i++){
        let option=document.createElement('option');
        option.value=marci[i];
        option.textContent=marci[i];
        marcile.appendChild(option);
    }
}


/* function createOptions(marci){
    let marcile=document.querySelector(".marci");
    for(let i=0;i<marci.length;i++){
      let option=document.createElement('option')

      option.value=marci[i];
      option.textContent=marci[i];
      marcile.appendChild(option);
    }
  }*/
let marca=document.querySelector('.marci');
marca.addEventListener("change",(e)=>{
    fetch(`http://localhost:8080/api/v1/computers/${marca.value}`)
    .then(data=>{
        return data.json();
    }).then(data=>{
        attachRows(data);
    })
})

