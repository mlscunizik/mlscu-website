const FormButton = document.querySelector('#submit');
const Success = document.querySelector('#successtext');
const error = document.querySelector('#errortext');
let email = document.getElementById("inputfield");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

FormButton.addEventListener('click', e => {
    e.preventDefault();
    Success.style.display = 'none';
    error.style.display = 'none';

    if (email.value.length == 0) {
      error.innerHTML = "Please enter an email address";
      error.style.display = 'block';

      setTimeout(() => {
        error.style.display = 'none';
      }, 3000);
    } else {

      if(email.value.match(mailformat)) {
        FormButton.innerHTML = "";
        FormButton.disabled = true;
        const newSpan = document.createElement('div');
        newSpan.classList.add('loader');
        FormButton.appendChild(newSpan);


        let myForm = document.getElementById("inputfield");
        let formData = new FormData(myForm);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                Success.style.display = 'block';
                newSpan.classList.remove('loader');
                FormButton.disabled = false;
                FormButton.innerHTML = "Subscribe";
                console.log("Form successfully submitted");

                setTimeout(() => {
                  Success.style.display = 'none';
                }, 3000);
            })
            .catch((error) => alert(error));


        // setTimeout(() => {
        //     Success.style.display = 'block';
        //     newSpan.classList.remove('loader');
        //     FormButton.disabled = false;
        //     FormButton.innerHTML = "Subscribe";
        //     Success.hide(3000);
        //   }, 3000);

        } else {
          error.innerHTML = "Please enter a valid email address";
          error.style.display = 'block';

          setTimeout(() => {
            error.style.display = 'none';
          }, 3000);
        };
    };
});