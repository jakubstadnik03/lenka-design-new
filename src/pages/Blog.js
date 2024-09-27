import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SEOHead from "../SEOHead";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Nastavení klienta Sanity
const client = sanityClient({
  projectId: '0v66wq85', // Zkontroluj, že máš správné Project ID
  dataset: 'production',
  useCdn: true,
});

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
console.log(blogPosts[0]);
  // Načítání blogových příspěvků z Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          tags,
          description,
          coverImage{
            asset->{
              url  // Získání URL obrázku
            }
          },
          date
        }`
      )
      .then((data) => setBlogPosts(data))
      .catch(console.error);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <SEOHead
        title={`Blog | Lenka Design`}
        keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci, ceník poskytovaných služeb Lenka Design"
      />
      <main>
        <div className="breadcrumb-area-bg bg_image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bread-crumb-area-inner">
                  <div className="breadcrumb-top">
                    <a href="/">Domů</a> /
                    <a className="active" href={`/blog`}>Blog</a>
                  </div>
                  <div className="bottom-title">
                    <h1 className="title">Náš blog</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rts-blog-area rts-section-gap">
          <motion.div
            className="container"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {blogPosts.map((blog, index) => (
              <motion.div
                className={`row g-5 mt--40 ${index >= 2 ? 'mt_sm--0' : ''}`}
                style={{ width: "680px" }}
                key={blog.slug.current}
                variants={itemVariants}
              >
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-6">
                  <div className="blog-style-three when-bg-white">
                    <a href={`/blog/${blog.slug.current}`} className="thumbnail">
                      {/* Kontrola, zda je obrázek dostupný */}
                      {blog.coverImage?.asset?.url ? (
                        <img
                          src={blog.coverImage.asset.url}
                          style={{ height: "380px", minWidth: "auto", maxWidth: "300px", objectFit: "cover" }}
                          alt={blog.title}
                        />
                      ) : (
                        <div style={{ height: "380px", width: "300px", backgroundColor: "#ccc" }}>
                          No image available
                        </div>
                      )}
                    </a>
                    <div className="body-information" style={{ minWidth: "300px" }}>
                      <div className="blog-top">
                        <span className="tag">{blog.tags[0]}</span>
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                      </div>
                      <a href={`/blog/${blog.slug.current}`}>
                        <h2 className="title">{blog.title}</h2>
                      </a>
                      <p className="disc">{blog.description[0]?.children[0]?.text}</p>
                      <a href={`/blog/${blog.slug.current}`} className="btn-read-more-blog">
                        Read More <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Blog;
