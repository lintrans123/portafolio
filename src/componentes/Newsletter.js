import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');


  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email ,
      FNAME: firstName
    })
  }

  const clearFields = () => {
    setEmail('');
    setFirstName('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribete en mi  Newsletter<br></br> & no te pierdas de nuevas actualizaciones</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{typeof message === 'string' ? message : 'Ocurrió un error.'}</Alert>}
              {status === 'success' && <Alert variant="success">{typeof message === 'string' ? message : '¡Suscripción exitosa!'}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit} className="form-botton" >
                <div className="new-email-bx">
             <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="Nombre" />
                </div>
                </form>
                
                <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
              <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">enviar</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}










