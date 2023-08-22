import { Link } from "react-router-dom";

function Navigation({ className }) {
  return (
    <>
      <div className={`restly-header-main-menu ${className || ""}`}>
        <ul>
          <li>
            <Link to="#">
              Começo <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/home-four">Home 1</Link>
              </li>
              <li>
                <Link to="/home-four">Home 2</Link>
              </li>
              <li>
                <Link to="/home-four">Home 3</Link>
              </li>
              <li>
                <Link to="/home-four">Home 4</Link>
              </li>
              <li>
                <Link to="/home-four">Home 5</Link>
              </li>
              <li>
                <Link to="/home-four">Home 6</Link>
              </li>
              <li>
                <Link to="/home-four">Home 7</Link>
              </li>
              <li>
                <Link to="/home-four">Home 8</Link>
              </li>
              <li>
                <Link to="/home-four">Home 9</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              Benefícios <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/about-four">About One</Link>
              </li>
              <li>
                <Link to="/about-four">About Two</Link>
              </li>
              <li>
                <Link to="/about-four">About Three</Link>
              </li>
              <li>
                <Link to="/about-four">About four</Link>
              </li>
              <li>
                <Link to="/about-four">About five</Link>
              </li>
              <li>
                <Link to="/about-four">About Six</Link>
              </li>
              <li>
                <Link to="/about-four">About Seven</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              Seguros <i className="fa fa-angle-down" />
            </Link>
            <li>
            <Link to="/home-four"></Link>
          </li>
          </li>
          {/* <li>
            <Link to="#">
              Portfolio <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/portfolio-one">Portfolio One</Link>
              </li>
              <li>
                <Link to="/portfolio-two">Portfolio Two</Link>
              </li>
              <li>
                <Link to="/portfolio-three">Portfolio three</Link>
              </li>
              <li>
                <Link to="/portfolio-four">Portfolio Four</Link>
              </li>
              <li>
                <Link to="/portfolio-details">Portfolio Details</Link>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <Link to="#">
              Pages <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/counters">Counters</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/shop-details">Shop details</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/pricing">Pricing One</Link>
                  </li>
                  <li>
                    <Link to="/pricing-two">Pricing Two</Link>
                  </li>
                  <li>
                    <Link to="/pricing-three">Pricing Three</Link>
                  </li>
                  <li>
                    <Link to="/pricing-four">Pricing Four</Link>
                  </li>
                  <li>
                    <Link to="/pricing-five">Pricing Five</Link>
                  </li>
                  <li>
                    <Link to="/pricing-six">Pricing Six</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">Team</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/team-one">Team One</Link>
                  </li>
                  <li>
                    <Link to="/team-two">Team Two</Link>
                  </li>
                  <li>
                    <Link to="/team-three">Team Three</Link>
                  </li>
                  <li>
                    <Link to="/team-four">Team Four</Link>
                  </li>
                  <li>
                    <Link to="/team-single">Team Single</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">Testimonial</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/testimonial-one">Testimonial One</Link>
                  </li>
                  <li>
                    <Link to="/testimonial-two">Testimonial Two</Link>
                  </li>
                  <li>
                    <Link to="/testimonial-three">Testimonial Three</Link>
                  </li>
                  <li>
                    <Link to="/testimonial-four">Testimonial Four</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/404">404</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="#">
              Quem Somos <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/blog">Blog Page</Link>
              </li>
              <li>
                <Link to="/blog/blog-details">Blog details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
