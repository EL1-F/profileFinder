//https://jsonplaceholder.typicode.com/


const ui = new UI();
const profile = new Profile();
const searchProfile =document.getElementById('searchProfile');

searchProfile.addEventListener('keyup', (e)=>{
    ui.clear();
    //publication[0].toUpperCase() + publication.substring(1); 
    let text = e.target.value[0].toUpperCase()+e.target.value.substring(1);
    //console.log(text);

    if (text!='') {
        profile.getProfile(text)
            .then(res => {
                if (res.profile.length === 0) {
                    ui.showAlert(text);
                }else{
                    ui.showProfile(res.profile[0]);
                    ui.showToDo(res.todo);
                }

            }).catch(err=>{
                ui.showAlert(text);
            });
    }
});