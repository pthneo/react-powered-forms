import React, { Component, ErrorInfo, ReactNode } from "react";
import { cn } from "./utils";

interface ErrorBoundaryProps {
  children: ReactNode;
  className?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("React-Powered Forms Error: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={cn("h-full w-full flex items-center justify-center", this.props.className )}>
          <p className="text-sm text-red-500">An error occurred while loading the form.</p>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;