import ModulesDetails from "./ModuleDetails";

function HelloWorld () {
  
  interface Props {
    birthDate: string;
  }
  const AgeCalculator: React.FC<Props> = ({ birthDate }) => {
    const calculateAge = (birthDate: string) => {
      const today = new Date();
      const dateOfBirth = new Date(birthDate);
      let age = today.getFullYear() - dateOfBirth.getFullYear();
      const monthDiff = today.getMonth() - dateOfBirth.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
      }
  
      return age;
    };
  
    const age = calculateAge(birthDate);
  
    return <div>Your age is {age} years old.</div>;
  };
  const birthDate = '1998-10-14'; 

  return (
    <>
      <ModulesDetails />
      <div>
        <AgeCalculator birthDate={birthDate} />
      </div>
    </>
  )
}

export default HelloWorld;