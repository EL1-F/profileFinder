class UI{
    constructor(){
        this.profileContainer = document.getElementById('profileContainer');
        this.alert = document.getElementById('alert');
    }

    showProfile(profile){
        this.profileContainer.innerHTML=`
            <div class = "card card-body">
                <div class = "row">
                    <div class= "col-md-3">
                        <a href="https://placehalder.com">
                            <img src="https://via.placeholder.com/350x150" class="img-thumbnail"/>
                        </a>
                    </div>
                    <div class= "col-md-9">
                        <h4>Contact</h4>
                        <ul class = "list-group-item">
                            <li class= "list-group-item">
                                name: ${profile.name}
                            </li>
                            <li class= "list-group-item">
                                username: ${profile.username}
                            </li>
                            <li class= "list-group-item">
                                email: ${profile.email}
                            </li>
                            <li class= "list-group-item">
                                adress:
                                ${profile.address.street}
                                ${profile.address.city}
                                ${profile.address.zipcode}
                                ${profile.address.suite}
                            </li>
                            <li class= "list-group-item">
                                phone: ${profile.phone}
                            </li>
                            <li class= "list-group-item">
                                website: ${profile.website}
                            </li>
                            <li class= "list-group-item">
                                company: ${profile.company.name}
                            </li>
                        </ul>
                        <h4 class="mt-4">ToDo List</h4>
                        <ul id="toDo" class="list-group mt-2">
                        
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    showAlert(text){
        this.alert.innerHTML=`${text} is not found`;
    }

    showToDo(todo){

        let html = '';

        todo.forEach(item => {
            if (item.completed) {
                html += `
                    <li class="list-group-item text-success bg-dark" style="--bs-bg-opacity: .3;">
                        ${item.title}
                    </li>
                `;
            }else{
                html += `
                    <li class="list-group-item text-secondary bg-dark">
                        ${item.title}
                    </li>
                `;
            }
        });

        this.profileContainer.querySelector('#toDo').innerHTML = html;
    }

    clear(){
        this.profileContainer.innerHTML = '';
        this.alert.innerHTML = '';
    }
}