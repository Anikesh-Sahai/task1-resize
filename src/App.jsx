import { useState } from "react";
import { ResizableComponent } from "./components/ResizableComponent";

export default function App() {
  const parentWidth = 1000;
  const margin = 20;
  const [first, setFirst] = useState({
    topVal: 0,
    leftVal: 0,
    heightVal: 200,
    widthVal: 400 - margin / 2,
  });
  const [second, setSecond] = useState({
    topVal: 0,
    leftVal: 0 + margin + first.widthVal,
    heightVal: 200,
    widthVal: parentWidth - margin - first.widthVal,
  });
  const [third, setThird] = useState({
    topVal: 0 + margin + first.heightVal,
    leftVal: 0,
    heightVal: 200,
    widthVal: parentWidth,
  });

  const handleUpdateFirst = ({ topVal, leftVal, heightVal, widthVal }) => {
    setFirst({
      topVal,
      leftVal,
      heightVal,
      widthVal,
    });
    setSecond((initial) => ({
      topVal: initial.topVal,
      leftVal: leftVal + margin + widthVal,
      heightVal: initial.heightVal,
      widthVal: parentWidth - leftVal - widthVal - margin,
    }));
    setThird((initial) => ({
      topVal:
        margin + Math.max(topVal + heightVal, second.topVal + second.heightVal),
      leftVal: initial.leftVal,
      heightVal: initial.heightVal,
      widthVal: initial.widthVal,
    }));
  };

  const handleUpdateSecond = ({ topVal, leftVal, heightVal, widthVal }) => {
    setSecond({
      topVal,
      leftVal,
      heightVal,
      widthVal,
    });
    setFirst((initial) => ({
      topVal: initial.topVal,
      leftVal: initial.leftVal,
      heightVal: initial.heightVal,
      widthVal: leftVal - margin - initial.leftVal,
    }));
    setThird((initial) => ({
      topVal:
        margin + Math.max(topVal + heightVal, first.topVal + first.heightVal),
      leftVal: initial.leftVal,
      heightVal: initial.heightVal,
      widthVal: initial.widthVal,
    }));
  };

  const handleUpdateThird = ({ topVal, leftVal, heightVal, widthVal }) => {
    setThird({
      topVal,
      leftVal,
      heightVal,
      widthVal,
    });
    setFirst((initial) => ({
      topVal: initial.topVal,
      leftVal: initial.leftVal,
      heightVal: Math.min(initial.heightVal, topVal - margin),
      widthVal: initial.widthVal,
    }));
    setSecond((initial) => ({
      topVal: initial.topVal,
      leftVal: initial.leftVal,
      heightVal: Math.min(initial.heightVal, topVal - margin),
      widthVal: initial.widthVal,
    }));
  };

  return (
    <div>
      <ResizableComponent dim={first} setDim={handleUpdateFirst} />
      <ResizableComponent dim={second} setDim={handleUpdateSecond} />
      <ResizableComponent dim={third} setDim={handleUpdateThird} />
    </div>
  );
}
