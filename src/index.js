function AddProject(){
   const popup = document.getElementById("add-project-popup")
   const button = document.getElementById("button-add-project")
   button.addEventListener("click", () => addIt());


    function addIt(){
        popup.classList.add("clicked");

    }
}


AddProject();


function cancelBtn(){
    const popup2 = document.getElementById("add-project-popup")
    const button2 = document.getElementById("button-cancel-project-popup")
    button2.addEventListener("click", () => removeIt());

    function removeIt(){
        popup2.classList.remove("clicked");
    }
}


cancelBtn();

function appendProject(){
    const input = document.getElementById("input-add-project-popup");
    const addBtn = document.getElementById("button-add-project-popup");
    addBtn.addEventListener("click",() => AddProject());

    function AddProject(){
        const name = input.value;
        if(name == ""){
            return alert("please enter at least 1 letter");
        }
        else{
            const Project= document.createElement("button");
            Project.innerHTML = name;
            Project.classList.add("project-item")
            const List = document.getElementById("projects-list");
            List.appendChild(Project);
            
        }
    }
}


appendProject();


function DisplayTabs(){
    const inbox = document.getElementById("button-inbox-projects");
    const today = document.getElementById("button-today-projects");
    const thisWeek = document.getElementById("button-week-projects");
    const butts = document.querySelectorAll(".button-default-project");
    butts.forEach(button=> button.addEventListener("click", activeTab))
    const prev = document.getElementById("project-preview");
    const display = document.createElement("h1");
    prev.appendChild(display);
    display.id ="project-name";
    display.innerHTML = "Inbox";
    const task = document.createElement("button");
    prev.appendChild(task);
    task.id = "addProject"
    task.innerHTML = "+ Add a Project"
    function activeTab(e){
      
      
       reset();
       

        if(e.target.id == "button-inbox-projects"){
            inbox.classList.add("activateTab")

        }
        else if (e.target.id == "button-today-projects"){
            today.classList.add("activateTab");

        }
        else if (e.target.id =="button-week-projects"){
            thisWeek.classList.add("activateTab");
        } 
        renderPreview(); 
        }
    function reset(){
            butts.forEach(button=> button.classList.remove("activateTab"));
            
        }
        
          function renderPreview(){

            

                if(inbox.classList.contains("activateTab")){
                    display.textContent = inbox.textContent;
                    taskCreation();


                }else if(today.classList.contains("activateTab")){
                   
                    display.textContent = today.textContent;
                    
                }else if(thisWeek.classList.contains("activateTab")){
                   
                    display.textContent = thisWeek.textContent;
                    
                }

                return 
            }

           function taskCreation(){
                
            }
            
    }




DisplayTabs();