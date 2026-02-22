import { Input, TextArea } from '../ui';
import { useState } from 'react';

const InputField = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  return (
    <div>
      <form className=' mt-3 w-75 mx-auto d-flex flex-column gap-2'>
        <Input sx={{ border: '1px solid black' }} label={'Title'} state={title} setState={setTitle}></Input>
        <TextArea
          label={'Description'}
          state={description}
          setState={setDescription}
          style={{ height: '100px' }}></TextArea>
        <TextArea label={'Body'} state={body} setState={setBody} style={{ height: '200px' }}></TextArea>
        <button className='form-control btn btn-outline-primary'>Create</button>
      </form>
    </div>
  );
};

export default InputField;
