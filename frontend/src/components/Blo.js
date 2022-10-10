import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Button} from "@mui/material"


export default function Blo( {image ,description,tle}) {
  const [expanded, setExpanded] = React.useState(true);

 

  return (
    <Card sx={{ width:"50%",margin:"auto", boxShadow:'5px 5px 10px #ccc', mt:2, ":hover":{
        boxShadow:'20px 20px 40px #ccc'},padding:'2vw'
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon  />
          </IconButton>
        }
        title={tle}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       {description}
      <Button>more</Button>
        </Typography>
      </CardContent>
  
   
    </Card>
  );
}
