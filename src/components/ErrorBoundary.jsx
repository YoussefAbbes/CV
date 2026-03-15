import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: this.props.minHeight || '200px',
            color: '#a0a0b0',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.95rem',
          }}
        >
          {this.props.fallback || 'Unable to load 3D scene.'}
        </div>
      );
    }
    return this.props.children;
  }
}
