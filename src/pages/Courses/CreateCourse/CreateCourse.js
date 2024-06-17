import { Form, Formik } from "formik";
import { Button, Col, Input, Row } from "reactstrap";
import http from '../../../core/services/interceptore'
import { useQuery } from "react-query";

const CreateCourse = () => {

    const getCreateCourse = async () =>{
        const res = await http.get('/Course/GetCreate')
        console.log(res);
        return res
    }

    const {data} = useQuery('getCreate' , getCreateCourse)
    return (
    <>
            <Formik initialValues={{lastName:''}}>
                {({values , handleChange})=>(
                    <Form>
                        <Row style={{marginBottom:'20px'}}>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' name="lastName" value={values.lastName} onChange={handleChange} id='floatingInput' placeholder='techName' />
                                <label htmlFor='floatingInput'>techName</label>
                                </div>
                                {/* {data?.technologyDtos.map(item=>{
                                    return(
                                        <div>{item.techName} - {item.id}</div>
                                    )
                                })} */}
                            </Col>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='describe' />
                                <label htmlFor='floatingInput'>describe</label>
                                </div>
                                {/* {data?.technologyDtos.map(item=>{
                                    return(
                                        <div>{item.describe} - {item.id}</div>
                                    )
                                })} */}
                            </Col>                      
                        </Row>

                        <Row style={{marginBottom:'20px'}}>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='typeName' />
                                <label htmlFor='floatingInput'>typeName</label>
                                </div>
                                {/* {data?.courseTypeDtos.map(item=>{
                                    return(
                                        <div>{item.typeName} - {item.id}</div>
                                    )
                                })} */}
                            </Col>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='levelName' />
                                <label htmlFor='floatingInput'>levelName</label>
                                </div>
                                {/* {data?.courseLevelDtos.map(item=>{
                                    return(
                                        <div>{item.levelName} - {item.id}</div>
                                    )
                                })} */}
                            </Col>                      
                        </Row>

                        <Row style={{marginBottom:'20px'}}>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='teacherName' />
                                <label htmlFor='floatingInput'>teacherName</label>
                                </div>
                                <div style={{height:'100px',overflow:'hidden'}}>
                                    {/* {data?.teachers.map(item=>{
                                        return(
                                            <div>{item.fullName} - {item.teacherId}</div>
                                        )
                                    })} */}
                                </div>
                            </Col>
                            <Col md='6' sm='12'>
                                <div className='form-floating'>
                                <Input type='text' id='floatingInput' placeholder='Capacity' />
                                <label htmlFor='floatingInput'>Capacity</label>
                                </div>
                                <div style={{height:'100px',overflow:'hidden'}}>
                                    {/* {data?.classRoomDtos.map(item=>{
                                        return(
                                            <div>{item.capacity}</div>
                                        )
                                    })} */}
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
 
export default CreateCourse;