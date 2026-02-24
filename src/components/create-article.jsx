import { useState } from 'react';
import articleService from '../service/articles';
import InputField from './inputField';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postArticleFailure, postArticleStart, postArticleSucces } from '../slice/article-slice';
const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postarticle = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart())
    try {
      const response = await articleService.postArticle(article);
      dispatch(postArticleSucces())
      navigate('/');
      console.log(response);
    } catch (error) {
      dispatch(postArticleFailure(error))
      console.log('error while creating article');
    }
  };

  const proplar = { title, setTitle, description, setDescription, body, setBody, postarticle, tag:"Create" };
  return (
    <div className='text-center'>
      <h1 className=''>Create Article</h1>
      <InputField {...proplar}></InputField>
    </div>
  );
};

export default CreateArticle;
