import React ,{ Component }from "react";
// import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    { 
        icon: <img className="icon-departments" alt="Gynaecology" src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608583383/Icons/Icon-uterus_b0rqds.png"></img>,
        title: 'Gynaecology',
        description: 'Dealing with the specialized care of women health issues from menarche to menopause',
        path:"/service/gynaecology"
    },
    {
        icon: <img className="icon-departments" alt="Obstretics" src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608584685/Icons/Icons-pregnancy_xapjto.png"></img>,
        title: 'Obstretics',
        description: 'Dealing with the specialized care of the mother during pregnancy and child birth',
        path:"/service/obstretics"
    },
    {
        icon: <img className="icon-departments" alt="Neonatology and Pediatrics"  src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608584685/Icons/Icons-neonatal_ntdqy2.png"></img>,
        title: 'Neonatology and Pediatrics',
        description: 'Dealing with the specialized care of the new born babies and children',
        path:"/service/neonatology"
    },
    {
        icon: <img className="icon-departments" alt="IVF Centre"  src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608584685/Icons/Icon-ivf_lhfrhi.png"></img>,        
        title: 'IVF Centre',
        description: 'Dealing with specialized care for couples having difficuly in conceiving a child',
        path:"/service/ivf"
    },
    { 
        icon: <img className="icon-departments" alt="Radiology and Laboratory"  src="https://res.cloudinary.com/alphabetagamma/image/upload/v1608584685/Icons/Icon-lab_jvvxkb.png"></img>,
        title: 'Radiology and Laboratory',
        description: 'Advanced medical imaging for diagnosis and well equipped laboratory for in facility testing',
        path:"/service/radiology"
    }
]


class ServiceListOut extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.path}>
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
export default ServiceListOut;
