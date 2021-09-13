const Modal = {
  open(){
    //Abrir modal
    document
    .querySelector('.modal-overlay')
    .classList.add('active');
  },
  close(){
    //Fechar o modal
    document
    .querySelector('.modal-overlay')
    .classList.remove('active');
  }
}