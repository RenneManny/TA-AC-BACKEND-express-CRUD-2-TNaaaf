const express = require("express");

const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: String,
  author: String,
  likes: Number,
},{timestamps:true});
const Blog=mongoose.model('Blog',BlogSchema)
module.exports = Blog;

