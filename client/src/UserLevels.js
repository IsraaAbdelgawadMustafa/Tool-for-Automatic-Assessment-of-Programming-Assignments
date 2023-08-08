import React from 'react';
// import { Link } from 'react-router-dom';
// import '././Home.css';
import { useNavigate } from 'react-router-dom';

function UserLevels() {
  const navigate = useNavigate();

    const styles = `
    body {
      margin: 0;
      box-sizing: border-box;
    }

    /* CSS for header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: black;
    }

    .header .logo {
      font-size: 25px;
      font-family: 'Sriracha', cursive;
      color: white;
      text-decoration: none;
      margin-left: 30px;
    }

    .nav-items {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: black;
      margin-right: 20px;
    }

    .nav-items a {
      text-decoration: none;
      color: white;
      padding: 35px 20px;
    }

    /* CSS for main element */
    .intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 520px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }


    .intro h1 {
      font-family: sans-serif;
      font-size: 60px;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
    }

    .intro p {
      font-size: 20px;
      color: #d1d1d1;
      text-transform: uppercase;
      margin: 20px 0;
    }

    .intro button {
      background-color: #5edaf0;
      color: #000;
      padding: 10px 25px;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4)
    }

    .Bbutton {
      background-color: black;
      color: white;
      padding: 10px 25px;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4)
    }

    .achievements {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 40px 80px;
    }

    .achievements .work {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 40px;
    }

    .achievements .work i {
      width: fit-content;
      font-size: 50px;
      color: #333333;
      border-radius: 50%;
      border: 2px solid #333333;
      padding: 12px;
    }

    .achievements .work .work-heading {
      font-size: 20px;
      color: #333333;
      text-transform: uppercase;
      margin: 10px 0;
    }

    .achievements .work .work-text {
      font-size: 15px;
      color: #585858;
      margin: 10px 0;
    }

    .about-me {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 80px;
      border-top: 2px solid #eeeeee;
    }

    .about-me img {
      width: 500px;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
    }

    .about-me-text h2 {
      font-size: 30px;
      color: #333333;
      text-transform: uppercase;
      margin: 0;
    }

    .about-me-text p {
      font-size: 15px;
      color: #585858;
      margin: 10px 0;
    }

    /* CSS for footer */
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #302f49;
      padding: 40px 80px;
    }

    .footer .copy {
      color: #fff;
    }

    .bottom-links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 40px 0;
    }

    .bottom-links .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 40px;
    }

    .bottom-links .links span {
      font-size: 20px;
      color: #fff;
      text-transform: uppercase;
      margin: 10px 0;
    }

    .bottom-links .links a {
      text-decoration: none;
      color: #a1a1a1;
      padding: 10px 20px;
    }
    `;
   
    const Assignments = () => {
      navigate(`/Landing1`);
    };
    
    const Assignments2 = () =>
    {
      navigate(`/Landing2`);
    }
    const Assignments3 = () =>
    {
      navigate(`/Landing3`);
    }

    // const homePage = () => {
    //   navigate(`/`);
    // };
    const homePageUrl = '/';
  const assignmentsUrl = '/Landing1';

    return (
<main>
<style>{styles}</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
<body>
  <header class="header">
    <a href={homePageUrl} class="logo">CodePro</a>
    <nav class="nav-items">
      <a href={homePageUrl}>Home</a>
      <a href={assignmentsUrl}>Assignments</a>
     
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>Choose your programming level!</h1>
    </div>

    <div class="about-me">
      <div class="about-me-text">
        <h2>Level A Programming Skills: Advanced Mastery</h2>
        <p> At Level A, we offer advanced programming assignments designed to take your skills to new heights. This level is tailored for experienced programmers who are looking to further refine their expertise and tackle complex programming challenges with confidence.</p>
      </div>
     <button class="Bbutton" onClick={Assignments3}> Start Taking Assignments</button>
    </div>
    <div class="about-me">
      <div class="about-me-text">
        <h2>Level B Programming Skills: Proficient Proficiency</h2>
        <p> At Level B, we offer assignments designed for proficient programmers who are looking to expand their knowledge and refine their skills. Improve your skills now to be a level higher and to have Level A skills.</p>
      </div>
 <button class="Bbutton" onClick={Assignments}> Start Taking Assignments</button>      </div>
    <div class="about-me">
      <div class="about-me-text">
        <h2>Level C Programming Skills: Beginner Proficiency</h2>
        <p> At Level C, assessments are provided for beginners. Our Level C assignments provide a supportive and guided learning experience to help you grasp fundamental programming concepts and develop practical skills.</p>
      </div>
 <button class="Bbutton" onClick={Assignments2}> Start Taking Assignments</button>      </div>
  </main>
  <footer class="footer">
    <div class="copy">© 2023 CodePro</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href={homePageUrl}>Home</a>
        <a href={assignmentsUrl}>Assignments</a>
      </div>
       
    </div>
  </footer>
</body>
</main>
  );

}

export default UserLevels;
