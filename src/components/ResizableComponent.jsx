/* eslint-disable react/prop-types */
import { ResizableBox } from "@dantecoder/react-resizablebox";

export function ResizableComponent({ dim, setDim }) {
  const { topVal = 100, leftVal = 100, heightVal = 100, widthVal = 100 } = dim;

  const onResizeHandler = (e) => {
    setDim({
      topVal: e.style.top,
      leftVal: e.style.left,
      heightVal: e.style.height,
      widthVal: e.style.width,
    });
  };

  return (
    <div>
      <ResizableBox
        width={widthVal}
        height={heightVal}
        left={leftVal}
        top={topVal}
        onResize={onResizeHandler}
      />
    </div>
  );
}
