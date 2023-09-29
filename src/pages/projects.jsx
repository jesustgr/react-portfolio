import ProjectCard from '../components/projectCard';

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
          name="Crypto Portfolio"
          deployed="https://ailllycxr.github.io/cryptoDashboard/"
          repo="https://github.com/Ailllycxr/cryptoDashboard"
          imagePath="/crypto.png"
        />
        <ProjectCard
          name="Black Jack Simulator"
          deployed="https://blackjack-card-counter-2023-1f1cb4da18a4.herokuapp.com/"
          repo="https://github.com/alam2tg/Card-Counting-Blackjack"
          imagePath="/bj.png"
        />
        <ProjectCard
          name="Social Network API"
          deployed="https://github.com/jesustgr/social-network-api"
          repo="https://github.com/jesustgr/social-network-api"
          imagePath="/employee.png"
        />
        <ProjectCard
          name="Weather Dashboard"
          deployed="https://jesustgr.github.io/weather-dashboard/"
          repo="https://github.com/jesustgr/weather-dashboard"
          imagePath="/weather.png"
        />
        <ProjectCard
          name="Work Day Scheduler"
          deployed="https://jesustgr.github.io/work-day-scheduler/"
          repo="https://github.com/jesustgr/work-day-scheduler"
          imagePath="/workday.png"
        />
      </div>
    </div>
  );
}