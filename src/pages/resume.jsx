export default function Resume() {
    const mainDiv = {
      marginRight: '60px',
      marginLeft: '60px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
  
      return (
        <>
          <div style={mainDiv}>
            <h1 style={{marginTop: '70px', marginBottom: '30px'}}>I am proficient in many Full Stack technologies !</h1>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgb(200,100,100)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: '900',
                fontSize: '15px',
                textAlign: 'center',
                boxShadow: '10px 10px 7px black'
              }}
            >
              <a
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                href="/Resume-4.pdf"
                download="Resume-4.pdf"
              >
                Download Resume Here
              </a>
            </button>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px', color: 'white', position: 'relative', left: '80px', fontSize: '20px'}}>
              <ul>
                <li>HTML and CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Handlebars</li>
                <li>Insomnia</li>
              </ul>
              <ul style={{marginLeft: '200px'}}>
                <li>Express.js</li>
                <li>React</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>Server side API and Web API</li>
                <li>Full Stack Development</li>
                <li>Bootstrap and UIkit</li>
              </ul>
          </div>
        </>
      );
    }