const tempConvert = (temp,unit) => {
  if(unit === 'F') {
    return (temp - 32)*5/9;
  }
  return temp * 1.8 +32;
}

module.exports = tempConvert;