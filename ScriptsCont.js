document.addEventListener("DOMContentLoaded",() =>{
    const form = document.getElementById("Con");

    form.addEventListener("submit", (event1) => {
        event1.preventDefault();

        const Name = form.elements["name"].value;
        const Email = form.elements["email"].value;
        const Mensagem = form.elements["mensagem"].value;

        const result = 'name: ${Name} \n email: ${Email} \n mensagem: ${Mensagem}';

        alert(result);
    });
})
