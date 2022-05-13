function cateList() {


    fetch("https://local.sohailuniversity.edu.pk:90/Handlers/SuWebNewsEventHandler.ashx")

        .then(function (response) {

            return response.json()


        })

        .then(function (data) {

            
            
            var listCate = data.Lst_Cat
            
            var list = document.getElementById("main")


            var data = data

            listCate.forEach(lst => {



                list.innerHTML += `
            
            

            <li class="tablist" onclick=getData(${lst.cat_id})>
                       

                <a>
            
                    <i class='${lst.icon}'></i>
                    ${lst.cat_desc} 

             
                </a>

            
            </li>

            
            `




            });



            active()

            return data


        })



}

function getData(id) {


    var tabContent = document.getElementById('tab')

    fetch("https://local.sohailuniversity.edu.pk:90/Handlers/SuWebNewsEventHandler.ashx")

        .then(function (response) {

            return response.json()


        })


        .then(function (data) {



            var descLst = data.NewEventsResultsData


            descLst.forEach(tablst => {


                if (tablst.cat_id === id) {

                    tabContent.innerHTML = `
                

                <div class="datalist">


                    <div class = "proli">
          
                        <div class="calender">
          
                            MAR
          
                        </div>
        
                        <div class="calender1">
          
                            21
          
                        </div>
          
          
                    </div>


                    <li class="list">
                    
                        ${tablst.cat_desc}  
                

                    </li>


                    <div class="view" >
          
                        <div class="sucbtn">
          
                            <a class="btn btn-success btn-sm" href="${tablst.url} target="_blank" title="View"><i class="fa fa-eye"></i></a>
          
                        </div>
          
                    
                    </div>
          
                    
                    
                </div>
                


                
                `





                }
                

                // else{



                //                 tabContent.innerHTML = `
                

                //                 <div class="datalist">
                
                
                //                     <div class = "proli">
                          
                //                     </div>
                
                
                //                     <li class="list" style="text-align : center">
                                    
                //                         No Data Available  
                                
                //                     </li>

                                        
                                        
                //                     </div>

                //                 `





                        

                    





                // }


            });



        })





}




function active() {


    var ul = document.querySelectorAll(".mainlist a")




    for (i = 0, length =  ul.length ; i < length ; i++) {



        // ul[0].className = "active"

        ul[i].onclick = function() {



            var li = document.querySelector(".mainlist li.active")

            if (li) li.classList.remove("active");
            this.parentNode.classList.add('active')



        }




    }


}



