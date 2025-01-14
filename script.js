const arr_list = [];

document.getElementById('add-btn').addEventListener('click',func) 



function list_creaton(li,full_task){
    
    li.classList.add('li-style');
    let complete_btn = document.createElement('button');
    complete_btn.innerText = "Complete";
    let remove_btn = document.createElement('button');
    remove_btn.innerText = "remove" ;
    let tsk_con = document.createElement('span')
    tsk_con.innerText = full_task;
    li.appendChild(tsk_con)

    complete_btn.classList.add('li-style-button');
    remove_btn.classList.add('li-style-button');
    
    document.getElementById('list-details').appendChild(li);
    li.appendChild(remove_btn);
    li.appendChild(complete_btn);
    

    complete_btn.addEventListener('click',function(){

        if(complete_btn.innerHTML == "Complete"){
            li.style.textDecoration = "line-through";
            li.style.color = "#b6b6b6"
            complete_btn.innerHTML = "Undo";
        }else{
            li.style.textDecoration = "none";
            li.style.color = "#000000"
            complete_btn.innerHTML = "Complete";
        }
    });

    remove_btn.addEventListener('click',function(){
        let index = arr_list.indexOf(tsk_con.innerText)
        // console.log(index);
        if(index !== -1){
            arr_list.splice(index,1)
        }
        li.remove();

    });
}


const filter_list = document.getElementById('category');


function func(event){
    event.preventDefault();

    const x = document.getElementById("task-des").value;
    const y = document.getElementById('category1').value;

    const li = document.createElement('li');
    let full_task = x+" - "+ y;
    arr_list.push(full_task);

    list_creaton(li,full_task);

    document.getElementById("task-des").value ="";
    document.getElementById('clear_button').style.display = "block";

    document.getElementById('clear_button').addEventListener('click',function(){
        li.remove();
        arr_list.splice(0,arr_list.length)
        document.getElementById('clear_button').style.display = "none";
    });

    filter_list.addEventListener('click',function(){
        li.style.display = "none";
    });
}





filter_list.addEventListener('click',function(){

    if(filter_list.value == "Work"){
        let work_list = arr_list.filter(task => task.includes("Work"));

        work_list.forEach(function(work_li){
            let li = document.createElement('li'); 

            list_creaton(li,work_li)
            li.style.display = "block";

            filter_list.addEventListener('click',function(){
                li.style.display = "none";
            });

            document.getElementById('clear_button').addEventListener('click',function(){
                li.remove();
                arr_list.splice(0,arr_list.length)
                // document.getElementById('clear_button').style.display = "none";
            });

        });



    }else if(filter_list.value == "Personal"){
        let personal_list = arr_list.filter(task => task.includes("Personal"));
        
        personal_list.forEach(function(personal_li){
            let li = document.createElement('li'); 

            list_creaton(li,personal_li)
            li.style.display = "block";

            filter_list.addEventListener('click',function(){
                li.style.display = "none";
            });


            document.getElementById('clear_button').addEventListener('click',function(){
                li.remove();
                arr_list.splice(0,arr_list.length)
                // document.getElementById('clear_button').style.display = "none";
            });

        });


    }else if(filter_list.value == "Urgent"){
        let urgent_list = arr_list.filter(task => task.includes("Urgent"));
        
        urgent_list.forEach(function(urgent_li){
            let li = document.createElement('li'); 

            list_creaton(li,urgent_li)
            li.style.display = "block";

            filter_list.addEventListener('click',function(){
                li.style.display = "none";
            });

            document.getElementById('clear_button').addEventListener('click',function(){
                li.remove();
                arr_list.splice(0,arr_list.length)
                // document.getElementById('clear_button').style.display = "none";
            });
        });
       
    

    }else{
        arr_list.forEach(function(all_li){
            let li = document.createElement('li'); 

            list_creaton(li,all_li)
            li.style.display = "block";

            filter_list.addEventListener('click',function(){
                li.style.display = "none";
            });


            document.getElementById('clear_button').addEventListener('click',function(){
                li.remove();
                arr_list.splice(0,arr_list.length)
                // document.getElementById('clear_button').style.display = "none";
            });
        });


    }


});

document.getElementById('clear_button').addEventListener('click',function(){
    alert('Are you shure???? Do yo want to clear all the Tasks?');
});
