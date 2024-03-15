const formatDate = (data) =>{
    const date = new Date(data);
    const format = {day: 'numeric', month: 'short', hour: 'numeric'}
    const dataT = `${date.toLocaleString('pt-BR', format)} horas`
  
    return dataT
  }
  
  function gerandoCor(){
    var colors = '0123456789ABCDEF';
    var cor = '#';

    for (var i = 0; i < 6; i++ ) {
        cor += colors[Math.floor(Math.random() * 16)];
    }
    return cor;
}

export { gerandoCor }
  export {formatDate}