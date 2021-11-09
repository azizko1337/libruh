import GradeBox from "./GradeBox";

const Grade = (props) => {
  const { id, value, onClick } = props;

  return (
    <GradeBox onClick={onClick} id={id}>
      {value}
    </GradeBox>
  );
};

export default Grade;
