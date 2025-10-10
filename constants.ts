
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'pid-controller-design',
    title: 'Advanced PID Controller Design',
    shortDescription: 'Designing and simulating a robust PID controller for a non-linear inverted pendulum system.',
    longDescription: 'This project involved the complete lifecycle of control system design for an inverted pendulum on a cart, a classic problem in dynamics and control theory. The objective was to stabilize the pendulum in its upright position. We started with mathematical modeling using Lagrangian mechanics, followed by linearization around the equilibrium point. A PID controller was then designed and tuned using the Ziegler–Nichols method and further refined with pole placement techniques to achieve optimal performance in terms of rise time, overshoot, and settling time. The system was simulated in MATLAB/Simulink to validate the controller\'s effectiveness under various disturbances.',
    tags: ['MATLAB', 'Simulink', 'Control Theory', 'PID'],
    images: [
      'https://picsum.photos/seed/pid1/800/600',
      'https://picsum.photos/seed/pid2/800/600',
      'https://picsum.photos/seed/pid3/800/600',
    ],
    latexCode: [
      {
        title: 'Equation of Motion (Cart)',
        code: `(M+m) \\ddot{x} + m l \\ddot{\\theta} \\cos{\\theta} - m l \\dot{\\theta}^2 \\sin{\\theta} = F`
      },
      {
        title: 'Equation of Motion (Pendulum)',
        code: `m l^2 \\ddot{\\theta} + m g l \\sin{\\theta} + m l \\ddot{x} \\cos{\\theta} = 0`
      },
      {
        title: 'PID Control Law',
        code: `u(t) = K_p e(t) + K_i \\int_{0}^{t} e(\\tau) d\\tau + K_d \\frac{de(t)}{dt}`
      }
    ]
  },
  {
    id: 'kalman-filter-robotics',
    title: 'Kalman Filter for Robot Localization',
    shortDescription: 'Implementing an Extended Kalman Filter (EKF) for real-time localization of a mobile robot.',
    longDescription: 'This project focused on sensor fusion for accurate mobile robot localization. We used an Extended Kalman Filter (EKF) to fuse data from wheel odometry (prediction step) and a 2D LiDAR sensor (update step). The EKF effectively handles the non-linearities in the robot\'s motion model. The implementation was done in Python using ROS (Robot Operating System). The filter significantly reduced the uncertainty in the robot\'s position estimate compared to using odometry alone, demonstrating its power in noisy environments.',
    tags: ['Python', 'ROS', 'Kalman Filter', 'Robotics'],
    images: [
      'https://picsum.photos/seed/kf1/800/600',
      'https://picsum.photos/seed/kf2/800/600',
    ],
    latexCode: [
      {
        title: 'State Prediction',
        code: `\\hat{x}_{k|k-1} = f(x_{k-1|k-1}, u_k)`
      },
      {
        title: 'Covariance Prediction',
        code: `P_{k|k-1} = F_k P_{k-1|k-1} F_k^T + Q_k`
      }
    ]
  },
  {
    id: 'mpc-for-hvac',
    title: 'Model Predictive Control for HVAC',
    shortDescription: 'Developing an MPC strategy to optimize energy consumption in a commercial HVAC system.',
    longDescription: 'Model Predictive Control (MPC) was applied to a simulated commercial HVAC system to minimize energy usage while maintaining thermal comfort for occupants. A thermal model of the building was developed, and weather forecast data was used as a disturbance preview. The MPC controller computes an optimal sequence of control actions over a future horizon at each time step, leading to significant energy savings compared to traditional reactive controllers.',
    tags: ['MPC', 'Optimization', 'HVAC', 'Energy'],
    images: [
      'https://picsum.photos/seed/mpc1/800/600',
      'https://picsum.photos/seed/mpc2/800/600',
      'https://picsum.photos/seed/mpc3/800/600',
      'https://picsum.photos/seed/mpc4/800/600',
    ],
    latexCode: [
      {
        title: 'MPC Objective Function',
        code: `J = \\sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N`
      }
    ]
  }
];
