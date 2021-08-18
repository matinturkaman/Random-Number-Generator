import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notify = () => toast.error(`You must enter a number above zero !`);

  notify();

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
