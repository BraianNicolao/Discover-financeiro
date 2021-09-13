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

const transactions = [{
  id: 1,
  description: 'Luz',
  amount: -50000,
  date: '23/01/2021',
},
{
  id: 2,
  description: 'Website',
  amount: 500000,
  date: '23/01/2021',
},
{
  id: 3,
  description: 'Internet',
  amount: -200000,
  date: '23/01/2021',
},
]

const Transaction = {
  incomes(){
    //somar as entradas
  },
  expenses(){
    //somar as saídas
  },
  total(){
    //entrada - saídas
  }
}