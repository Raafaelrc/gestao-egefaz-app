import toastr from 'toastr'

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

export  function showMessage(titulo, mensagem, tipo) {

  toastr[tipo](mensagem, titulo)
}



export  function succesMessage(mensagem) {
  showMessage('Sucesso', mensagem, 'success')

}

export  function errorMessage(mensagem) {
  showMessage('Error', mensagem, 'error')

}




export function alertMessage(mensagem) {
  showMessage('Atenção', mensagem, 'warning')

}


