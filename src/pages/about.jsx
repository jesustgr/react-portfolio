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
          <h1 style={{marginTop: '30px', marginBottom: '30px'}}>Hi, I'm Jordan Lopez !</h1>
          <div style={secondDiv}>
            <img style={{height: '250px', width: 'auto', borderRadius: '20px', marginRight: '50px'}} src="/me.png" alt="picture of me" />
            <p style={{color: 'white', letterSpacing: '0px', fontSize: '18px'}}>
            I'm a dedicated and adaptable Junior Web Developer with a background in Economics and Mathematics
            who is enthusiastic about creating user-centered web experiences using HTML, CSS, and JavaScript.
            I am eager to enhance proficiency in both front-end and back-end development while using my skilled problem-solving abilities.
            At this point in my coding journey, I am ready to bring creativity and analytical abilities to a dynamic development team.
            </p>
          </div>
        </div>
      </>
    );
  }