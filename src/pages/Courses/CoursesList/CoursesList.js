import { useQuery } from 'react-query'
import http from '../../../core/services/interceptore'
import { Col, Row } from 'reactstrap'


const CoursesList = () => {

  const getAllCourses =async () => {
    const res =await http.get('/Course/CourseList?PageNumber=1&RowsOfPage=100&SortingCol=DESC&SortType=Expire&Query')
    return res
  }
  const {data} = useQuery('allCourses' , getAllCourses,{
    onSuccess:(data)=>{
      console.log(data);
    }
  })

  return (
  <>
  <Row>
  <Col sm='12'>
    <div style={{border:'1px solid #ccc'}}>
      {data?.courseDtos.map((item) => {
        return(
          <div style={{border:'1px solid #ccc',height:'60px',display:'flex',justifyContent:'end'}}>
            <h1 style={{width:'39%'}}>{item.title}</h1>
            <h1 style={{width:'25%'}}>{item.statusName}</h1>
            <h1 style={{width:'15%'}}>{item.typeName}</h1>
            <h1 style={{width:'20%'}}>{item.levelName}</h1>
          </div>
        )
      })}
    </div> 
  </Col>
  </Row>
  </>
  );
}
 
export default CoursesList;