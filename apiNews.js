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

                var lstid = lst.cat_id

                let htmlCode = `
            
            

            <li class="tablist_cat" id="tabli" onclick=getData(${lst.cat_id})>
                       

                <a>
            
                    <i class='${lst.icon}'></i>
                    ${lst.cat_desc} 

             
                </a>

            
            </li>

            
            `

            list.innerHTML += htmlCode;

            // // $('#tab-content-0').addClass('in active_li');
            // $('.tablist_cat').eq(1).addClass('active_li');
            // console.log($('.tablist_cat').eq(0))
            
            
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


    var ul = document.querySelectorAll(".tablist_cat")

    var tabli = document.getElementsByClassName("tablist_cat")

    tabli[0].className = "active_li";



    ul.forEach(ull => {

        ull.addEventListener('click' , function(){


            ul.forEach(lli => lli.classList.remove('active_li'))
            this.classList.add('active_li')

        })


    })



    // var ul = document.querySelectorAll(".mainlist a")




    // for (i = 0, length =  ul.length ; i < length ; i++) {



        
    //     ul[i].addEventListener('click' , function() {
            
            

    //         var current = document.getElementsByClassName("tablist_cat")
    
    //         var li = document.querySelector(".mainlist li.active_li")
            
    //         if (li) 
            
    //         li.classList.remove("active_li");
    //         this.parentNode.classList.add('active_li')


    //     })




    // }


}

