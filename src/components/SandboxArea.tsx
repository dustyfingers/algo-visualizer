import React from 'react';
import { Stage, Layer, Text, Rect } from 'react-konva';

function generateShapes() {
    return [...Array(10)].map((_, i) => ({
        id: i.toString(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        isDragging: false,
    }));
}

const INITIAL_STATE = generateShapes();

const SandboxArea = () => {
    const [rects, setRects] = React.useState(INITIAL_STATE);

    return (
        <Stage config={{container: '.sandbox-container'}}
        width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Text text="ALGO VISUALIZATION HERE" />
                {rects.map((rect) => {
                    console.log(rect);
                    return (
                        <Rect
                            key={rect.id}
                            id={rect.id}
                            x={rect.x}
                            y={rect.y}
                            fill="#89b717"
                            opacity={0.8}
                            draggable
                            rotation={rect.rotation}
                            shadowColor="black"
                            shadowBlur={10}
                            shadowOpacity={0.6}
                            shadowOffsetX={rect.isDragging ? 10 : 5}
                            shadowOffsetY={rect.isDragging ? 10 : 5}
                            scaleX={rect.isDragging ? 1.2 : 1}
                            scaleY={rect.isDragging ? 1.2 : 1}
                        />
                    )}
                )}
            </Layer>
        </Stage>
    );
}

export default SandboxArea;