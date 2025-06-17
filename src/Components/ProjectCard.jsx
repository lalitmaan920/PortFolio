import React from "react";
export default function ProjectCard() {
  return (
    <div className="col-lg-12 text-center">
      <img
        src="w3vill.png"
        alt="W3VILLA Project"
        className="rounded-circle mb-3"
        width="140"
        height="140"
      />
      <h2 className="fw-normal">W3VILLA</h2>
      <p>
        We have built enormous solutions for startups and enterprise across the world.
      </p>
      <p>
        <a
          className="btn btn-secondary"
          href="https://w3vill-dvgn.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View details »
        </a>
      </p>
    </div>
  );
}
