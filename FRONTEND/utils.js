const formatDate = (data) =>{
    const date = new Date(data);
    const format = {day: 'numeric', month: 'short', hour: 'numeric'}
    const dataT = `${date.toLocaleString('pt-BR', format)} horas`
  
    return dataT
  }
  
  export {formatDate}