import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode; // Define the children prop
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: Error, info: any) {
    this.setState({ hasError: true, error });
    // You can log the error here or send it to a logging service
    console.error("Global Error Caught:", error);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error UI here
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
