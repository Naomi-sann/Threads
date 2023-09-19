import { forwardRef } from "react";

const AlertBox = forwardRef(
  (props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref}>alertbox</div>;
  }
);

export default AlertBox;
