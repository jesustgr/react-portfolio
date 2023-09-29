export default function About() {
    
    const secondDiv = {
      display: 'flex',
    }

    const mainDiv = {
      marginRight: '60px',
      marginLeft: '60px'
    }


    return (
      <>
        <div style={mainDiv}>
          <h1 style={{marginTop: '30px', marginBottom: '30px'}}>Hello, I'm Jesus Thomas Reyes !</h1>
          <div style={secondDiv}>
            <img style={{height: '400px', width: 'auto', borderRadius: '20px', marginRight: '50px'}} src="/me.jpg" alt="picture of me" />
            <p style={{color: 'white', letterSpacing: '0px', fontSize: '18px'}}>
            I'm someone who's really motivated and focused on getting things done. I love working with teams that are full of energy, 
            and I'm always eager to learn more about the technical side of software development. My goal is to make a meaningful impact 
            in this ever-changing field. I'm always hungry for knowledge and constantly looking for ways to improve. I'm passionate about 
            finding new ideas and making them work, and I'm not afraid of tackling tough challenges.
            In summary, I'm a motivated and forward-thinking professional who loves to work with others, learn new things, and make a 
            positive difference in software development. I'm excited about the chance to bring my skills and knowledge to your team and 
            help drive innovation.
            </p>
          </div>
        </div>
      </>
    );
  }