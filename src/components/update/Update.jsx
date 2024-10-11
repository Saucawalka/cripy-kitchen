import { Link } from "react-router-dom"
import img from'../../assets/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg'
import img2 from'../../assets/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg'
import img3 from'../../assets/news/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg'
import img4 from'../../assets/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg'
import img5 from'../../assets/news/news-detail-header.jpg'
import img6 from'../../assets/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg'
import img7 from'../../assets/news/ella-olsson-mmnKI8kMxpc-unsplash.jpg'
import img8 from'../../assets/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg'

const Update = () => {
  return (
    <>
     <main>

<header className="site-header site-news-header">
    <div className="container">
        <div className="row">

            <div className="col-lg-10 col-12 mx-auto">
                <h1 className="text-white">News &amp; Events</h1>

                <strong className="text-white">our latest updates, news, events and special promotions</strong>
            </div>

        </div>
    </div>

    <div className="overlay"></div>
</header>

<section className="news section-padding bg-white">
    <div className="container">
        <div className="row">

            <h2 className="mb-lg-5 mb-4">Latest Updates</h2>
            
            <div className="col-lg-6 col-md-6 col-12">
                <div className="news-thumb mb-4">
                   <Link to="/news"> <a href="news-detail.html">
                        <img src={img4} className="img-fluid news-image" alt=""/>
                    </a></Link>
                    
                    <div className="news-text-info news-text-info-large">
                        <span className="category-tag bg-danger">Featured</span>

                        <h5 className="news-title mt-2">
                           <Link to='/news'> <a href="" className="news-title-link">How to make a healthy diet?</a></Link>
                        </h5>
                    </div>
                </div> 
            </div>

            <div className="col-lg-6 col-md-6 col-12">
                <div className="news-thumb mb-4">
                  <Link to='/news'>
                  <a href="news-detail.html">
                        <img src={img2} className="img-fluid news-image" alt=""/>
                    </a>
                  </Link>
                    
                    <div className="news-text-info news-text-info-large">
                        <span className="category-tag bg-danger">Featured</span>

                        <h5 className="news-title mt-2">
                           <Link to='/news'> <a href="news-detail.html" className="news-title-link">Happy Living and happy eating tips</a></Link>
                        </h5>
                    </div>
                </div> 
            </div>

        </div>
    </div>
</section>

<section className="news section-padding">
    <div className="container">
        <div className="row">

            <div className="col-12">
                <h2 className="mb-lg-5 mb-4">News &amp; Events</h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="news-thumb mb-4">
                   <Link to='/news'>
                   <a href="news-detail.html">
                        <img src={img8} className="img-fluid news-image" alt=""/>
                    </a>
                   </Link>
                    
                    <div className="news-text-info">
                        <span className="category-tag me-3 bg-info">Promotions</span>

                        <strong>12 April 2022</strong>

                        <h5 className="news-title mt-2">
                            <Link to='/news'><a href="news-detail.html" className="news-title-link">Is Coconut good for your health?</a></Link>
                        </h5>
                    </div>
                </div> 
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="news-thumb mb-4">
                  <Link to='/news'>  <a href="news-detail.html">
                        <img src={img7} className="img-fluid news-image" alt=""/>
                    </a></Link>
                    
                    <div className="news-text-info">
                        <span className="category-tag me-3 bg-info">Career</span>

                        <strong>18 April 2022</strong>

                        <h5 className="news-title mt-2">
                           <Link to='/news'> <a href="news-detail.html" className="news-title-link">How to run a sushi business?</a></Link>
                        </h5>
                    </div>
                </div> 
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="news-thumb mb-4">
                   <Link to='/news'> <a href="news-detail.html">
                        <img src={img4} className="img-fluid news-image" alt=""/>
                    </a></Link>
                    
                    <div className="news-text-info">
                        <span className="category-tag me-3 bg-info">Meeting</span>

                        <strong>30 April 2022</strong>

                        <h5 className="news-title mt-2">
                           <Link to='/news'> <a href="news-detail.html" className="news-title-link">Learning a fine dining experience</a></Link>
                        </h5>
                    </div>
                </div> 
            </div>

        </div>
    </div>
</section>

</main>
    </>
  )
}

export default Update