import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {toast} from "react-toastify";
import Container from "react-bootstrap/Container";

const Counter = () => {
    const [num, setNumber] = useState(0);
    const increase = () => {
        setNumber(num + 1);
    }
    const decrease = () => {
        if (num <= 0) {
            toast("?????");
            setNumber(0);
        } else {
            setNumber(num - 1);
        }
    }

    return (
        <Container className="panel">
            <div>
                <Button style={{width: '100px', marginRight: '15px'}} onClick={increase}>+1</Button>
                <Button style={{width: '100px'}} onClick={decrease}>-1</Button>
                <p style={{marginTop : '15px'}}>결과값 : {num}</p>
            </div>
        </Container>
    )
}

export default Counter;
