import Student from "./students";
import "./App.css";
function App() {
  return (
    <>
      <Student name="Daniel" age="21" isStudent={true} />
      <Student name="Yusuf" age="15" is isStudent={false} />
      <Student name="Kellen" age="22" isStudent={true} />
      <Student name="Martin" age="75" is isStudent={false} />
      <Student name="Frank" age="71" isStudent={true} />
      <Student name="PATO" age="18" is isStudent={false} />
      <Student name="Ian" age="23" isStudent={true} />
      <Student name="Susan" age="15" is isStudent={true} />
      <Student />
    </>
  );
}
export default App;
