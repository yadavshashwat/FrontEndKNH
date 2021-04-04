import React, { Component } from "react";

let TeamContent = [
    {
        title: 'Dr Sneh Yadav',
        designation: 'Senior Gynaecologist',
        // details:'MBBS & MS (Gynaecology & obstetrics) from SMS Medical college, Jaipur',
        img_src:"https://res.cloudinary.com/alphabetagamma/image/upload/v1609014402/Doctors/sneh_s1gpw6.jpg"
    },
    {
        title: 'Dr Udai Bhan Yadav',
        designation: 'Director and Senior Anaesthetist',
        // details:'',
        img_src:"https://res.cloudinary.com/alphabetagamma/image/upload/v1609014402/Doctors/udaibhan_kcj778.jpg"
    },
    {
        title: 'Dr Radhika Kundnani',
        designation: 'Gynaecologist',
        // details:'',
        img_src:"https://res.cloudinary.com/alphabetagamma/image/upload/v1609014402/Doctors/radhika_thdnc6.jpg"
    },
    {
        title: 'Dr Monika Soni',
        designation: 'Gynaecologist',
        // details:'',
        img_src:"https://res.cloudinary.com/alphabetagamma/image/upload/v1609014402/Doctors/monica_ovo0hi.jpg"
    },
    {
        title: 'Dr Garima Goyal',
        designation: 'Gynaecologist',
        // details:'',
        img_src:"https://res.cloudinary.com/alphabetagamma/image/upload/v1609014403/Doctors/garima_t3fwno.jpg"
    },
    {
        title: 'Dr Shailabh Gupta',
        designation: 'Pediatrician - Neonatology',
        // details:'',
        img_src:"https://res.cloudinary.com/alphabetagamma/image/upload/v1617535101/Doctors/shailabh_hlegbz.jpg"
    },
    {
        title: 'Dr Satveer Singh',
        designation: 'Radiologist',
        // details:'',
        img_src:"https://res.cloudinary.com/alphabetagamma/image/upload/v1609014402/Doctors/satveer_jq9ptj.jpg"
    },
    {
        title: 'Dr Rishabh Khandelwal',
        designation: 'Anaesthetist',
        // details:'',
        img_src:"https://res.cloudinary.com/alphabetagamma/image/upload/v1617535258/Doctors/rishabh_ggyuqn.jpg"
    }
];


class Team extends Component{
    render(){
        const {column} = this.props;
        return(
            <React.Fragment>
                {TeamContent.map((value , i ) => (
                    <div className={`${column}`} key={i}>
                        <div className="team">
                            <div className="thumbnail">
                                <img src={value.img_src} alt={value.title}/>
                            </div>
                            <div className="content">
                                <h4 className="title">{value.title}</h4>
                                <p className="designation">{value.designation}</p>
                                {/* <p className="designation">{value.details}</p> */}

                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}
export default Team;