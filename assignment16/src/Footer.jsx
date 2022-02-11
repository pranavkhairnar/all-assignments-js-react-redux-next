import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="fixed-bottom bg-dark"
        style={{ backgroundColor: "grey" }}
      >
        <div className="d-flex justify-content-center border border-primary">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-linkedin"></a>
        </div>
      </footer>
    </>
  );
}
