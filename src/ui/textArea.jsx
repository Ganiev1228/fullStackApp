const TextArea = ({label,state,setState,style}) => {
  return (
    <div className='form-floating'>
      <textarea
        className='form-control'
        value={state}
        onChange={e=>setState(e.target.value)}
        id='floatingTextarea2'
        style={style}
        ></textarea>
      <label htmlFor='floatingTextarea2'>{label}</label>
    </div>
  );
};

export default TextArea;
