const fetchAPIGOT = async (character: string) => {
  const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${character}`);
  const GOTdata = await response.json()

  return GOTdata
}

export default fetchAPIGOT;