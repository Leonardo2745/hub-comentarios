const formatDate = (data) =>{
    const data = new Date(data);
    const format = {day: 'numeric', month: 'short', hour: 'numeric'}
    const dataT = `${data.toLocaleString('pt-BR', format)} horas`
  
    return dataT
  }
  
  export {formatDate}