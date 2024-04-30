import prototype from "prop-types";
function Student(props) {
  return (
    <div className="myStudent">
      <p>Name:{props.name} </p>
      <p>Age:{props.age}</p>
      <p>Student:{props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.prototype = {
  name: prototype.string,
  age: prototype.number,
  isStudent: prototype.bool,
};
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
