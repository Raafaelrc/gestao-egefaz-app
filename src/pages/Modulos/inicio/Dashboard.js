import React from "react"

import Header from "../../../components/header/Header"
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const DashBoard = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>

            <Header />
            <div className="container-fluid" style={{ marginBottom: '10%' }}>
                <div classname="row">
                    <div id="contentTitulo" >
                        <h3 >Módulos</h3>
                    </div>
                    <div className="col-lg-12">
                        <div classname="bs-component" id="contentUM" >
                            
                                <Card className="buttoncard" style={{margin:'5px'}} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Folga"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Folga
                                        </Typography>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{fontSize:'0.6rem'}}>Cadastrar</Button>
                                        <Button style={{fontSize:'0.6rem'}}>Consultar</Button>
                                        <Button style={{fontSize:'0.6rem'}}>Solcitar</Button>
                                    </CardActions>
                                </Card>
                                <Card className="buttoncard" style={{margin:'5px'}} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Servidor"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Servidor
                                        </Typography>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{fontSize:'0.6rem'}}>Cadastrar</Button>
                                        <Button style={{fontSize:'0.6rem'}}>Consultar</Button>
                                        
                                    </CardActions>
                                </Card>
                                <Card className="buttoncard" style={{margin:'5px'}} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Patrimônio"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Patrimônio
                                        </Typography>
                                       
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{fontSize:'0.6rem'}}>Cadastrar</Button>
                                        <Button style={{fontSize:'0.6rem'}}>Consultar</Button>
                                        <Button style={{fontSize:'0.6rem'}}>Movimentar</Button>
                                    </CardActions>
                                </Card>
                                <Card className="buttoncard" style={{margin:'5px'}} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Hotelaria"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Hotelaria
                                        </Typography>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{fontSize:'0.6rem'}}>Cadastrar</Button>
                                        <Button style={{fontSize:'0.6rem'}}>Consultar</Button>
                                        
                                    </CardActions>
                                </Card>

                         

                           





                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default DashBoard
