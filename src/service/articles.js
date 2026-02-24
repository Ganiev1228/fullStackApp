import EditArticle from '../components/edit-article'
import axios from './api'

const articleService ={
    async getArticles(){
        const articles = await axios.get('/articles')
        return articles
    },
    async getArticleDetail(slug){
        const articleDetail = await axios.get(`/articles/${slug}`)
        return articleDetail
    },
    async postArticle(article){
        const {data} = await axios.post('/articles',{article})
        return data
    },
    async deleteArticle(slug){
      return await axios.delete(`/articles/${slug}`)
    },

}

export default articleService