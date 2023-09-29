export default function ProjectCard(props) {
    const cardStyle = {
        border: '4px solid black',
        backgroundColor: 'rgb(100,100,100)',
        borderRadius: '14px',
        padding: '20px',
        marginBottom: '20px',
        width: '200px',
        margin: '20px',
        boxShadow: '20px 20px 7px rgb(50,50,50)'
    };

    const imageStyle = {
        width: '100%',
        borderRadius: '6px',
    };

    const linkStyle = {
        fontWeight: '500',
        display: 'block',
        margin: '8px 0',
        padding: '6px',
        color: 'white',
        backgroundColor: 'rgb(200,100,100)',
        textDecoration: 'none',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'center',
    };

    return (
        <div style={cardStyle}>
            <h3 style={{textAlign: 'center', marginBottom: '10px', display: 'flex', color: 'white', justifyContent: 'center', fontSize: '22px'}}>{props.name}</h3>
            <img src={props.imagePath} alt="project image" style={imageStyle} />
            <a href={props.deployed} style={linkStyle}>Deployed Link</a>
            <a href={props.repo} style={linkStyle}>Repo Link</a>
        </div>
    );
}