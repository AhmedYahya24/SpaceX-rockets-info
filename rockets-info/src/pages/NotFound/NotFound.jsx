import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button className="btn" type="primary" onClick={backHome}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
