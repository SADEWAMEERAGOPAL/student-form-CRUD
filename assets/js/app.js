let cl= console.log;

const studenForm=document.getElementById("studenForm");
const fnamecontrol=document.getElementById("fname")
const lnamecontrol=document.getElementById("lname")
const emailcontrol=document.getElementById("email")
const contactcontrol=document.getElementById("contact")
const studenttable=document.getElementById("studenttable");
const addstdform=document.getElementById("addstdbtn");
const updatestdform=document.getElementById("updatestdbtn");


let stdarr=[
{fname: 'jhon', lname: 'doe', email: 'jd@gmail.com', contact: 7889999999, stdId: '8a119649-e73d-42fa-953f-6d95a3e519f8'},
{fname: 'june', lname: 'doe', email: 'jd@gmail.com', contact: 7889999999, stdId: '7b85f95d-900c-402c-8c94-82e83ab779b1'}

];



const uuid = () => {
  return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
    /[xy]/g,
    character => {
      const random = (Math.random() * 16) | 0
      const value = character === 'x' ? random : (random & 0x3) | 0x8
      return value.toString(16)
    }
  )
}

cl(uuid());

const create_table=(arr)=>{
    let result="";

    arr.forEach((ele, i)=>{
        result+=`      <tr id="${ele.stdId}">
                                        <td>${i+1}</td>
                                        <td>${ele.fname} ${ele.lname}</td>
                                        <td>${ele.email}</td>
                                        <td>${ele.contact}</td>
                                        <td> <button class="btn btn-outline-success btn-sm" onClick="EDIT_OBJ(this)">EDIT</button></td>
                                        <td><button class="btn btn-outline-danger btn-sm" onClick="REMOVE_OBJ(this)">REMOVE</button>
                                        </td>
                                      </tr>
       `
    })
  studenttable.innerHTML=result;  
}
create_table(stdarr)




let Edit_id
const EDIT_OBJ=(ele)=>{
//cl("click")

 Edit_id=ele.closest("tr").id;
//cl(Edit_id)

let Edit_ob=stdarr.find(std=>std.stdId===Edit_id)
//cl(Edit_ob)



fnamecontrol.value=Edit_ob.fname;
lnamecontrol.value=Edit_ob.lname;
emailcontrol.value=Edit_ob.email;
contactcontrol.value=Edit_ob.contact;

addstdform.classList.add("d-none");
updatestdform.classList.remove("d-none")


}

const onUPDATE_OBJ=()=>{
    let UPDATE_ID=Edit_id;

   
     const update_ob={
        fname:fnamecontrol.value,
        lname:lnamecontrol.value,
        email: emailcontrol.value,
        contact: contactcontrol.value,
        stdId: UPDATE_ID

    }
    cl(update_ob)

   studenForm.reset(); 

  let getindex=stdarr.findIndex(std=>std.stdId===UPDATE_ID);


  stdarr[getindex]=update_ob;


  
  let tr=document.getElementById(UPDATE_ID);
  let trschidren=tr.children;
 cl(trschidren)

 trschidren[1].innerText=`${update_ob.fname} ${update_ob.lname}`;
 trschidren[2].innerText=`${update_ob.email}`;
 trschidren[3].innerText=`${update_ob.contact}`;


 addstdform.classList.remove("d-none");
 updatestdform.classList.add("d-none");


}





const  REMOVE_OBJ=(ele)=>{
 

 let getConfirm=confirm("are u sure"); 

 if(getConfirm===true){
let REMOVE_ID=ele.closest("tr").id;
 
let getIndex=stdarr.findIndex(todo=>todo.stdId===REMOVE_ID)

cl(getIndex)


stdarr.splice(getIndex, 1);


ele.closest("tr").remove();
 }
}



const Onstdsubmit=(eve)=>{
    eve.preventDefault();
  cl("click")

 
  let cerate_ob={
    fname: fnamecontrol.value,
    lname: lnamecontrol.value,
    email:emailcontrol .value,
    contact:contactcontrol.value,
    stdId: uuid(),
  }

  stdarr.push(cerate_ob)


  let tr=document.createElement("tr")
  tr.id=cerate_ob.stdId;

  tr.innerHTML=`                        <td>${stdarr.length}</td>
                                        <td>${cerate_ob.fname} ${cerate_ob.lname}</td>
                                        <td>${cerate_ob.email}</td>
                                        <td>${cerate_ob.contact}</td>
                                        <td> <button class="btn btn-outline-success btn-sm" onClick="EDIT_OBJ(this)">EDIT</button></td>
                                        <td><button class="btn btn-outline-danger btn-sm" onClick="REMOVE_OBJ(this)">REMOVE</button>
                                        </td> `

studenttable.append(tr)
}



studenForm.addEventListener("submit", Onstdsubmit)
updatestdform.addEventListener("click",onUPDATE_OBJ)