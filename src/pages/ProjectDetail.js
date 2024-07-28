import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../data/webData.json'; // Adjust the path to your JSON file
import SEOHead from "../SEOHead"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = () => {
  const { nav } = useParams(); // Get the project name from the URL
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [projectIndex, setProjectIndex] = useState(null);

  useEffect(() => {
    const selectedProjectIndex = projectData.findIndex(proj => proj.nav === nav);
    setProject(projectData[selectedProjectIndex]);
    setProjectIndex(selectedProjectIndex);
  }, [nav]);

  const handlePrevProject = () => {
    if (projectIndex > 0) {
      const prevProject = projectData[projectIndex - 1];
      navigate(`/web-a-grafika/${prevProject.nav}`);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  const handleNextProject = () => {
    if (projectIndex < projectData.length - 1) {
      const nextProject = projectData[projectIndex + 1];
      navigate(`/web-a-grafika/${nextProject.nav}`);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  if (!project) {
    return <div>Načítání...</div>;
  }

  return (
    <>
      <SEOHead
        title={` ${project.name} - Lenka Design`}
        description={project.overview}
        keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci"
      />
      <main>
        <div className="breadcrumb-area-bg bg_image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bread-crumb-area-inner">
                  <div className="breadcrumb-top">
                    <a href="/web-a-grafika">Webové aplikace a grafika</a> /
                    <a className="active" href="#">{project.name}</a>
                  </div>
                  <div className="bottom-title">
                    <h1 className="title">{project.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-style-one-main rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="product-details-left-one">
                  <h3 className="title mt--0">Projektové zadání</h3>
                  <p className="disc">
                    <b className="mb--0">Přehled projektu: </b> <br />
                    {project.overview}
                  </p>
                  <p className="disc">
                    <b>Rozsah projektu:</b> <br />
                    {project.scope}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 pl--60 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50">
                <div className="product-details-right-one">
                  <div className="details-infor-1">
                    {/* single details short */}
                    <div className="single-details-short">
                      <div className="left">
                        <span>Název projektu:</span>
                        <p className="name">{project.name}</p>
                      </div>
                      <div className="right" style={{marginBottom: "auto"}}>
                        <span>Jméno klienta:</span>
                        <p className="name">{project.clientName}</p>
                      </div>
                    </div>
                    {/* single details short end */}
                    {/* single details short */}
                    <div className="single-details-short">
                      <div className="left">
                        <span>Datum zahájení:</span>
                        <p className="name">{project.startDate}</p>
                      </div>
                      <div className="right">
                        <span>Délka projektu:</span>
                        <p className="name">{project.duration}</p>
                      </div>
                    </div>
                    {/* single details short end */}
                    {/* single details short */}
                    <div className="single-details-short">
                      <div className="left" style={{marginBottom: "auto"}}>
                        <span>Místo:</span>
                        <p className="name">{project.location}</p>
                      </div>
                      <div className="right">
                        <span>Otevřít projekt:</span>
                        <ul className="share">
                          <li><a href={project.websiteLink} target='_new'>{project.websiteLook}</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* single details short end */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt--40">
              <div className="col-lg-12">
                <div className="thumbnail-project-details-top">
                  <img src={project.mainImage} alt="project_details" className='project-image' style={{display: "block", margin: "auto"}}/>
                  <span>{project.mainImageDescription}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="product-details-padding-lr">
                  <h4 className="title">Řešení projektu:</h4>
                  <p className="disc">{project.solution}</p>
                  <ul>
                    {project.solutionDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt--60 g-5">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12" style={{display: "flex", alignItems: "center"}} >
                  <div className="thumbnail-g-3" >
                    <img src={image} alt={`project_${index}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt--100">
              <div className="col-lg-6">
                <div className="project-challenge-details">
                  <h5 className="title">Výzva projektu</h5>
                  <p className="disc">{project.challenge}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="thumbnail-pd-video">
                  <img src={project.challengeImage} alt="project-details" />
                </div>
              </div>
            </div>
            <div className="row mt--50">
              <div className="col-lg-12">
                <div className="details-4-bottom">
                  <h5 className="title">Řešení projektu</h5>
                  <p className="disc">{project.finalSolution}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="next-prev-product-details">
                  <span className="left" onClick={handlePrevProject}>
                    <i className="fa-light"><FontAwesomeIcon icon={faArrowLeft} /></i> Předchozí
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <rect x="7.17188" y="0.74585" width="4" height="4" fill="#30373E" />
                    <rect x="7.17188" y="7.78369" width="4" height="4" fill="#30373E" />
                    <rect x="7.17188" y="14.8218" width="4" height="4" fill="#30373E" />
                    <rect x="0.1875" y="0.74585" width="4" height="4" fill="#30373E" />
                    <rect x="0.1875" y="7.78369" width="4" height="4" fill="#30373E" />
                    <rect x="0.1875" y="14.8218" width="4" height="4" fill="#30373E" />
                    <rect x="14.1953" y="0.74585" width="4" height="4" fill="#30373E" />
                    <rect x="14.1953" y="7.78369" width="4" height="4" fill="#30373E" />
                    <rect x="14.1953" y="14.8218" width="4" height="4" fill="#30373E" />
                  </svg>
                  <span className="left" onClick={handleNextProject}>
                    Další <i className="fa-light "><FontAwesomeIcon icon={faArrowRight} /></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectDetail;
