const Blog = require('../models/blog');


const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1})
    .then((result) => {
        res.render('blogs/index', { title: 'All blogs', blogs: result});      
    })
    .catch((err) => {
        console.log(err);
    });
}

const blog_create = (req, res) => {
    res.render('blogs/create', { title: 'You are a bold one!'});
}

const blog_new = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('blogs/details', {blog: result, title: 'Blog Details'});
    })
    .catch((err) => {
        res.status(404).render('404', {title: "I hate sand"});
        console.log(err);
    });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs'})
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = {
    blog_index,
    blog_create,
    blog_new,
    blog_details,
    blog_delete
}