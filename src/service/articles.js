import axios from './api'

const articleService ={
    async getArticles(){
        const articles = await axios.get('/articles')
        return articles
    },
    async getArticleDetail(slug){
        const articleDetail = await axios.get(`/articles/${slug}`)
        return articleDetail
    }
}

export default articleService