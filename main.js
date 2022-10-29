items=document.getElementById("items")

button=document.getElementById("pagination")

/// initilizing array
var array=[

    {
        "id":1,
        "name":"Aditya",
        "class":"premium",
        "post":"Sap-Ui Intern",
        "img": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "address":"west mangalpuri delhi"
    },  
    {
        "id":2,
        "name":"Pritam",
        "class":"premium",
        "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "post":"Designer",
        "address":"south delhi "
    } ,
     {
        "id":3,
        "name":"shashi",
        "class":"premium",
        "img":"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "post" :"Manager",
        "address":"gorakhpu up"
    },
    {
        "id":4,
        "name":"Ajay",
        "class":"premium",
        "img":"https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg",
        "post" :"Manager",
        "address":"Bangalore  karnataka"
    },
    {
        "id":5,
        "name":"Preeti",
        "class":"premium",
        "img":"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        "post" :"UI-Team",
        "address":"lormem ispum"
    },
    {
        "id":6,
        "name":"shree",
        "class":"premium",
        "img":"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "post" :"Hr-Manager",
        "address":"India"
    },
    {
        "id":7,
        "name":"Diya",
        "class":"premium",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSciXaVGugEab8zPSKgMYnR-AIlFN2A40EJIelfKZeYXlwGIa7oE9FxYn9aHiTuVjjdBkk&usqp=CAU",
        "post" :"Team-Leader",
        "address":"lormem ispum"
    },
    {
        "id":8,
        "name":"jhon",
        "class":"premium",
        "img":"https://www.mydr.com.au/wp-content/uploads/2016/09/AdobeStock_310152511-scaled.jpg",
        "post" :"Manager",
        "address":"Intern"
    },
    {
        "id":9,
        "name":"mark",
        "class":"premium",
        "img":"https://image.shutterstock.com/image-photo/isolated-shot-young-handsome-male-260nw-762790210.jpg",
        "post" :"Manager-UI-Team",
        "address":"India"
    },
    {
        "id":10,
        "name":"Jony",
        "class":"premium",
        "img":"https://image.shutterstock.com/image-photo/close-portrait-young-smiling-handsome-260nw-1180874596.jpg",
        "post" :"Manager",
        "address":"lormem ispum"
    },
    {
        "id":11,
        "name":"Kiya",
        "class":"premium",
        "img":"https://previews.123rf.com/images/antonioguillem/antonioguillem1505/antonioguillem150500006/40317248-frau-l%C3%A4chelnd-mit-perfekten-l%C3%A4cheln-und-wei%C3%9Fe-z%C3%A4hne-in-einem-park-und-blick-auf-kamera.jpg",
        "post" :"Manager",
        "address":"lormem ispum"
    }
]
let start=0
// using map method to poplulate data 
 function starter (s1=0){
     let start=s1
     let stop=start+3;

     let array1=array.slice(start,stop)
let html= ""
array1.map(element=(user,index)=>{
    return html+=`
    <div class="col-md-3">
     <div class="user_pic"> <img src=${user.img} class="card-img-top w-100" alt="${user.name}"  /></div>
      <div class="card-body">
        <h5 class="card-title">Name : ${user.name}</h5>
        <h5 class="card-title">Id : ${user.id}</h5>
        <p class="card-text">Post : ${user.post}</p>
        <p class="card-text">address : ${user.address}</p>
      </div>
    </div>
    
    `
    
    
})
let arrayelem=document.getElementById("items")
if(array1.length !=0){
    arrayelem.innerHTML=html
}
else{
    arrayelem.innerHTML=`nothing to show`
}

 }
  starter()
// adding page and populating page
function pageNo(){
    let next=`<li class="page-item"><a class="page-link " id="Next">Next</a></li>
    `
    let previous=`<li class="page-item "><a class="page-link" id="Previous">Previous</a></li>`

    let pageText=0;
    let pageLength= Math.round(array.length/3)
    let pageHtml="";
    let pageNo=document.getElementById("page")
for(let i=pageText;i<=pageLength-1;i++){
    pageHtml+=`<li class="page-item"><a class="page-link " id="page${i+1}">${i+1}</a></li>
   `
}


if (pageNo!=0){
    
    pageNo.innerHTML+=previous
    pageNo.innerHTML+=pageHtml
    pageNo.innerHTML+=next
    
  
   
}

}
pageNo()






/// adding logic to the page function and render
button.addEventListener("click",function(e){
    
    buttonText=e.target.innerText;
        
        if(buttonText=="Next" && start<array.length-2){
             nextBtn=document.getElementById('Next')
             nextBtn.classList.add("text-success")
            
            start+=3
            starter(start)
            
           
           

            
        }
       else if(buttonText=="Previous"&& start>0){
        nextBtn=document.getElementById('Previous')
        nextBtn.classList.add("text-success")
            start-=3
            starter(start)
            
           
        }
        else if (buttonText==1){
            start=0
            starter(start)
            
        }
       else if (buttonText==2){
            start=3
            starter(start)
            
        }
       else if (buttonText==3){
            start=6
            starter(start)
            
        }
       else if (buttonText==4){
            start=9
            starter(start)

        }
         activePage()

      



})
//// adding active page links
function activePage(){
     PageActive=document.getElementsByClassName("page-link")
   
     page=0
    if (start==0){
        page=1
    }
    if (start==3){
        page=2
    }
    if (start==6){
        page=3
    }
    if (start==9){
        page=4
    }
   
   
 for (let i=1;i<=PageActive.length-2;i++){
     
    nextBtn=document.getElementById(`page${i}`)
     nextBtn.classList.remove("bg-danger")
   if (start!==0){
       
    nextBtn=document.getElementById(`page${page}`)
    nextBtn.classList.add("bg-danger")

   }
   if (start==0){
       
    nextBtn=document.getElementById(`page${page}`)
    nextBtn.classList.add("bg-danger")

   }

   

 }

 
}
activePage()





