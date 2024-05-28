import express, { urlencoded } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var blogs = [{title:"helloji",author:"deenank",content :"fedwekweewefejwfwefnjfnewjfjwefkjfkwnfwjnejfwnkfwfewjfwfwefnkwnfwenfwjekfnwfnjwfnjwfjewjfnwekwkfnwnfjfjkfnwkfnewfkwenfwejfnwekfkewfnwjfkfnjwnkufsfsrgnjrnrsjnsrkjv"},{title:"kaise ho",author:"deenank",content:"verfegegtebrtsrtbsrb"}]


app.get("/",(req,res)=>{
    res.render("index.ejs",{items : blogs});
});

app.listen(3000,()=>{
    console.log("Listening on port 3000!");
})