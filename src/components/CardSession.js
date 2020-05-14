import React from "react";

class CardSession extends React.Component {
    state = {listLayer : null}



    componentWillReceiveProps(nextProps, nextContext) {
        let listLayer = nextProps.listLayer.map((layer, index)=> {
            return (
                <div className={"layer" + index} key={index}>
                    <li className="layer-layer" key={index}>
                        <button
                            id={index}
                            onClick={event => {this.props.onClickLayer(parseInt(event.target.id))}}
                            style={index === nextProps.selectedLayer ? {backgroundColor: "#b5cc18"} : null}>{layer}</button>
                    </li>
                </div>
            );
        });
        this.setState({'listLayer': listLayer});
    }

    render() {
        return (
            <div className="card-session ui segment">
                <button className="add-button" onClick={this.props.onClickAddLayer}>Add Layer</button>
                <ul className="layer-wrap">
                    {this.state.listLayer}
                </ul>
            </div>
        );
    }
}

export default CardSession;
