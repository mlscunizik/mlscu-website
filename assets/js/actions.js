const Formm = document.querySelector('#formdata');
const FormButton = document.querySelector('#submit');
const Success = document.querySelector('#successtext');
const error = document.querySelector('#errortext');
let email = document.getElementById("inputfield");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (Formm) {
  Formm.addEventListener('submit', e => {
      e.preventDefault();
      processForm(Formm);
  })

  const processForm = formm => {

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
  
        const data = new FormData(formm)
        data.append('form-name', 'Subscribers');
        fetch('/', {
          method: 'POST',
          body: data,
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
          .catch((error) => {
            // alert(error);
    
            error.innerHTML = error;
            error.style.display = 'block';
    
            setTimeout(() => {
              error.style.display = 'none';
              email.innerHTML = "";
            }, 3000);
          });


        // setTimeout(() => {
        //     Success.style.display = 'block';
        //     newSpan.classList.remove('loader');
        //     FormButton.disabled = false;
        //     FormButton.innerHTML = "Subscribe";
        //   }, 3000);
  
        } else {
          error.innerHTML = "Please enter a valid email address";
          error.style.display = 'block';
  
          setTimeout(() => {
            error.style.display = 'none';
          }, 3000);
        };
    };
  }
};