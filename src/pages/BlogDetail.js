import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from '@sanity/client';
import { PortableText } from '@portabletext/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import ServiceSidebar from "../components/ServiceSidebar";
import imageUrlBuilder from '@sanity/image-url'; // Import image URL builder

// Nastavení klienta pro Sanity
const client = sanityClient({
  projectId: '0v66wq85', // Zkontroluj, že máš správné Project ID
  dataset: 'production',
  useCdn: true,
});

// Configure image URL builder
const builder = imageUrlBuilder(client);

// Function to get image URL
function urlFor(source) {
  return builder.image(source);
}

// Vlastní komponenty pro renderování obsahu, včetně obrázků
const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      // Use urlFor to get the image URL
      const imageUrl = urlFor(value.asset).url();

      // Zpracování pozice obrázku
      const position = value.position || 'full';
      const imgStyle = {
        full: { width: "100%", height: "auto", margin: '20px 0' },
        left: { float: "left", marginRight: "20px", width: "50%", height: "auto" },
        right: { float: "right", marginLeft: "20px", width: "50%", height: "auto" },
      };

      return (
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
          <img
            src={imageUrl}
            alt={value.alt || 'Blog Image'}
            style={imgStyle[position]} // Dynamické zarovnání podle pozice
          />
          {value.imageSource && <div className="image-source">Zdroj: {value.imageSource}</div>}
        </div>
      );
    },
  },
  block: {
    // Přidání vlastních stylů pro blokové elementy
    h1: ({ children }) => <h1 className="custom-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="custom-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="custom-h3">{children}</h3>,
  },
};

const BlogDetails = () => {
  const { link } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
console.log(post);
  // Načítání vybraného příspěvku z Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug]{
          title,
          author,
          date,
          coverImage{
            asset->{
              url // Získání URL obrázku
            }
          },
          imageSource,
          body,  // Načtení blockContent včetně obrázků
          tags
        }`,
        { slug: link }
      )
      .then((data) => {
        setPost(data[0]);
      })
      .catch(console.error);
  }, [link]);

  // Načítání posledních příspěvků z Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(date desc)[0..3]{
          title,
          date,
          coverImage{
            asset->{
              url // Získání URL obrázku
            }
          },
          slug
        }`
      )
      .then((data) => setRecentPosts(data))
      .catch(console.error);
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
                  <a className="active" href={`/blog/${link}`}>
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
                  {post.coverImage?.asset?.url && (
                    <img
                      src={post.coverImage.asset.url}
                      alt={post.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                  {post.imageSource && (
                    <div className="image-source">Zdroj: {post.imageSource}</div>
                  )}
                </div>
                <div className="blog-listing-content">
                  <div className="user-info">
                    <div className="single">
                      <i className="far fa-user-circle"></i>
                      <span>{post.author}</span>
                    </div>
                    <div className="single">
                      <FontAwesomeIcon icon={faClock} />{" "}
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="single">
                      <i className="far fa-tags"></i>
                      <span>{post.tags?.join(", ")}</span>
                    </div>
                  </div>
                  <h2 className="title animated fadeIn">{post.title}</h2>

                  {/* Použití PortableText pro vykreslení textu a obrázků */}
                  <PortableText value={post.body} components={components} />

                  <div className="author-area">
                    <div className="thumbnail details mb_sm--15">
                      <img
                        src="/assets/images/lenka-portret.jpeg"
                        alt="Lenka Stádníková"
                      />
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
                      <div key={recent.slug.current} className="recent-post-single">
                        <div className="thumbnail">
                          <a href={`/blog/${recent.slug.current}`}>
                            <img
                              src={recent.coverImage?.asset?.url}
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
                            href={`/blog/${recent.slug.current}`}
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
