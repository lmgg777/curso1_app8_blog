import React from "react";
import { connect } from "react-redux";
//import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  // componentDidMount(){
  //     this.props.fetchUser(this.props.userId);
  // }

  render() {
    //v2.se retira variable user
    //const user = this.props.users.find(user => user.id === this.props.userId);

    //se destructura el objeto user del mapStateToProps
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <div className="header">{user.name}</div>
      </div>
    );
  }
}

// se utiliza ownProps para acceder a  la propiedad userId
// se cambia el 1er termino users a user
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps
  //{ fetchUser }
)(UserHeader);
