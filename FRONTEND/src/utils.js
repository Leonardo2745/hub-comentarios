const formatDate = (data) => {
  console.log(data);
  const date = new Date(data);
  const format = { day: "numeric", month: "short", hour: "numeric" };
  const dataT = `${date.toLocaleString("pt-BR", format)} horas`;

  return dataT;
};

function gerandoCor(cores) {
  return cores[Math.floor(Math.random() * cores.length)];
}

const randomInt = (value) => {
  return Math.floor(Math.random() * value)
}


const randomColors = () => {
  let darkPalette = ['070F2B', '1B1A55', '535C91', '9290C3', '030637', '3C0753', '720455']
  let lightPalette = ['FFBE98', 'FEECE2', 'F6FDC3', 'CDFADB', 'FFF8E3', 'F2F1EB', 'F1EAFF']

  let colors = []
  colors.push(darkPalette)
  colors.push(lightPalette)

  return {
      dark: colors[0][randomInt(colors[0].length)],
      light: colors[1][randomInt(colors[1].length)]
  }
}

export { randomColors, gerandoCor, formatDate };

