import React from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring for animation
import './Count.css'; // Import custom CSS styles

const Count = () => {
  // Using react-spring to animate the counters
  const prevStudentCount = useSpring({ to: { number: 1000 }, from: { number: 0 }, config: { duration: 3000 } });
  const newStudentCount = useSpring({ to: { number: 100 }, from: { number: 0 }, config: { duration: 3000 } });
  const currentBatchCount = useSpring({ to: { number: 8 }, from: { number: 0 }, config: { duration: 3000 } });
  const prevBatchCount = useSpring({ to: { number: 40 }, from: { number: 0 }, config: { duration: 3000 } });

  return (
    <div className="container py-5">
      <div className="row text-center">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="count-box">
            <animated.h2 className="count-number">
              {prevStudentCount.number.interpolate(n => n.toFixed(0))}
            </animated.h2>
            <p className="count-label">Previous Students</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="count-box">
            <animated.h2 className="count-number">
              {newStudentCount.number.interpolate(n => n.toFixed(0))}
            </animated.h2>
            <p className="count-label">New Students</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="count-box">
            <animated.h2 className="count-number">
              {currentBatchCount.number.interpolate(n => n.toFixed(0))}
            </animated.h2>
            <p className="count-label">Current Batches</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="count-box">
            <animated.h2 className="count-number">
              {prevBatchCount.number.interpolate(n => n.toFixed(0))}
            </animated.h2>
            <p className="count-label">Previous Batches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
