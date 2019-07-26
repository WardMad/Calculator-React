import React from "react";

class Properties extends React.Component {
  render() {
    let { handleClick, description } = this.props;

    return (
      <div>
        <button type="submit" onClick={handleClick}>
          {description}
        </button>
      </div>
    );
  }
}
export default Properties;
