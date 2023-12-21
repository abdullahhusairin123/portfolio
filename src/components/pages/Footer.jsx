import { Parallax } from "react-parallax";
import "../style/footer.css";

export default function Footer() {
  return (
    <>
      <Parallax
        strength={-300}
        blur={{ min: -5, max: 15 }}
        bgImage="assets/home/images/bg-hero4.jpg"
        className="mt-5"
      >
        <div
          className="footer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="footer-one">
            <h6>Abdullah Husairin</h6>
            <p className="paragraf-footer">
              abdullahhusairin5@gmail.com Jl Arzimar II No.95 Kota Bogor
            </p>
          </div>
          <div className="footer-two">
            <h6>Social</h6>
            <div className="list-footer">
              <a href="https://www.youtube.com/@AbdulFilm">
                <li>Youtube</li>
              </a>
              <a href="https://www.instagram.com/abdulfilm_/">
                <li>Instagram</li>
              </a>
              <a href="https://www.tiktok.com/@abdulfilm_?is_from_webapp=1&sender_device=pc">
                <li>Tiktok</li>
              </a>
              <a href="#facebook">
                <li>Facebook</li>
              </a>
              <a href="#twitter">
                <li>Twitter</li>
              </a>
            </div>
          </div>
          <div className="footer-two">
            <h6>Sitemaps</h6>
            <div className="list-footer">
              <a href="#beranda">
                <li>Beranda</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#project">
                <li>MyProject</li>
              </a>
              <a href="#cobaloration">
                <li>Cobaloration</li>
              </a>
              <a href="#form">
                <li>Contact</li>
              </a>
            </div>
          </div>
          <div className="footer-two">
            <h6>Element</h6>
            <div className="list-footer">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap 5</li>
              <li>React</li>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="d-flex justify-content-center mt-3">
          <p className="text-copyright">
            © 2023 Abdullah Husairin | All Rights Reserved
          </p>
        </div>
      </Parallax>
    </>
  );
}
