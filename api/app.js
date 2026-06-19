require("dotenv").config();
const express = require('express');
const path = require('path')
const axios = require('axios');

const app = express();

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname, '../views'));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));

const apikey = process.env.APIKEY;

app.get('/', (req, res) => {
    res.render("index",{
        images:[],
        searchTerm:""
    })
});

app.post('/search', async(req,res) => {
    const searchTerm = req.body.search;
    try{
        const result = await axios.get(
            `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=100`,
            {
                headers:{
                    Authorization: apikey
                }
            }
        );
        res.render("index", {
            images:result.data.photos,
            searchTerm
        })
    }catch(error){
        res.render("index",{images:[],searchTerm})
    }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});