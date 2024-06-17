import { Form, Formik } from "formik";
import { Button, Col, Input, Row } from "reactstrap";

const CreateUserComponent = () => {
    return (
        <>
            <Formik initialValues={{lastName:''}}>
                {({values , handleChange})=>(
                    <Form>
                        <Row style={{marginBottom:'20px'}}>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' name="lastName" value={values.lastName} onChange={handleChange} id='floatingInput' placeholder='FirstName' />
                                <label htmlFor='floatingInput'>FirstName</label>
                                </div>
                            </Col>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='LastName' />
                                <label htmlFor='floatingInput'>LastName</label>
                                </div>
                            </Col>                      
                        </Row>

                        <Row style={{marginBottom:'20px'}}>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='Email' />
                                <label htmlFor='floatingInput'>Email</label>
                                </div>
                            </Col>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='PhoneNumber' />
                                <label htmlFor='floatingInput'>PhoneNumber</label>
                                </div>
                            </Col>                      
                        </Row>

                        <Row style={{marginBottom:'20px'}}>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='Password' />
                                <label htmlFor='floatingInput'>Password</label>
                                </div>
                            </Col>
                            <Col md='3' sm='12'>
                                <div className='form-floating'>
                                <Input type='checkbox' id='floatingInput' style={{height:'30px' , width:'30px'}}/>
                                <label style={{marginRight:'20px'}}>Teacher</label>
                                </div>
                            </Col>  

                            <Col md='3' sm='12'>
                                <div className='form-floating'>
                                <Input type='checkbox' id='floatingInput' style={{height:'30px' , width:'30px'}}/>
                                <label style={{marginRight:'20px'}}>Student</label>
                                </div>
                            </Col>                         

                        </Row>

                        <Button type='submit' color="primary">create</Button>
                    </Form>

                )}
            </Formik>
        </>
    );
}
 
export default CreateUserComponent;