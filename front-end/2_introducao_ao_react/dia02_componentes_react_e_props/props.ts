// /src/components/Greeting.tsx

// Aqui são definidos os tipos das props:
type GreetingProps = {
  person: {
    firstName: string;
    lastName: string;
  };
};

function Greeting(props: GreetingProps) {
//   const firstName = 'Miguel';
//   const lastName = 'Silva';

//   return <h1 className="greeting">Olá {`${firstName} ${lastName}`}</h1>;
// }

// export default Greeting;



// components/Greeting.tsx

// type GreetingProps = {
//   person: {
//     firstName: string;
//     lastName: string;
//   };
// };

function Greeting(props: GreetingProps) {
  const { person } = props;

  const firstName = person.firstName;
  const lastName = person.lastName;

//   return <h1 className="greeting">Olá {`${firstName} ${lastName}`}</h1>;
// }

// export default Greeting;

// -----------

// components/Greeting.tsx

// type GreetingProps = {
//   person: {
//     firstName: string;
//     lastName: string;
//   };
// };

function Greeting({ person }: GreetingProps) {
  const firstName = person.firstName;
  const lastName = person.lastName;

//   return <h1 className="greeting">Olá {`${firstName} ${lastName}`}</h1>;
// }

// export default Greeting;
