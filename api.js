function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        mode:"cors"
    }

    if(body!==null){
        options.body=JSON.stringify(body);
        
    }

    return fetch(url,options);

    
}

async function getAllComputers(){
    let data=await api("computers",'GET');

    data=await data.json();

    return data;
}

//functie care adaugaun computer
async function addComputer(car){
    let data=await api("add",'POST',computer);

    data=await data.json();

    return data;
}

async function getAllMarci(){
    let data=await api("computers/marci",'GET');

    data=await data.json();

    return data;
}

async function getAllComputersByMarca(marca){
    let data=await api(`masini/${marca}`,'GET');

    data=await data.json();

    console.log("data"+data);

    return data;
}


async function deleteComputer(computerId){
    let data=await api(`update`,'PUT',car);

    return data;
}