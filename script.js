//declarar elementos escopo global
const form = document.getElementById('form-campo');
const campoB = document.getElementById('campo-b');
const campoA = document.getElementById('campo-a');
let formEValido = false;
//fazer a logica de maior campo
function validarCampo (campob, campoa) {
if (campob > campoa) {
return campob == false;
} else {
    return campob == true;
}
};
//fazer o evento
form.addEventListener('submit', function(e) {
    e.preventDefault();
//declarar e validar campos    
    const msgSucesso = `Todos o dados estao corretos`
    formEValido = validarCampo(campoB.value > campoA.value);

if (formEValido) {
    const containerMsgSucesso = document.querySelector('.success-message')
    containerMsgSucesso.innerHTML = msgSucesso;
    containerMsgSucesso.style.display = 'block';


    campoA.value = ''
    campoB.value = ''

} else {
    document.querySelector('.error-message').style.display = 'block'

}
});

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validarCampo(e.target.value);

    if (formEValido) {
        /*campoB.classList.add('error');*/
        document.querySelector('.error-message').style.display = 'block';
        } else {
            campoB.style =''
            document.querySelector('.error-message').style.display = 'none';
        }
    });