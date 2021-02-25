const userInputForm = document.querySelector('input');
const userInputunderline =  document.querySelector('span.user-input-underline')
userInputForm.addEventListener('keyup' , userInputKeyup1 ,false)
userInputForm.addEventListener('mouseover' ,userInputMouseon ,false)
userInputForm.addEventListener('mouseleave' ,userInputMouseleave, false)

userInputunderline.isBlue = 0
userInputunderline.isGreen = 0

async function userInputMouseon(event){

    if(!userInputunderline.isBlue && !userInputunderline.isGreen){
        userInputunderline.isBlue =1
        await userInputunderline.animate([
            
            {
                width:"60%" ,
                background:"#6699ff"

            }] , 200).finished
        
        userInputunderline.isBlue=0
        userInputunderline.style.background= "#6699ff"
        userInputunderline.style.width ="60%"
    }

}


async function userInputMouseleave(event){
    
    if(!userInputunderline.isGreen){
        await userInputunderline.animate([
            {
                width:"30%" ,
                background:'#ff4d4d'
            }
        ] ,200).finished
        userInputunderline.style.width= "30%"
        userInputunderline.style.background ="#ff4d4d"  
    }

}



async  function userInputKeyup1(event){
    if(userInputForm.value !== ""){
        await userInputunderline.animate([
            {
                width:"90%" ,
                background:"lightgreen"
            }
        ] ,200).finished
        userInputunderline.style.width ="90%"
        userInputunderline.style.background ="lightgreen"
        userInputunderline.isGreen =1
    }
    else{
        
        await userInputunderline.animate([
            {
                width:"60%" ,
                background:'#6699ff'
            } 
         
        ] ,250).finished
        userInputunderline.style.width = "60%"
        userInputunderline.style.background="#6699ff"
        userInputunderline.isGreen =0
    
    }
    
    
}

