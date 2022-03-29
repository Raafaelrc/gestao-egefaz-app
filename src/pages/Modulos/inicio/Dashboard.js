import React from "react"

import iconeFolga from '../../../assets/ICONE FOLGA.svg'
import iconeServidores from '../../../assets/ICONE SERVIDORES.svg'
import iconePatrimonio from '../../../assets/ICONE PATRIMONIO.svg'
import iconeHotelaria from '../../../assets/ICONE HOTELARIA.svg'
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';




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


            <div className="container-fluid" style={{ marginBottom: '10%' }}>
                <div classname="row">
                    <div id="contentTitulo" >
                        <h3 >Módulos</h3>
                    </div>
                    <div className="col-lg-12">
                        <div classname="bs-component" id="contentUM" >
                            <div className="contentDOIS">

                                <Card className="buttoncard" style={{ margin: '5px' }} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                   
                                        component="img"
                                        alt="Folga"
                                        height="250"
                                        image={iconeFolga}

                                        style={{padding:'10px'}}
                                    />
                                  
                                    <CardActions>
                                        <Button style={{ fontSize: '0.6rem' }}>Cadastrar</Button>
                                        <Button style={{ fontSize: '0.6rem' }}>Consultar</Button>
                                        <Button style={{ fontSize: '0.6rem' }}>Solcitar</Button>
                                    </CardActions>
                                </Card>
                                <Card className="buttoncard" style={{ margin: '5px' }} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Servidor"
                                        height="250"
                                        image={iconeServidores}
                                        style={{padding:'10px'}}
                                    />
                                  
                                    <CardActions>
                                        <Button style={{ fontSize: '0.6rem' }}>Cadastrar</Button>
                                        <Button style={{ fontSize: '0.6rem' }}>Consultar</Button>

                                    </CardActions>
                                </Card>
                                <Card className="buttoncard" style={{ margin: '5px' }} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Patrimônio"
                                        height="250"
                                        image={iconePatrimonio}
                                        style={{padding:'10px'}}
                                    />
                                    <CardActions>
                                        <Button style={{ fontSize: '0.6rem' }}>Cadastrar</Button>
                                        <Button style={{ fontSize: '0.6rem' }}>Consultar</Button>
                                        <Button style={{ fontSize: '0.6rem' }}>Movimentar</Button>
                                    </CardActions>
                                </Card>
                                <Card className="buttoncard" style={{ margin: '5px' }} sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Hotelaria"
                                        height="250"
                                        image={iconeHotelaria}
                                        style={{padding:'10px'}}
                                    />
                                    
                                    <CardActions>
                                        <Button style={{ fontSize: '0.6rem' }}>Cadastrar</Button>
                                        <Button style={{ fontSize: '0.6rem' }}>Consultar</Button>

                                    </CardActions>
                                </Card>
                            </div>









                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default DashBoard
