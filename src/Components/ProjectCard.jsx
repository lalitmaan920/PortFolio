import React from "react";
export default function ProjectCard() {
  return (
    <div className="col-lg-12 text-center mt-5 pt-5 bg-dark min-vh-100 fixed-top" >
    <div className="container-fluid col-6 mt-5 pt-5  border border-info rounded p-3">
      <img
        src="w3vill.png"
        alt="W3VILLA Project"
        className="rounded-circle mb-3"
        width="140"
        height="140"
      />
      <h2 className="fw-normal e text-white">W3VILLA</h2>
      <p>
        We have built enormous solutions for startups and enterprise across the world.
      </p>
      <p>
        <a
          className="btn btn-outline-info"
          href="https://w3vill-dvgn.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View details »
        </a>
      </p>
    </div>
    </div>
  );
}
