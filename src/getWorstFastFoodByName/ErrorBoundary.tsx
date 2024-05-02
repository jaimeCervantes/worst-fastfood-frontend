import { AxiosError } from "axios";
import { Component, ErrorInfo } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: AxiosError) {
    if (error.response?.status === 401) {
      sessionStorage.removeItem("jwt");
      setTimeout(() => (window.location.href = "/login"), 2000);
    }
    return { hasError: true };
  }

  render() {
    if (this.state.hasError === true) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
