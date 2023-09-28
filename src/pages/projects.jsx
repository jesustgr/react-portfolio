import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const mainDiv = {
    marginLeft: '60px'
  };

  const cardContainer = {
    display: 'flex',
    flexWrap: 'wrap', // Enable flex wrapping
    gap: '20px', // Add some spacing between cards
    marginBottom: '250px'
  };

  return (
    <div style={mainDiv}>
      <h1 style={{ marginTop: '30px' }}>Check Out My Projects !</h1>
      <div style={cardContainer}>
        <ProjectCard
          name="forumZ"
          deployed="https://forumz-090c0b5b4bff.herokuapp.com/"
          repo="https://github.com/Lopez-Jordan/forumZ"
          imagePath="/forumZ.png"
        />
        <ProjectCard
          name="Crypto Portfolio"
          deployed="https://ailllycxr.github.io/cryptoDashboard/"
          repo="https://github.com/Lopez-Jordan/cryptoDashboard"
          imagePath="/crypto.png"
        />
        <ProjectCard
          name="SQL project"
          deployed="https://github.com/Lopez-Jordan/Employee-Tracker"
          repo="https://github.com/Lopez-Jordan/Employee-Tracker"
          imagePath="/employeeTracker.png"
        />
        <ProjectCard
          name="Weather Report"
          deployed="https://lopez-jordan.github.io/weather-app/"
          repo="https://github.com/Lopez-Jordan/weather-app"
          imagePath="/weather.png"
        />
        <ProjectCard
          name="JS Quiz"
          deployed="https://lopez-jordan.github.io/javascript-quiz/"
          repo="https://github.com/Lopez-Jordan/javascript-quiz"
          imagePath="/quiz.png"
        />
        <ProjectCard
          name="Portfolio #1"
          deployed="https://lopez-jordan.github.io/second-portfolio-project/"
          repo="https://github.com/Lopez-Jordan/second-portfolio-project"
          imagePath="/portfolio.png"
        />
          <ProjectCard
          name="MongoDB"
          deployed=""
          repo="https://github.com/Lopez-Jordan/social-network-background"
          imagePath="/demo.png"
        />
        <ProjectCard
          name="Surf Report"
          deployed="https://surf-report-app-7b1dc82c323b.herokuapp.com/"
          repo="https://github.com/Lopez-Jordan/Surf-Report"
          imagePath="/surfReport.png"
        />
      </div>
    </div>
  );
}