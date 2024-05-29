import express, { urlencoded } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var blogs = [{title:"helloji",author:"deenank",content :"fedwekweewefejwfwefnjfnewjfjwefkjfkwnfwjnejfwnkfwfewjfwfwefnkwnfwenfwjekfnwfnjwfnjwfjewjfnwekwkfnwnfjfjkfnwkfnewfkwenfwejfnwekfkewfnwjfkfnjwnkufsfsrgnjrnrsjnsrkjv"},{title:"kaise ho",author:"deenank",content:"verfegegtebrtsrtbsrb"}]
// var blogs = [];

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

app.get("/edit",(req,res)=>{
    res.render("edit.ejs",{items:blogs});
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


app.listen(3000,()=>{
    console.log("Listening on port 3000!");
})