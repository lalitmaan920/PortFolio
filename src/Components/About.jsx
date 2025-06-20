import React from 'react'

export default function About() {
  return (
    <div className="row mt-5 pt-5 bg-dark text-white min-vh-100 fixed-top">
  <div className="col-3">
    <div id="list-example" class="list-group">
      <a className="list-group-item list-group-item-action bg-info text-white" href="#list-item-1">About Me</a>
      <a className="list-group-item list-group-item-action bg-info text-white" href="#list-item-2">Skills</a>
      <a className="list-group-item list-group-item-action bg-info text-white" href="#list-item-3">Education</a>
    </div>
  </div>
  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="About Me">About Me</h4>
      <p>I am a final year B.Tech Electrical Engineering student at Rajasthan Technical University, Kota, with a CGPA of 8.10. Alongside my core engineering studies, I have developed strong technical skills in Python, Java, HTML, and CSS. I'm passionate about technology and software development, and I enjoy building web applications and learning new tools.

I am a fast learner, team-oriented, and always eager to explore challenging opportunities where I can apply both my engineering background and programming knowledge to solve real-world problems.</p>
      <h4 id="Skills">Skills</h4>
      <p>Programming Languages: Python, Java

         Web Technologies: HTML5, CSS3

        Tools & Frameworks: VS Code, Git, Bootstrap (optional)

</p>
      <h4 id="Education">Education</h4>
      <p>Bachelor of Technology (B.Tech) in Electrical Engineering
             Rajasthan Technical University, Kota, Rajasthan
                   Final Year (CGPA: 8.10)
           Expected Graduation: [April, 2026]</p>
    </div>
  </div>
</div>
  )
}