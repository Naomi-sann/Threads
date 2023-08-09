import { animated } from "@react-spring/web";

function ImagePreview() {
  return (
    <div>
      <animated.img
        src={
          "../assets/images/308226132_123324800493904_7027576226844336253_n.jpg"
        }
        alt="this is a test"
      />
    </div>
  );
}

export default ImagePreview;
