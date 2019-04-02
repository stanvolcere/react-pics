import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props)
        this.imageRef = React.createRef();
        this.state = {spans: 0}
    }

    componentDidMount() {
        // callbacks being sent have to be bound to the 'this' and this is done by 
        // creating setSpans as an arrow function
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // set spans is sent as a callback in order to wait for the 
    // DOM imgs to laod before referencing them
   setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height/10);

        this.setState({spans});
    }

    render() {
        // example of object destructuring
        const {urls, description} = this.props.image;

        return (
            // spans will tell the browser how much space/columns a particular image will need 
            // in order to avaiod overlaps in the images
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} 
                    src={urls.regular} 
                />
            </div>
        )
    }
}

export default ImageCard;