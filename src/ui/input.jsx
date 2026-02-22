const Input = ({ label, state, setState, type='text',sx}) => {
  return (
    <div className="form-floating">
      <input
        style={sx}
        type={type}
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label  htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
