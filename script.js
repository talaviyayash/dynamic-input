const formContainerElement = document.getElementById("form-container")
const input  = []
function a(event){
console.log(event.target.value)
}
function makeDaynamic(obj , lableToINput){
    let stringInput
    switch(obj.type) {
        case  "text":
        case  "password":
        case  "button":
        case  "email":
        case  "date":
        case  "file":
        case  "radio":
            stringInput = "<div> "
            if(lableToINput){
                stringInput = stringInput +`<label for=${lableToINput.for} > ${lableToINput.value}</lable>  ` 
            }
            console.log(stringInput)
            stringInput = stringInput+`<input   `
            Object.entries(obj).forEach(([key , value])=>{
                stringInput = stringInput + ` ${key}="${value}" `
            })
            stringInput = stringInput + ` /> </div>`
            console.log(stringInput)
            formContainerElement.innerHTML =formContainerElement.innerHTML+ stringInput
          break;
        default:
          // code block
      }
}


makeDaynamic({type : "radio",checked:"true" , placename:"click it", value:"2018-07-22",id:"red",name:"red",placeholder:"sax",accept:"image/png, image/jpeg" , class: "asddasd" ,
oninput: "a(event)"} ,{for: "red" , value : "clicked"})
makeDaynamic({type : "text",checked:"true" , placename:"click it", value:"2018-07-22",id:"green",name:"red",placeholder:"sax",accept:"image/png, image/jpeg" , class: "asddasd" ,
oninput: "a(event)"} ,{for: "green" , value : "clicked"})