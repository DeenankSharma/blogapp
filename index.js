import express, { urlencoded } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var blogs = [];

app.get("/",(req,res)=>{
    res.render("index.ejs",{items : blogs});
});

app.get("/create",(req,res)=>{
    res.render("create.ejs");
})

app.post("/home",(req,res)=>{
    var blog ={
        title:req.body["title"],
        author:req.body["author"],
        content:req.body["content"],
    }
    blogs.push(blog);
    res.render("index.ejs",{items : blogs});
})

app.get("/edit_form",(req,res)=>{
    res.render("edit_form.ejs",{items:blogs});
})

app.get("/delete",(req,res)=>{
    res.render("delete.ejs",{items:blogs});
})

app.post("/updated_home", (req, res) => {
    const titleToDelete = req.body["title"];
    const authorToDelete = req.body["author"];

    const filteredBlogs = blogs.filter(
        (blog) => blog.title !== titleToDelete || blog.author !== authorToDelete
    );

    blogs = filteredBlogs; 

    res.render("index.ejs", { items: blogs });
});

app.post("/edit_content",(req,res)=>{
    var title_to_update = req.body["title"];
    var author_to_update = req.body["author"];
    for (let i = 0; i < blogs.length; i++) {
        const element = blogs[i];
        if(element.title === title_to_update && element.author === author_to_update){
            var update_blog_data = {
                title : blogs[i].title,
                author : blogs[i].author,
                content : blogs[i].content
            }
        }
        blogs.splice(i,1);
    }
    res.render("edit_content.ejs",update_blog_data);
})

app.post('/updated_updated_home',(req,res)=>{
    var blog = {
        title : req.body["title"],
        author : req.body["author"],
        content : req.body["content"]
    }
    blogs.push(blog);

    res.render("index.ejs",{items:blogs});
})

app.listen(3000,()=>{
    console.log("Listening on port 3000!");
})