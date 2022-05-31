const { createApp } = Vue

  createApp({
  

    data(){
        return {
            id:"flexCheckDefault",
            test:'Sing in',
            ses:'w-100 btn btn-lg btn-info'
        }
    },
    methods : {
       sec(){
           this.id = "flexCheckChecked"
           if(this.id == "flexCheckChecked"){
               this.test = 'Sing out'
               this.ses = 'w-100 btn btn-lg btn-success'
           }else{
            this.test = 'Sing in'
            this.ses = 'w-100 btn btn-lg btn-info'
           }
       }

    }
  }).mount('#game');