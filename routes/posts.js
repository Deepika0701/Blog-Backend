const express=require('express');
const router=express.Router()
const Post=require('../models/Post')
const verifyToken=require('../verifyToken')

//create 
router.post("/create",verifyToken,async(req,res)=>{
    try{
       const newPost=new Post(req.body)
       const savedPost=await newPost.save();
       res.status(200).json(savedPost);

    }
    catch(err){
       res.status(200).json(err)
    }
})
//update
router.put("/:id",verifyToken,async(req,res)=>{
    try{
       const updatedUser=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
       res.status(200).json(updatedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//delete
router.delete("/:id",verifyToken,async(req,res)=>{
    try{
       await Post.findByIdAndDelete(req.params.id)
       res.status(200).json("Post has been deleted successfully")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get post details
router.get("/:id",async(req,res)=>{
    try{
      const post=await Post.findById(req.params.id)
      res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//get posts
router.get("/",async(req,res)=>{
    const query=req.query
    // console.log(query)
    try{
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
      const posts=await Post.find(query.search?searchFilter:null)
      res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//to get post of particular user
router.get("/user/:userId",async(req,res)=>{
    try{
      const posts=await Post.find({userId:req.params.userId})
      res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router