import React from "react";

type DooDooErrorBoundaryProps = {};

type DooDooErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
};

export class DooDooErrorBoundary extends React.Component<
  DooDooErrorBoundaryProps,
  DooDooErrorBoundaryState
> {
  constructor(props: DooDooErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.state = { hasError: true, error: error, errorInfo: errorInfo };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex-1 flex justify-center items-center text-white font-bold">
          Error: {this.state.error?.message}
        </div>
      );
    }

    return this.props.children;
  }
}
