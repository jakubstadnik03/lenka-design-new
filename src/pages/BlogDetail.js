import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import ServiceSidebar from "../components/ServiceSidebar";
import SEOHead from "../SEOHead";

const SITE_URL = "https://www.lenkadesign.cz";

const stripHtml = (html) => (html || "").replace(/<[^>]+>/g, " ");

const getReadingMinutes = (p) => {
  const text = [
    p.content, p.content2, p.content3, p.content4,
    p.content5, p.content6, p.content7, p.content8,
  ]
    .map(stripHtml)
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
};

const BlogDetails = () => {
  const { link } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const selectedPost = blogPosts.find((blog) => blog.link === link);
    setPost(selectedPost);
    window.scrollTo(0, 0);
  }, [link]);

  useEffect(() => {
    const sortedPosts = [...blogPosts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setRecentPosts(sortedPosts.slice(0, 4));
  }, []);

  useEffect(() => {
    if (!post) return;
    const related = blogPosts
      .filter(
        (b) =>
          b.link !== post.link &&
          (b.category === post.category ||
            (b.tags || []).some((t) => (post.tags || []).includes(t)))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
    setRelatedPosts(related);
  }, [post]);

  const shareUrl = post ? `${SITE_URL}/blog/${post.link}` : SITE_URL;
  const shareTitle = post ? post.mainTitle || post.title : "";

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | Lenka Design`}
        description={post.description || post.excerpt || post.title}
        keywords={post.tags ? post.tags.join(", ") : "interiérový design, blog"}
        image={(post.ogImage && post.ogImage.url) || post.coverImage || post.image}
        canonical={`/blog/${post.link}`}
        type="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.modified || post.date,
          author: post.author,
          tags: post.tags,
        }}
        breadcrumbs={[
          { name: "Domů", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.link}` },
        ]}
      />
      <main>
        <div className="breadcrumb-area-bg bg_image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bread-crumb-area-inner">
                  <div className="breadcrumb-top">
                    <Link to="/blog">Blog</Link> /
                    <Link className="active" to={`/blog/${post.link}`}>
                      {post.title}
                    </Link>
                  </div>
                  <div className="bottom-title">
                    <h1 className="title">{post.mainTitle || post.title}</h1>
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
                      alt={post.title}
                      width="900"
                      height="600"
                      fetchpriority="high"
                    />
                    {post.imageSource && (
                      <div className="image-source">
                        Zdroj: {post.imageSource}
                      </div>
                    )}
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
                        <FontAwesomeIcon icon={faClock} />
                        <span>{getReadingMinutes(post)} min čtení</span>
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
                    {post.subtitle6 && (
                      <>
                        <h3 className="title mt--40 mt_sm--20">
                          {post.subtitle6}
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{ __html: post.content7 }}
                        ></div>
                      </>
                    )}
{post.subtitle7 && (
                      <>
                        <h3 className="title mt--40 mt_sm--20">
                          {post.subtitle7}
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{ __html: post.content8 }}
                        ></div>
                      </>
                    )}
                    <div className="blog-share">
                      <span className="blog-share__label">Sdílet článek:</span>
                      <div className="blog-share__links">
                        <a
                          className="blog-share__btn"
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            shareUrl
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Sdílet na Facebooku"
                        >
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                          className="blog-share__btn"
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            shareUrl
                          )}&text=${encodeURIComponent(shareTitle)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Sdílet na X"
                        >
                          <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a
                          className="blog-share__btn"
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                            shareUrl
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Sdílet na LinkedIn"
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <button
                          type="button"
                          className="blog-share__btn"
                          onClick={handleCopyLink}
                          aria-label="Kopírovat odkaz"
                        >
                          <FontAwesomeIcon icon={faLink} />
                        </button>
                        {copied && (
                          <span className="blog-share__copied">
                            Odkaz zkopírován
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="author-area">
                      <div className="thumbnail details mb_sm--15">
                        <img src="/assets/images/lenka-portret.jpeg" alt="Lenka Stádníková" />
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
                    {relatedPosts.length > 0 && (
                      <div className="related-posts">
                        <h4 className="related-posts__title">
                          Související články
                        </h4>
                        <div className="related-posts__grid">
                          {relatedPosts.map((rel) => (
                            <Link
                              key={rel.id}
                              to={`/blog/${rel.link}`}
                              className="related-post-card"
                            >
                              <div className="related-post-card__thumb">
                                <img
                                  src={rel.coverImage}
                                  alt={rel.title}
                                  loading="lazy"
                                />
                              </div>
                              <span className="related-post-card__cat">
                                {rel.category}
                              </span>
                              <h5 className="related-post-card__title">
                                {rel.title}
                              </h5>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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
                            <Link to={`/blog/${recent.link}`}>
                              <img
                                src={recent.coverImage}
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  minWidth: "auto",
                                  objectFit: "cover",
                                }}
                                alt={recent.title}
                                loading="lazy"
                                width="100"
                                height="100"
                              />
                            </Link>
                          </div>
                          <div className="content-area text-start">
                            <div className="user">
                              <FontAwesomeIcon icon={faClock} />{" "}
                              <span>
                                {new Date(recent.date).toLocaleDateString()}
                              </span>
                            </div>
                            <Link
                              className="post-title"
                              to={`/blog/${recent.link}`}
                            >
                              <h6 className="title">{recent.title}</h6>
                            </Link>
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
    </>
  );
};

export default BlogDetails;
