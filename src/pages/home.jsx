import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import OffcanvasExample from "../components/pages/Offcanvas";
import Footer from "../components/pages/footer";
import Iframe from "react-iframe";
import "../style/home.css";
import { Parallax } from "react-parallax";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import React, { useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax as ParallaxSwiper } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import CarouselEffect from "../components/pages/CarouselEfffect";

function FormExample() {
  return (
    <div
      className="form"
      id="form"
    >
      <div>
        <h1
          className="header-form"
          data-aos="zoom-in"
        >
          Hubungi Kami
        </h1>
      </div>
      <Form>
        <Form.Group
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            className="form-name"
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Email"
            className="form-name"
          />
          <Form.Label>Pesan</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            className="form-name"
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="button-form"
          >
            Kirim
          </button>
        </div>
      </Form>
    </div>
  );
}

function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="carousel"
        data-aos="fade-up"
      >
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/google.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/gojek.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/honda.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/nestle.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/gucci.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/kominfo.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/tokped.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/starbucks.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-carousel">
            <img
              src="assets/home/sponsored/bmw.png"
              alt="google"
              className="sponsored"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default function home() {
  const audioRef = useRef(null);
  const [sedangDiputar, setSedangDiputar] = useState(false);
  const [tampilkanIkon, setTampilkanIkon] = useState(false);

  const aturPutarPause = () => {
    if (sedangDiputar) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setSedangDiputar(!sedangDiputar);
    setTampilkanIkon(true);
  };
  return (
    <>
      <div
        className="bg-hero"
        id="hero"
      >
        <OffcanvasExample />
        <Parallax
          strength={150}
          blur={{ min: -5, max: 10 }}
          bgImage="assets/home/images/bg-hero2.jpg"
          className="parallax-bg"
        >
          <div className="content">
            <div className="header-hero">My Portfolio</div>
            <a href="#about">
              <div
                className="title-hero"
                onClick={aturPutarPause}
              >
                Let`s Go!
              </div>
            </a>
          </div>
        </Parallax>
        <Container
          className="hero-section"
          id="about"
        >
          <div
            className="d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3>Halo Semua , saya</h3>
            <h1>Abdullah Husairin</h1>
            <h3>Web Developer & Content Creator</h3>
            <p>Belajar programmer itu sangatlah menyenangkan </p>
            <a href="#form">
              <button className="button-hub">Hubungi Saya</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="assets/home/images/profil.png"
              alt="profil"
              className="foto-profil"
            />
          </div>
        </Container>
        <Container
          className="hero-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="about-header">
            <h3 className="">TENTANG SAYA</h3>
            <h1>Grow for the better</h1>
            <p>
              Saya seorang web developer front end, tools yang saya gunakan
              dalam merancang sebuah web adalah HTML, CSS, Javascript dan React.
              Seya juga memiliki komunikasi yang baik dimana kemampuan tersebut
              berguna untuk bekerja sama dalam tim, seperti tim desain, backend
              ataupun client untuk menciptakan antarmuka yang menarik,
              responsive, dan mudah digunakan.
            </p>
          </div>
          <div className="about-sosial">
            <h3 className="">Mari Berteman</h3>
            <p>
              Saya juga aktif dibeberapa jejaringan sosial, bila ingin tahu hal
              apa saja yang saya lakukan silahkan kunjungi link di bawah ini.
            </p>
            <div className="d-flex justify-content-between">
              <a
                className="logo-sosial"
                href="https://www.youtube.com/@AbdulFilm"
              >
                <img
                  src="assets/home/icons/youtube.png"
                  alt="youtube"
                />
              </a>
              <a
                className="logo-sosial"
                href="https://www.instagram.com/abdulfilm_/"
              >
                <img
                  src="assets/home/icons/instagram.png"
                  alt="instagram"
                />
              </a>
              <a
                className="logo-sosial"
                href="https://www.tiktok.com/@abdulfilm_?is_from_webapp=1&sender_device=pc"
              >
                <img
                  src="assets/home/icons/tiktok.png"
                  alt="tiktok"
                />
              </a>
              <a
                className="logo-sosial"
                href="#facebook"
              >
                <img
                  src="assets/home/icons/facebook.png"
                  alt="facebook"
                />
              </a>
              <a
                className="logo-sosial"
                href="#twitter"
              >
                <img
                  src="assets/home/icons/twitter.png"
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </Container>
        <Container className="hobby">
          <h3
            className="header-hobby"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Hobby
          </h3>
          <p
            className="paragraf-hobby"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Saya juga memiliki hobi motoran untuk sekedar merelaxkan pikiran
            ataupun di jadikan sebagai content yang saya upload di Tiktok dan
            Youtube.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CarouselEffect />
          </div>
        </Container>
        <Parallax
          strength={-600}
          blur={{ min: -5, max: 10 }}
          bgImage="assets/home/images/bg-hero4.jpg"
        >
          <div
            className="d-flex flex-column justify-content-center align-items-center gap-5"
            id="project"
          >
            <div
              className="header-portfolio"
              data-aos="zoom-in"
            >
              My Project
            </div>
            <div className="body-project">
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <div>
                  <img
                    src="assets/home/myproject/project1.png"
                    alt="project1"
                    className="project"
                  />
                </div>
                <h1 className="header-project">Kean Signature</h1>
                <p className="paragraf-project">
                  Berikut adalah project marketplace dan saya sebagai frontend
                  dari mulai merancang UI dari figma lalu di implementasikan
                  menggunakan React hingga ke API.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <div>
                  <img
                    src="assets/home/myproject/project2.png"
                    alt="project1"
                    className="project"
                  />
                </div>
                <h1 className="header-project">Wedding</h1>
                <p className="paragraf-project">
                  Berikut adalah project yang saya pelajari dari Youtube ialah
                  membuat website Undangan Pernikahan, website tersebut di buat
                  dengan sederhana menggunakan HTML, CSS dan Bootstrap 5 serta
                  sudah responsive.
                </p>
              </div>
            </div>
            <div className="body-project">
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <div>
                  <img
                    src="assets/home/myproject/project3.png"
                    alt="project1"
                    className="project"
                  />
                </div>
                <h1 className="header-project">Catatan Belanja</h1>
                <p className="paragraf-project">
                  Berikut adalah project Catatan Belanjaku dibuat dengan
                  menggunakan React. Sesuai namanya project ini dibuat untuk
                  user membuat catatan belanja dari mulai menambahkan, menghapus
                  dan mengecek belanjaan, bisa juga mengurutkan belanjaan dari
                  filter yang sudah disediakan.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <div>
                  <img
                    src="assets/home/myproject/project4.png"
                    alt="project1"
                    className="project"
                  />
                </div>
                <h1 className="header-project">Login</h1>
                <p className="paragraf-project">
                  Berikut adalah project Login dimana ini hanya sebuah tampilan
                  login sederhana dibuat dengan HTML, CSS dan Bootstrap 5 dan
                  disebelah kanannya di tambahkan sebuah carousel untuk
                  mempercantik.
                </p>
              </div>
            </div>
          </div>
        </Parallax>
        <Container
          className="d-flex flex-column align-items-center"
          id="cobaloration"
        >
          <h2 data-aos="zoom-in">Bekerjasama Dengan</h2>
          <p
            className="paragraf-sponsored"
            data-aos="fade-up"
          >
            Berbagai perusahaan dan instansi yang mensupport kami.
          </p>
        </Container>
        <Carousel />
        <Parallax
          strength={-120}
          blur={{ min: -5, max: 10 }}
          bgImage="assets/home/images/bg-hero1.jpg"
        >
          <div
            className="d-flex flex-column align-items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="header-lokasi">Lokasi</div>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.4494009830149!2d106.81379227416147!3d-6.5726626654722295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c524d3fbc9dd%3A0x1dd0ee4f17462000!2sJl.%20Raya%20Kawung%20Luwuk%20No.35%2C%20RT.06%2FRW.01%2C%20Tegal%20Gundil%2C%20Kec.%20Bogor%20Utara%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016152!5e0!3m2!1sid!2sid!4v1702203319468!5m2!1sid!2sid"
              loading="lazy"
              allowFullScreen
              frameBorder="0"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-maps"
            />
          </div>
        </Parallax>
        <Container>
          <FormExample />
        </Container>
        <Footer />
      </div>
      <div
        id="audio"
        className="audio"
      >
        <audio
          ref={audioRef}
          id="song"
          loop
          src="assets/audio/rise.mp3"
          type="audio/mp3"
        />
        <div
          className="audio-icons"
          style={{ display: tampilkanIkon ? "block" : "none" }}
        >
          {sedangDiputar ? (
            <FaRegPauseCircle
              className="custom-icon"
              onClick={aturPutarPause}
            />
          ) : (
            <FaRegPlayCircle
              className="custom-icon"
              onClick={aturPutarPause}
            />
          )}
        </div>
      </div>
    </>
  );
}
