import React, { Component } from 'react';

class AsyncComponentLoader extends Component {
  constructor() {
    super();

    this.state = {
      Component: null,
    };
  }

  componentWillMount() {
    this.loadComponent(this.props.componentLoader);
  }

  componentWillReceiveProps(nextProps) {
    const { componentLoader } = nextProps;

    if (this.props.componentLoader !== componentLoader) {
      this.loadComponent(componentLoader);
    }
  }

  render() {
    const { Component } = this.state;

    if (!Component) {
      return null;
    }

    return <Component {...this.props} />;
  }

  loadComponent(componentLoader) {
    if (!componentLoader) {
      return;
    }

    componentLoader()
      .then(Component => this.setState({ Component }))
  }
}

export default AsyncComponentLoader;
