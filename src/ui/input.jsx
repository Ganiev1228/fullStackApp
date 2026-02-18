const Input = ({ label, state, setState, type='text' }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
