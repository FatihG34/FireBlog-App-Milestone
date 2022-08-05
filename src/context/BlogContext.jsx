import { createContext, useState } from 'react'


const initialValue = { title: '', imageUrl: '', content: '' }

export const DataBlogContext = createContext()

const BlogContext = ({ children }) => {
    const [blogData, setBlogData] = useState(initialValue)

    return (
        <DataBlogContext.Provider value={{ blogData, setBlogData }}>
            {children}
        </DataBlogContext.Provider>
    )
}

export default BlogContext