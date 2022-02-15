---
title: Syllabus
---
# Course Content

| Date | Lectures and Homeworks | Related Links |
|---|---|---|
| 01/06/2022 | HW-0 Release | Link to [HW 0](http://localhost:3000/robot-intel-class/blog/first-assignment) <br /> Other useful links:<br /> 1. [Learn Git](https://learngitbranching.js.org/?locale=en_US) <br /> 2. [Linux Terminal Game](http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html) <br /> 3. [Learn Shell](https://www.learnshell.org/) <br /> 4. [Linux Journey](https://linuxjourney.com/)|
| 1/24/2022 | ** Class 1: Introduction to the course ** <ul><li>What is a Robot?</li><li>The anatomy of a robot</li><li>Role of intelligence in robotics</li></ul> | 1. [What is a Robot?](https://robots.ieee.org/learn/what-is-a-robot/) <br />2. [Anatomy of a Robot.](http://motion.cs.illinois.edu/RoboticSystems/AnatomyOfARobot.html) <br />3. [Isaac Asimov's Robot Series](https://www.penguinrandomhouse.com/series/RBS/the-robot-series) |
| | <h3> Part 1:  Rigid Body Mechanics </h3>  | |
| 01/26/2022 | ** Class 2:** Introduction to robot geometry; What is a link, joint, and actuator?; How do we mathematically model a robot? |1. Chapter 1 of [MLS textbook](http://www.cse.lehigh.edu/~trink/Courses/RoboticsII/reading/murray-li-sastry-94-complete.pdf) |
| 01/31/2022 | **Class 3:** A robot as a transformation mechanism; Introduction to rotations, translations, and homogenous transforms. | 1. Chapter 2 of [MLS textbook](http://www.cse.lehigh.edu/~trink/Courses/RoboticsII/reading/murray-li-sastry-94-complete.pdf)<br /> 2. A nice blog post on [Mecharithm.](https://www.mecharithm.com/homogenous-transformation-matrices-configurations-in-robotics/) |
| 02/02/2022 | ** Class 4: ** From positions to velocities; Taking derivatives of robot transforms.  | 1. Chapter 2 of [MLS textbook](http://www.cse.lehigh.edu/~trink/Courses/RoboticsII/reading/murray-li-sastry-94-complete.pdf)|
| 02/07/2022 | ** Class 5: ** Computing forward kinematics; Examples of forward kinematics on manipulators and mobile robots. | 1. Chapter 3 of [MLS textbook](http://www.cse.lehigh.edu/~trink/Courses/RoboticsII/reading/murray-li-sastry-94-complete.pdf)<br /> 2. [Forward kinematics of a variety of robots.](https://www.sciencedirect.com/topics/engineering/forward-kinematics)<br/> 3. [CH3 of Forward Kinematics](https://users.cs.duke.edu/~brd/Teaching/Bio/asmb/current/Papers/chap3-forward-kinematics.pdf)| 
| 02/09/2022 |** Class 6: ** Introduction to optimization.  | 1. [A quick intro to SGD and its variants](https://ruder.io/optimizing-gradient-descent/) |
| 02/14/2022 | **Class 7:** Computing inverse kinematics.  | 1. Chapter 3 of [MLS textbook](http://www.cse.lehigh.edu/~trink/Courses/RoboticsII/reading/murray-li-sastry-94-complete.pdf) 2. Section II of [Robotic Systems](https://motion.cs.illinois.edu/RoboticSystems/)|
| 02/16/2022 | **Class 8:**  A soft introduction to robot dynamics; The robot Jacobian.  | 1. Chapter 4 of [MLS textbook](http://www.cse.lehigh.edu/~trink/Courses/RoboticsII/reading/murray-li-sastry-94-complete.pdf) 2. Section IV of [Robotic Systems](https://motion.cs.illinois.edu/RoboticSystems/)|
| 02/16/2022 |HW2 released. HW1 due. ||
| | <h3> Part 2: Robot Control</h3> | |
| 02/23/2022 | **Class 9:** What is control? Building simple robotic controllers (P, PD, PID).  |1. Video on [Micro Mouse](https://youtu.be/A4hzCcFikm0) | 
| 02/28/2022 | **Class 10:** Diving a little deeper in control. Introduction to LQR.  |1. Formulation of [LQR](https://www.cds.caltech.edu/~murray/courses/cds110/wi06/lqr.pdf)|
|03/02/2022|  **Class 11:** Extending LQR to non-linear dynamics. iLQR and DDP. | 1. A nice [blog post](https://jonathan-hui.medium.com/rl-lqr-ilqr-linear-quadratic-regulator-a5de5104c750).|
| 03/02/2022 |HW3 released. (HW2 due.) ||
| | <h3> Part 3: Sensing and Fusion</h3> | |
|03/07/2022 | **Class 12:** Making sense in a noisy world; Introduction to Bayes Rule. | 1. [Bayes rule wiki](https://en.wikipedia.org/wiki/Bayes%27_theorem)|
| 03/09/2022 |**Class 13:**  Introduction to filtering: Kalman Filters, Extended Kalman Filters. | 1. [KF tutorial](https://www.kalmanfilter.net/default.aspx)| 
| 03/11/2022 |HW3 due. ||
| 03/21/2022|**Class 14:** Where is my robot? Introduction to localization and mapping.|1. [Simultaneous Localization and Mapping.](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/Durrant-Whyte_Bailey_SLAM-tutorial-I.pdf) |
| 03/21/2022 |HW4 released. ||
| 03/23/2022 | **Class 15:** Buffer class to account for potential overflow.  | |
| |  <h3> Part 4: Planning</h3> | |
| 03/28/2022 | **Class 16:** Introduction to planning and configuration spaces. | 1. Section III of [Robotic Systems](https://motion.cs.illinois.edu/RoboticSystems/)|
| 03/30/2022 | **Class 17:** Building a heuristic planner: A* |1. Section III of [Robotic Systems](https://motion.cs.illinois.edu/RoboticSystems/) |
| 04/04/2022 | ** Class 18: ** Planning in high dimensions using sampling based planners (RRT) | 1. Section III of [Robotic Systems](https://motion.cs.illinois.edu/RoboticSystems/)|
| 04/04/2022  | HW4 due. ||
| | <h3>Part 5: Trajectory Optimization</h3> | |
| 04/06/2022 | ** Class 19: ** Making the plans executable; Practical considerations.| 1. Section III of [Robotic Systems](https://motion.cs.illinois.edu/RoboticSystems/)|
| 04/11/2022 | ** Class 20: ** Viewing the entire trajectory generation process as an optimization procedure. | 1. Section III of [Robotic Systems](https://motion.cs.illinois.edu/RoboticSystems/)|
| | <h3>Part 6: Advanced Topics</h3> | |
| 04/13/2022 |  ** Class 21: ** Model Predictive Control.| 1. Section III of [Robotic Systems](https://motion.cs.illinois.edu/RoboticSystems/)|
| 04/18/2022 |  ** Class 22: ** Imitation Learning| |
| 04/20/2022 | ** Class 23: ** Reinforcement Learning with Policy Gradients.| |
| 04/25/2022 | ** Class 24: ** Simulation to Real learning.| |
| 04/27/2022 | ** Class 25: ** Computer Vision for Robotics.| |
| 05/02/2022 | Guest Lecture 1: TBA| |
| 05/04/2022 | Guest Lecture 2: TBA| |
| 05/09/2022 | Final Project Presentations.| |



## Related Courses
1. [MIT OCW Introduction to Robotics](https://ocw.mit.edu/courses/mechanical-engineering/2-12-introduction-to-robotics-fall-2005/lecture-notes/)

2. [UW Mobile Robots](https://courses.cs.washington.edu/courses/cse490r/19sp/)

3. [MLS textbook](http://www.cse.lehigh.edu/~trink/Courses/RoboticsII/reading/murray-li-sastry-94-complete.pdf)

4. [Kris Hauser's Robotic Systems draft](https://motion.cs.illinois.edu/RoboticSystems/)

