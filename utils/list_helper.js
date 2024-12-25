const dummy = (blogs) => {
    return 1
  }



const totalLikes = (blogs) => {
  let summa = blogs.reduce((sum, blog) => sum + blog.likes, 0)
  return summa
}


module.exports = {dummy, totalLikes}