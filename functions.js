async function attachHomePage(){
    let container=document.querySelector(".container");

    container.inner=`
    <h1>Computer</h1>
    <p><a class="button new-computer">Create New Computer</a><p>

    <table>
        <thead>
            <tr>
            <th class="id>Id</th>
            <th class="marca">Marca</th>
            <th class="pret">Pret</th>
            <th class="description">Description</th>

            </tr>
        </thead>

        <tbody class=container-computers>

        </tbody>

    </table>
    `

    container.addEventListener("click",(e)=>{
        let data=e.target.parentNode;

        if(data.textContent="Price"){
            sortByPrice();
        }
    })

    container.addEventListener("click",(e)=>{
        let data=e.target.parentNode;
       if(data.textContent=="Price"){
        sortByPrice();
       }
    })

    let data=await getAllComputers();
    attachRows(data);

    let btnNewComputer=document.querySelector(".new-computer");

    btnNewComputer.addEventListener("click",(e)=>{
        attachNewComputerPage();
    });

    let rowsContainer=document.querySelector(".container-computer");

    rowsContainer.addEventListener("click",(e)=>{
         let data=e.target.parentNode;
          
         let computerProperties=data.children;

         //computer.id=computerProperties[0].innerHTML;

         const computer={
            computerId:computerProperties[0].innerHTML,
            marca:computerProperties[1].innerHTML,
            pret:computerProperties[2].innerHTML,
            description:computerProperties[3].innerHTML

         }
         attachUpdatePage(computer);
    });

}

function update(){
    let inp1=document.getElementById('marca');
    let inp2=document.getElementById('pret');
    let inp3=document.getElementById('description');

    let computer ={
        marca:inp1.value,
        pret:inp2.value,
        description:inp3.value,
    }

    updateComputer(computer);
}

async function attachUpdatePage(computer){
    let container=document.querySelector("container")

    container.innerHTML=`
    <h1>Update computer</h1>
        <input name="computerId" class="computerId" type=hidden" value "${computer.computerId}"/>

        <ul class="error">

        </ul>

        <p>
            <label for="marca"> Marca</label>
            <input name="marca" type="text"  class="marca" id="marca" value="${computer.marca}"disabled>
        </p>

        <p>
            <label for="pret">Pret</label>
            <input name="pret" type="text" class="pret" id="pret" value="${computer.pret}">
        /p>

        <p>
            <lable for="description">Description</label>
            <input name="description" type="text" class="description" id="description" value="${computer.description}">

        </p>

        <div>
            <button class="update">Update car</button>
            <button class="delete">Delete car</button>
            <button class="cancel">Cancel</button>
        </div>

     `

     let btnCancel=document.querySelector(".cancel")
     btnCancel.addEventListener("click",()=>{
        attachHomePage();
     })

  let btnUpdate=document.querySelector(".update");
  btnUpdate.addEventListener("click",async()=>{
        let input1=document.querySelector(".marca");
        let input2=document.querySelector(".pret");
        let input3=document.querySelector(".description");

        let computer={
            marca:input1.value,
            pret:input2.value,
            description:input3.value,

        }

        let erors=[];

        if(input2.value==""){

            erors.push("trebuie pusa pretul");

            input2.style.borderColor="red";
        }

        if(input3.value==""){
            erors.push("trebuie pusa descrierea");

            input3.style.borderColor="red";


        }

        if(erors.length>0){
            let errorContainer=document.querySelector(".error");
             
            let h1=document.createElement("h1");
            h1.textContent="Ooops";

            errorContainer.appendChild(h1);

            for(let i=0;i<erors.length;i++){
                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
            }
        }else{
            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML="";
        }
        if(erors.length==0){
            let data=await updateComputer(car);
            attachHomePage();
        }
  })

  let btnDelete=document.querySelector(".delete");
    btnDelete.addEventListener("click",async()=>{
        let input=document.querySelector(".cardId");

        let carId=input.value;

        let data=await deleteCar(carId);

        attachHomePage();

    });
  
}

function attachNewComputerPage(){
    let container=document.querySelector(".container");

    container.innerHTML=`
    
    <h1>New Computer</h1>

    <ul class="error">
    </ul>

      
        <p>
            <label for="title">Marca</label>
            <input name="title" type="text" id="marca" class="marca">
        </p>
        

        <p>
            <label for="year">Pret</label>
            <input name="year" type="text" id="pret" class="pret">
        </p>

         <p>
            <label for="year">Description</label>
            <input name="year" type="text"  class="description" id="description">
        </p>

        <div class="butoane">
            <button class="add">Add new  Computer</button>
            <button class="cancel">Cancel</button>
            </div
    `

    let btnCancel=document.querySelector(".cancel")
    btnCancel.addEventListener("click",()=>{
        attachHomePage();
    })

    let btnAddNewComputer=document.querySelector(".add");

    btnAddNewComputer.addEventListener("click",async()=>{
        
    let inp0=document.getElementById('computerId');
    let inp1=document.getElementById('marca');
    let inp2=document.getElementById('pret');
    let inp3=document.getElementById('description');

   let computer={
            marca:inp1.value,
            pret:inp2.value,
            description:inp3.value,

        }

        let erors=[];

        if(inp1.value=="" && inp2.value==0 && inp3.value==""){
            erors.push("Nu ati completat campurile");
        }

        if(inp1.value==""){
            erors.push("Trebuie pus marca");

            inp1.style.borderColor="red";
        }

        if(inp2.value==0){
            erors.push("Trebuie introdus pretul");
        }

        if(inp3.value==""){
            erors.push("Trebuie introdus descrierea")

            inp3.style.borderColor="red";
        }

        if(erors.length>0){
            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML="";

            let h1=document.createElement("h1");

            h1.textContent="Ooops";

            errorContainer.appendChild(h1);

            for(let i=0;i<erors.length;i++){
                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
            }
        }else{
            let data=await addComputer(computer);
            attachHomePage();
        }
    })

}

function createRow(computer){
    let tr=document.createElement("tr");

    tr.innerHTML=`
        <td>${computer.id}</td>
        <td>${computer.marca}</td>
        <td>${computer.pret}</td>
        <td>${computer.description}</td>
    `

    return tr;
}

function attachRows(arr){

    let container=document.querySelector(".container");

    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }

}

