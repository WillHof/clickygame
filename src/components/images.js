import React from 'react';
import "./style.css"
function renderImages(dog, idx) {
    return (
        <div key={idx} className="card">
            <div className="img-container">
                <img
                    src={dog.image}
                    id={dog.id}
                />
            </div>
        </div>
    )
}
class imageHandler extends React.Component {
    render() {
        return (
            <div>
                {this.props.doggos.map((dog, idx) => {
                    return (renderImages(dog, idx))
                })
                }
            </div>
        )
    }
};
export default imageHandler