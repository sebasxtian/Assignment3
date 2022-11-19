(function(){
    function Start()
    {
        console.log("App started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Would you like to remove this car?"))
                {
                    event.preventDefault();
                    window.location.assign('/car-info');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();