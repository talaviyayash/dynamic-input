const formContainerElement = document.getElementById("form-container")
const input  = []
function a(event){
console.log(event.target.value)
}
function makeDaynamic(obj , lableToINput , errorElement){
    let stringInput
    switch(obj.type) {
        case  "text":
        case  "password":
        case  "button":
        case  "email":
        case  "date":
        case  "file":
            stringInput = "<div> "
            if(lableToINput){
                stringInput = stringInput +`<label for=${lableToINput.for} > ${lableToINput.value}</label>  ` 
            }
            stringInput = stringInput+`<input   `
            Object.entries(obj).forEach(([key , value])=>{
                stringInput = stringInput + ` ${key}="${value}" `
            })
            console.log(stringInput)
            if(errorElement){
                stringInput = stringInput + ` > <div `  
                Object.entries(errorElement).forEach(([key , value])=>{
                    stringInput = stringInput + ` ${key}="${value}" `
                })
                stringInput = stringInput + `> </div>`
                console.log(stringInput)
            }
            else{
                stringInput = stringInput + ` > </div>`
            }
            formContainerElement.innerHTML =formContainerElement.innerHTML+ stringInput
          break;
        case  "radio":

          break;
        case  "select":
            stringInput = "<div> "
            if(lableToINput){
                stringInput = stringInput +`<label for=${lableToINput.for} > ${lableToINput.value}</label>  ` 
            }
            stringInput = stringInput+`<select id=${obj.id ?? ""} class=${obj.class ?? ""}  >`
            obj.option.forEach((element)=>{
                stringInput = stringInput + `<option value="${element.value}" ${element.selected ? "selected" : "" } >${element.text}</option>`
            })
            stringInput= stringInput + `</select> </div>`
            formContainerElement.innerHTML =formContainerElement.innerHTML+ stringInput
        default:
      }
}
makeDaynamic({type : "radio",checked:"true" ,  value:"2018-07-22",id:"red",name:"red",placeholder:"sax", class: "asddasd" ,
oninput: "a(event)"} ,{for: "red" , value : "clicked"})
makeDaynamic({type : "text",checked:"true" ,id:"green",name:"red",placeholder:"sax", class: "asddasd" ,
oninput: "a(event)"} , {for: "green" , value : "clicked"},{class:"aslc" , id: "Csann"})
// makeDaynamic({type : "select",option : [{ value : "" , text : "Select Choice"} ,{ value : "city" , text : "city"} ,{ value : "state" , text : "state" , selected : true}]}
//     ,{id:"" , class:""}
//  )