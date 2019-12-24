import React,{Component} from 'react';


class UserInput extends Component{

    changeDateByChild = () => {
        this.props.changeDateByChild(this.refs.id_input.value);
    }



    render(){
        return(
            <div>
            <input ref="id_input" type="date" defaultValue="2025-05-07"/>
            <button onClick={this.changeDateByChild} className="btn btn-primary">Change </button>        

            </div>
        )
    }
}

export default UserInput;