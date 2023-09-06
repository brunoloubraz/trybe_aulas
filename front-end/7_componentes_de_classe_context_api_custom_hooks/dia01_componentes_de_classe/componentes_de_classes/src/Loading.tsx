import React from "react";

class Loading extends React.Component {
  componentWillUnmount(): void {
      console.log('Componente Loading desmontado');
  }

  render() {
    return <div>Loading...</div>
  }
}

export default Loading;