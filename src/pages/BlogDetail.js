import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../data/blogData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import ServiceSidebar from "../components/ServiceSidebar";
const BlogDetails = () => {
  const { link } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const selectedPost = blogPosts.find((blog) => blog.link === link);
    setPost(selectedPost);
  }, [link]);

  useEffect(() => {
    const sortedPosts = [...blogPosts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setRecentPosts(sortedPosts.slice(0, 4));
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="breadcrumb-top">
                  <a href="/blog">Blog</a> /
                  <a className="active" href={`/blog/${post.link}`}>
                    {post.title}
                  </a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">{post.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-blog-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="blog-single-post-listing details mb--0">
                <div className="thumbnail">
                  <img
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                  />
                  <div className="image-source">Zdroj: {post.imageSource}</div>
                </div>
                <div className="blog-listing-content">
                  <div className="user-info">
                    <div className="single">
                      <i className="far fa-user-circle"></i>
                      <span>{post.author}</span>
                    </div>
                    <div className="single">
                      <i className="far fa-clock"></i>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="single">
                      <i className="far fa-tags"></i>
                      <span>{post.tags.join(", ")}</span>
                    </div>
                  </div>
                  <h2 className="title animated fadeIn">
                    {post.mainTitle ? post.mainTitle : post.title}
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                  {post.subtitle && (
                    <>
                      <h3 className="title mt--40 mt_sm--20">
                        {post.subtitle}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.content2 }}
                      ></div>
                    </>
                  )}
                  {post.subtitle2 && (
                    <>
                      <h3 className="title mt--40 mt_sm--20">
                        {post.subtitle2}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.content3 }}
                      ></div>
                    </>
                  )}
                  {post.subtitle3 && (
                    <>
                      <h3 className="title mt--40 mt_sm--20">
                        {post.subtitle3}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.content4 }}
                      ></div>
                    </>
                  )}
                  {post.subtitle4 && (
                    <>
                      <h3 className="title mt--40 mt_sm--20">
                        {post.subtitle4}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.content5 }}
                      ></div>
                    </>
                  )}
                  {post.subtitle5 && (
                    <>
                      <h3 className="title mt--40 mt_sm--20">
                        {post.subtitle5}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.content6 }}
                      ></div>
                    </>
                  )}

                  <div className="author-area">
                    <div className="thumbnail details mb_sm--15">
                      <img src="/assets/images/lenka.jpg" alt="Author" />
                    </div>
                    <div className="author-details team">
                      <span className="title-g">Interiérová návrhářka</span>
                      <h5 className="title-g">Lenka Stádníková</h5>
                      <p className="disc title-g">
                        Inspirací mi je příroda a snažím se vytvářet unikátní
                        interiéry, které respektují přírodní prostředí a zároveň
                        vyhovují klientovým požadavkům.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 pl--60 padding-left-sidebar pl_md--15 pl_sm--5 mt_sm--50 mt_md--50">
              <div className="service-left-sidebar-wrapper">
                <div className="service-left-sidebar-wized mb--50">
                  <div className="topa-rea">
                    <h4 className="title">Nedávné příspěvky</h4>
                  </div>
                  <div className="wized-body">
                    {recentPosts.map((recent) => (
                      <div key={recent.id} className="recent-post-single">
                        <div className="thumbnail">
                          <a href={`/blog/${recent.link}`}>
                            <img
                              src={recent.coverImage}
                              style={{
                                width: "100px",
                                height: "100px",
                                minWidth: "auto",
                              }}
                              alt="Recent Post"
                            />
                          </a>
                        </div>
                        <div className="content-area text-start">
                          <div className="user">
                            <FontAwesomeIcon icon={faClock} />{" "}
                            <span>
                              {new Date(recent.date).toLocaleDateString()}
                            </span>
                          </div>
                          <a
                            className="post-title"
                            href={`/blog/${recent.link}`}
                          >
                            <h6 className="title">{recent.title}</h6>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <ServiceSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
