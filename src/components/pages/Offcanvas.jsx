import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "../style/offcanvas.css";
import React, { useState, useRef } from "react";

export default function OffcanvasExample() {
  return (
    <>
      <Navbar
        expand="expand-md"
        className="navbar-expand-lg shadow-sm mynavbar"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#hero">
            <h1 className="navbar-header">Abdullah Husairin</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0 bg-white"
          />
          <Navbar.Offcanvas
            placement="end"
            aria-labelledby="responsive-navbar-nav"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <h1 className="offcanvas-header">Abdullah Husairin</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <nav className="d-flex ms-auto gap-5">
                <a
                  href="#hero"
                  className="custom-nav-link"
                >
                  Beranda
                </a>
                <a
                  href="#about"
                  className="custom-nav-link"
                >
                  About
                </a>
                <a
                  href="#project"
                  className="custom-nav-link"
                >
                  My Project
                </a>
                <a
                  href="#cobaloration"
                  className="custom-nav-link"
                >
                  Cobaloration
                </a>
                <a
                  href="#form"
                  className="custom-nav-link"
                >
                  Contact
                </a>
              </nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
