const formatDate = (data) =>{
  console.log(data)
    const date = new Date(data);
    const format = {day: 'numeric', month: 'short', hour: 'numeric'}
    const dataT = `${date.toLocaleString('pt-BR', format)} horas`
  
    return dataT
  }
  
  function gerandoCor(cores){
    return cores[Math.floor(Math.random() * cores.length)];



}

function corClara(){
  const lightColors =['#E0FFFF','#D3D3D3', '#FAFAD2','#F0E68C', '#00FF7F','#FFB6C1','#98FB98'];

  return gerandoCor(lightColors);
}


function corEscura(){
  const darkColors = ['#000080','#DC143C','#2F4F4F','#228B22','#800080','#6B8E23','#556B2F'];

  return gerandoCor(darkColors);
}


export {corEscura}
export {corClara}
export { gerandoCor }
export {formatDate}