import React, { useState } from 'react';

function DotPuzzel() {
    const gridSize = 5;
    const [points, setPoints] = useState([{ row: 0, col: 0 }]);
    const [visited, setVisited] = useState(new Set(["0,0"]));
    const [isLocked, setIsLocked] = useState(false);
    const [lockPoint, setLockPoint] = useState(null);

    const handleMouseMove = (row, col) => {
        if (!isLocked) {
            const lastPoint = points[points.length - 1];

            // Movement allowed only to the right, left, or up from the initial point (0,0)
            if (
                (lastPoint.row === row && Math.abs(lastPoint.col - col) === 1) || // Move left/right
                (lastPoint.col === col && Math.abs(lastPoint.row - row) === 1) || // Move up/down
                (lastPoint.row === row && col === 0) || // Move to the left from the initial point
                (lastPoint.col === col && row === 0) // Move to the top from the initial point
            ) {
                if (!visited.has(`${row},${col}`)) {
                    setPoints([...points, { row, col }]);
                    setVisited(new Set([...visited, `${row},${col}`]));

                    // Lock if the endpoint (top-left second dot) is reached
                    if (row === 0 && col === 1) {
                        setIsLocked(true);
                    }
                } else {
                    // Lock drawing if a previously visited dot is touched
                    setIsLocked(true);
                    setLockPoint({ row, col });
                }
            }
        }
    };

    const calculatePath = () => {
        return points
            .map((point) => {
                const x = point.col * 50 + 25; // Center of each dot
                const y = point.row * 50 + 25; // Center of each dot
                return `${x},${y}`;
            })
            .join(' ');
    };

    const handleReset = () => {
        setPoints([{ row: 0, col: 0 }]);
        setVisited(new Set(["0,0"]));
        setIsLocked(false);
        setLockPoint(null);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="position-relative">
                <svg
                    className="position-absolute w-100 h-100"
                    width="250"
                    height="250"
                    style={{ zIndex: -1 }}
                >
                    <polyline
                        points={calculatePath()}
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
                <div className="d-grid gap-3" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
                    {Array.from({ length: gridSize }).map((_, row) => (
                        <React.Fragment key={row}>
                            {Array.from({ length: gridSize }).map((_, col) => (
                                <div
                                    key={`${row}-${col}`}
                                    onMouseEnter={() => handleMouseMove(row, col)}
                                    className={`w-3 h-3 rounded-circle cursor-pointer ${points.some(
                                        (point) =>
                                            point.row === row && point.col === col
                                    )
                                        ? lockPoint && lockPoint.row === row && lockPoint.col === col
                                            ? 'bg-pink'
                                            : 'bg-danger'
                                        : 'bg-primary'
                                        } ${visited.has(`${row},${col}`)
                                            ? 'disabled opacity-50'
                                            : ''
                                        }`}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: points.some(point => point.row === row && point.col === col) 
                                            ? (lockPoint && lockPoint.row === row && lockPoint.col === col 
                                                ? '#ff69b4' 
                                                : '#dc3545') 
                                            : '#007bff',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        opacity: visited.has(`${row},${col}`) ? 0.5 : 1,
                                    }}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <button
                onClick={handleReset}
                className="mt-3 px-4 py-2 btn btn-success"
            >
                Reset
            </button>
        </div>
    );
}

export default DotPuzzel;
