import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MediaCard() {

  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Helio-Junio/repos')
      .then(response => response.json())
      .then(data => setRepositorios(data));
  }, []);

 return (
    <div className="card-container">
      {repositorios.map(repo => (
        <Card sx={{ minWidth: 275, marginBottom: 2 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              {repo.created_at.substring(0, 10). split('-').reverse().join('/')}
            </Typography>
            <Typography variant="h5" component="div">
              {repo.name.split('-').join(' ')}
            </Typography>
            <Typography variant="body2">
              {repo.description}
              <br />
              <strong>{repo.language}</strong>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={repo.html_url} target='_blank'>Saiba mais</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
