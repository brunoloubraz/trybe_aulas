const techList = (array, name) => {
  const arr = array.sort();
  const list = []

if (array.length === 0) return 'Vazio!'

  for (let index = 0; index < arr.length; index += 1) {
    list.push({
     tech: arr[index],
     name, 
    })
  }
  return list;
}


module.exports = techList;
