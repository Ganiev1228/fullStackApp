import { useSelector } from "react-redux";

const ValidationErrors = () => {
  const error = useSelector((state) => state.loginn.error);
  if (!error) return null;

  return (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default ValidationErrors;
