type User = {
  id: number,
  name: string,
  address: string,
  addressNumber: number,
};
const UserDB = {
  findById: (userId: number): unknown => ({
        id: userId,
        name: 'Silvana',
      }),
    };
    

function getUser(userId: number): User {
  const user = UserDB.findById(userId) as User;
  user.address = 'Rua São Camilo';
  return user;
}

const user = getUser(1);
console.log(user);

// Agora, vamos refatorar o código para remover o Type Assertion e utilizar Type Annotation. Veja como fica:

const use = {
  findById: (userId: number) => ({
    id: userId,
    name: 'Silvana',
    }),
  };


function getUser1(userId: number): User {
  const user = use.findById(userId);
  const userWithAddress: User = { // Error: Property 'addressNumber' is missing in type '{ address: string; id: number; name: string; }' but required in type 'User'.
    ...user,
    address: 'Rua São Camilo',
    addressNumber: 111,
  };
  return userWithAddress;
}