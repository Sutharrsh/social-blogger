const express = require('express');
const app = express();
const db=require('./models');
const cors = require('cors');

// Routers
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/uploads',express.static('uploads'));
const postRouter = require('./routes/Posts');
app.use("/Posts",postRouter);

const comRouter = require('./routes/Comments');
app.use("/Comments",comRouter);

const userRouter = require('./routes/users');
app.use("/auth",userRouter);

const Likes = require('./routes/Likes');
app.use("/Likes",Likes);

const Follow = require('./routes/Follow');
app.use("/Follow",Follow);


const Images = require('./routes/Demo');
app.use("/upload",Images);

const Bio = require('./routes/Bio');
app.use("/Bio",Bio);

const Profile = require('./routes/Profile');
app.use("/Profile",Profile);
const Admin = require('./routes/Admin');
app.use("/Admin",Admin);

const hide = require("./routes/Todo");
app.use('/hide-app',hide);
db.sequelize.sync().then(()=>{
app.listen(7240,()=>{
    console.log(`7240 server is started at ${Date.now()}`);
});
});