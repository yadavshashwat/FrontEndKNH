import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const TabOne = [
    {
        image: '01',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
        category: 'Web Design',
        title: 'Design is a creative part'
    },
    {
        image: '02',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
        category: 'Mobile App',
        title: 'The service provide for designer'
    },
    {
        image: '03',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
        category: 'Web Design',
        title: 'Mobile App landing Design'
    },
    {
        image: '04',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
        category: 'Mobile App',
        title: 'Logo Design creativity'
    },
    {
        image: '05',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
        category: 'Web Design',
        title: 'T-shirt design is the part of design'
    },
    {
        image: '06',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
]

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    render() {
        const { tab1, isOpen } = this.state;
        return (
            <div>
                <main className="page-wrapper">
                    <div className="rn-portfolio-area bg_color--1 line-separator">
                        <div className="container">
                            <div className="row">
                                {TabOne.map((value , index) => (
                                    <div className="col-lg-3" key={index}>
                                        {isOpen && (
                                            <Lightbox
                                                mainSrc={TabOne[tab1].bigImage}
                                                nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                                prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                this.setState({
                                                    tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                                })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        tab1: (tab1 + 1) % TabOne.length,
                                                    })
                                                }
                                            />
                                        )}
                                        <div className="item-portfolio-static">
                                            <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                                <div className="portfolio-static">
                                                    <div className="thumbnail-inner">
                                                        <div className="thumbnail">
                                                            <a href="#portfolio-details">
                                                                <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default Gallery;