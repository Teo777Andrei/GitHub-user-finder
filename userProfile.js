const userCard = document.querySelectorAll('div.card')[1]
const loadingCard =  userCard.nextElementSibling
const alertCard = loadingCard.nextElementSibling
const cardRow1 = userCard.children[0]
const cardH2 =  cardRow1.firstElementChild.firstElementChild.firstElementChild
const imageCard = cardRow1.firstElementChild.children[1]
const profileLink =  cardRow1.firstElementChild.lastElementChild
const userInfoList= cardRow1.children[1].firstElementChild
const imageLoading =  loadingCard.children[0]
let ulCollection = userInfoList.children



userCard.style.display= 'none'
loadingCard.style.display = "none"
alertCard.style.display = "none"
gitInfo  = new GetInfo('https://api.github.com/users' ,"98c4ce47e0d482410094" ,"5fe10f266a92115e373f47489514bfe6ad10e995")

userInputForm.addEventListener('keyup' ,userInputKeyup2)

let timeoutId  = -1
function userInputKeyup2(event){
    
    clearTimeout(timeoutId)
    
    timeoutId = setTimeout(() =>{
            userCard.style.display =  'none'
            alertCard.style.display = "none"
            loadingCard.style.display=''
            setTimeout(async ()=>{
                const fetchBlock =  await gitInfo.fetchInfo(event.target.value)
                if(fetchBlock.message=== undefined){
                    loadingCard.style.display= "none"
                    userCard.style.display= "block"
                    imageCard.src= fetchBlock.avatar_url
                    cardH2.innerText = `User found :    ${fetchBlock.login}`
                    profileLink.href =  fetchBlock.html_url
                    let listStyle= `style="font-family:'Quicksand';font-size:20px"`
                    ulCollection[0].innerHTML = `<p ${listStyle}>name : ${fetchBlock.name}</p>`
                    ulCollection[1].innerHTML = `<p ${listStyle}>location : ${fetchBlock.location}</p>`
                    ulCollection[2].innerHTML = `<p ${listStyle}>user id : ${fetchBlock.id}</p>`
                    ulCollection[3].innerHTML = `<p ${listStyle}>public repos : ${fetchBlock.public_repos}</p>`
                    ulCollection[4].innerHTML = `<p ${listStyle}>followers : ${fetchBlock.followers}</p>`
                    ulCollection[5].innerHTML = `<p ${listStyle}>created at : ${fetchBlock.created_at}</p>` 
                    
                   
                }
                else {
                    userCard.style.display="none"
                    loadingCard.style.display= "none"
                    alertCard.style.display= ""
                }
        } ,800)
        
        } ,500)
    

}
