const AlertBox = ({
  popupRef,
}: {
  popupRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  return <div ref={popupRef}>alertbox</div>;
};

export default AlertBox;
