import React from 'react'
import BlogHeader from './BlogHeader'
import BlogHero from './BlogHero'
import BlogCard from './BlogCard'
import BlogFooter from './BlogFooter'
import BorderDivider from './BorderDivider'

const BlogsPage = () => {
  return (
    <>
    <BlogHeader/>
    <BlogHero/>
    <BorderDivider/>
    <BlogCard/>
    <BlogFooter/>
    </>
  )
}

export default BlogsPage