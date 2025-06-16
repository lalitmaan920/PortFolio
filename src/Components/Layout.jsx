import React from "react";
import ResumeButton from "./Resume";

export default function Layout() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 my-4 ">
          <div class="col-lg-8 px-4">
            {" "}
            <h1 class="display-4 fst-italic mt-5">Lalit Kumar</h1>{" "}
            <p class="lead my-3 mt-5 ">
              Hi! I'm a Full Stack Web Developer passionate about creating
              user-friendly and scalable web applications
            </p>{" "}
            <p class="lead mb-0">
              <a href="/" class="text-body-emphasis fw-bold">
                <button type="button" class="btn btn-primary mx-2 ">
                  Hire Me
                </button>
                <button class="btn btn-secondary mx-2" >
                    <ResumeButton/>
                </button>
              </a>
            </p>{" "}
          </div>
        </div>
        <div className="col-md-6 my-4 ">
          <img src="Lalit.png"
            class="img-fluid col-md-7 rounded-circle img-fluid"
            alt="Lalit Kumar"
            height={150}
            width={200}
          ></img>
        </div>
      </div>
     <button type="button" class="btn btn-success btn-lg mx-5"><a href="https://www.linkedin.com/in/lalit-maan-a133a42b9" target="_blank" class="btn btn-outline-success">
  <i class="fab fa-linkedin"></i>
</a>Linkdin</button>
     <button type="button" class="btn btn-info btn-lg"><a
  href="https://github.com/lalitmaan920"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-info"
>
  
</a>
 GitHub
</button>
    </>
  );
}