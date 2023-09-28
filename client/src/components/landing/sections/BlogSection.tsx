import { motion } from "framer-motion";

import { BlogConfigType } from "@/types/config";
import { blogs } from "@/utils/mockData";
import BlogPost from "@/components/landing/cards/BlogPost";
import { shrinkVariant } from "@/utils/animations";

const BlogSection = () => {
  return (
    <div className="flex justify-center">
      <div className="container my-20 overflow-hidden">
        <motion.h1
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={shrinkVariant(0.5, 0.25)}
          className="text-primary text-2xl text-center my-6 md:my-12"
        >
          LATEST BLOGS
        </motion.h1>

        <div className="flex flex-wrap p-2 md:p-4">
          {blogs.map((blog: BlogConfigType) => (
            <BlogPost key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
