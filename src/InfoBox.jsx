import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){

    const images = {
        rain: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhaW58ZW58MHx8MHx8fDA%3D",
        cold: "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        spring: "https://images.unsplash.com/photo-1686662740541-2370d9da499e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNwcmluZyUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
        warm: "https://images.unsplash.com/photo-1712325910182-fb465c784fe6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D", 
        hot: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
    }

    let capitaliseCity = ()=>{
        let newCity = info.city.charAt(0).toUpperCase() + info.city.slice(1);
        return newCity;
    }

    return(
        <div className="info-box">
            <h3>Weather Info</h3>
            <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={
            (info.humidity>70)?
            images.rain : (info.temp < 10)?
            images.cold : (info.temp>40)?
            images.hot : (info.temp <20)? 
            images.spring: images.warm
        }
        //image="https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?q=80&w=3155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={info.weather}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {capitaliseCity()} : {info.temp}&deg;
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Feels like {info.feelsLike}&deg;
          <br/>
          The weather can be described as {info.weather}.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lowest: {info.minTemp}&deg;
          &nbsp;
          Highest: {info.maxTemp}&deg;
          <br/>
          Humidity: {info.humidity}
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}