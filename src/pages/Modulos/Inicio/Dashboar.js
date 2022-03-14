import React from "react"
import { Carousel } from "react-bootstrap"
import Foto from "../../../assets/aluna.png"

const DashBoard = () => {
    return(
    <Carousel variant="dark">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="../../../assets/aluna.png"
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=eee"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default DashBoard