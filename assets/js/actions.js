// document.getElementById("submit").addEventListener("click", handleSubmit);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   let myForm = document.getElementById("subscribe");
//   let formData = new FormData(myForm);
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => console.log("Form successfully submitted"))
//     .catch((error) => alert(error));
// };


const FormButton = document.querySelector('#submit');

FormButton.addEventListener('click', e => {
    e.preventDefault();

    FormButton.innerHTML = "";
    FormButton.disabled = true;
    const newSpan = document.createElement('div');
    newSpan.classList.add('loader');
    FormButton.appendChild(newSpan);


    let myForm = document.getElementById("subscribe");
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            newSpan.classList.remove('loader');
            FormButton.disabled = false;
            FormButton.innerHTML = "Subscribe"
            console.log("Form successfully submitted");
        })
        .catch((error) => alert(error));


    // setTimeout(() => {
    //     newSpan.classList.remove('loader');
    //     FormButton.disabled = false;
    //     FormButton.innerHTML = "Subscribe"
    //   }, 3000);
});