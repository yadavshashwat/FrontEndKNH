import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    { 
        icon: <img className="icon-departments" src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608584685/Icons/Icons-pregnancy_xapjto.png"></img>,
        title: 'Gynaecology',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <img className="icon-departments" src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608583383/Icons/Icon-uterus_b0rqds.png"></img>,
        title: 'Obstretics',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <img className="icon-departments" src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608584685/Icons/Icons-neonatal_ntdqy2.png"></img>,
        title: 'Neonatology and Pediatrics',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <img className="icon-departments" src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608584685/Icons/Icon-lab_jvvxkb.png"></img>,
        title: 'Radiology and Laboratory',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <img className="icon-departments" src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608584685/Icons/Icon-ivf_lhfrhi.png"></img>,        title: 'IVF Centre',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    // { 
    //     icon: <FiMonitor />,
    //     title: 'Mobile App Development',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
