const { Post } = require('../../model/article')
module.exports = async (req, res) => {
     var articles= await Post.find()
      .populate(['author','category'])
   res.send({article: articles, meta: 200})
}