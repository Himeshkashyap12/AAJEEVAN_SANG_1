import { Input } from "antd";
import "./common.css"
const OtpInput = ({length,onChange}) => {
  const sharedProps = {
    onChange,
  };
  return (
    <>
      <div className="otp-input pt-1">
        <Input.OTP  length={length??4} formatter={(str) => str.toUpperCase()} {...sharedProps} />
      </div>
    </>
  );
};
export default OtpInput;
