import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Facility = (props) => {
    const {bgColor, name, innerText, img, textColor} = props.facility;
    const cardStyle = {
        backgroundColor: `${bgColor}`,
        height: '319px'
    };
    const btnBGColor = {
        backgroundColor: "#dff0ef",
        border: "0px"
    };
    const textColour = {
        color: `${textColor}`
    };
    return (
        <div>
            <Col>
                <Card className=" mx-start text-start rounded-0" style={cardStyle}>
                    <Card.Img variant="top w-25 mt-3 ms-3 img-fluid" src={img}/>
                    <Card.Body>
                        <Card.Title><h3 className="text-white">{name}</h3></Card.Title>
                        <Card.Text style={textColour}>
                            {innerText}
                        </Card.Text>
                        <Button style={btnBGColor} className="rounded-10 cursor-pointer text-dark fw-bold px-3 mx-10 py-2">Ko'proq O'qish</Button>
                    </Card.Body>
                </Card>
            </Col>           
        </div>
    );
};

export default Facility;