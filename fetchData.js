class GetInfo{
    constructor(url ,clientId , clientSecret){
        this.url = url
        this.clientId = clientId
        this.clientSecret =  clientSecret
    }

    async fetchInfo(inputText){
        
        const getReq =await fetch(this.url+`/${inputText}?client_id=${this.clientId}&client_secret=${this.clientSecret}` ,{
                        method:"Get" ,
                        headers:{
                            "Content-type":"application/json"
                        }
                    })
      


        const profileResponse =  await getReq.json();
        console.log(profileResponse)
        return profileResponse
        
    }
}



