import useStore from "../Zustand/Store";

const Exam = () => {
  const { examParams } = useStore();

  return (
    <div>
      {examParams.category}
      {examParams.limit}
      {examParams.difficulty}
    </div>
  );
};

export default Exam;
