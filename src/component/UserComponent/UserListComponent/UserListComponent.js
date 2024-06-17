import { useQuery } from 'react-query';
import http from '../../../core/services/interceptore'
import { Col, Input, Row } from 'reactstrap';
import course from '../../../../public/icons8-menu-vertical-48.png';

const UserListComponent = () => {
    const getUserList =async () => {
        const res = await http.get('/User/UserMannage?PageNumber=1&RowsOfPage=100&SortingCol=DESC&SortType=InsertDate&Query=&IsActiveUser=true')
        return res
    }
    const {data} = useQuery('userList' , getUserList)
    data && console.log(data);

    const hanleDelete = async () => {
        const res = await http.delete(`/User/UserMannage?PageNumber=1&RowsOfPage=100&SortingCol=DESC&SortType=InsertDate&Query=&IsActiveUser=true/${id}`)        
        return res
    }  

    return (
        <>  
            <Row>
                <Col sm='12'>
                    <div style={{border:'1px solid #ccc',borderRadius:'10px'}}>
                        <div style={{display:'flex',height:'40px',alignItems:'center',borderBottom:'1px solid #ccc',justifyContent:'end'}}>
                            <h2 style={{width:'29%',fontSize:'20px'}}>USER</h2>
                            <h2 style={{width:'30%',fontSize:'20px'}}>ROLE</h2>
                            <h2 style={{width:'15%',fontSize:'20px'}}>PHONE</h2>
                            <h2 style={{width:'25%',fontSize:'20px'}}>ACTIONS</h2>
                        </div>
                        <div>
                            {data?.listUser.map((item)=>{
                                return(
                                    <div style={{minHeight:'60px',borderBottom:'1px solid #ccc',display:'flex',alignItems:'center'}}>
                                        <div style={{width:'30%',display:'flex',gap:'20px'}}>
                                            <img src={item.pictureAddress} style={{width:'30px',height:'30px',marginRight:'10px',borderRadius:'100%'}} />
                                            <div>
                                                <h2 style={{fontSize:'14px'}}>{item.fname}{item.lname}</h2>
                                                <h2 style={{fontSize:'11px'}}>{item.gmail}</h2>
                                            </div>
                                        </div>
                                        <p style={{width:'30%'}}>{item.userRoles}</p>
                                        <p style={{width:'30%'}}>{item.phoneNumber}</p>
                                        {/* <p style={{width:'14%'}}>{item.gender===true ? 'MARD' : 'ZAN'}</p>
                                        <p style={{width:'14%'}}></p> */}
                                        <div style={{width:'10%',display:'flex',justifyContent:'center'}}>
                                            <button onClick={hanleDelete}>Delete</button>
                                            <button>Edit</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
 
export default UserListComponent;