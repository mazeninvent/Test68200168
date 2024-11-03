
# moteus-motor-control

### Introduction to Balancing
Balancing is a critical capability for humanoid robots like pib. In the context of robotic movement and control, balancing involves maintaining the robot's center of gravity within a stable region, allowing it to stand or move without tipping over. This task is achieved through precise control of the motors, which continuously adjust based on real-time data about the robot's position, orientation, and applied forces. The lower body balancing mechanism is essential to pib's ability to perform stable walking and standing.

### Introduction to Moteus MJBots
Moteus controllers by mjbots are advanced motor controllers designed specifically for high-performance robotics applications. They offer features like rapid feedback and precise control of brushless motors, which are crucial in dynamic environments. For pib, the Moteus controllers provide the necessary performance to implement effective balancing control, adjusting quickly in response to the robot's positional shifts.

### Installation
To set up the environment, clone the repository and install the necessary Python dependencies. Follow these steps:

```bash
git clone https://github.com/pib-rocks/moteus-motor-control.git
cd moteus-motor-control/python/balancing
pip install -r requirements.txt
python3 settings.py
```

### Quick Scripts: LQR and PID for 1 DOF Inverted Pendulum Balancing
This repository contains example scripts that implement two types of controllers for balancing a one-degree-of-freedom (1 DOF) inverted pendulum: a Proportional-Derivative (PD) controller and a Linear Quadratic Regulator (LQR). These scripts provide a starting point for testing and observing balancing control in a simulated environment before applying it to pib’s hardware.

### Balancing System Explanation
In robotics, balancing can be viewed as an "inverted pendulum" problem, where a moving body (in this case, pib's lower body) must counteract forces that would cause it to tip over. This involves applying calculated torques to maintain balance. By modeling the balancing system as an inverted pendulum on a cart, the robot's controller can simulate and apply corrective actions in real-time, helping to stabilize the lower body during movement.

### PID Balancing
**PID Control** (PD in our case) is a widely used control approach in which adjustments are made based on proportional and derivative values derived from the system’s error. 
   - **Proportional (P)**: This part of the control reacts to the current error magnitude, creating corrective force proportional to the error. 
   - **Derivative (D)**: This component considers the rate of error change over time, helping to stabilize the system by damping oscillations.

For our balancing problem, we only require PD control to maintain stability. The script for PD balancing adjusts the motor outputs based on both current error and rate of change, stabilizing pib’s lower body effectively.

To run the PD balancing script:
```bash
python3 pd_balancing.py
```

### System Dynamics (Inverted Pendulum on Cart)
The dynamics of the balancing problem can be likened to an inverted pendulum mounted on a moving cart, where corrective forces are applied to the cart to keep the pendulum upright. This system is unstable, meaning that without active control, it would quickly tip over. The robot’s lower body balancing task applies forces to achieve stability in this otherwise unstable configuration, simulating a pendulum’s equilibrium through torque adjustments in the robot's motors.

### State Space Representation
In control theory, a state-space representation provides a mathematical model of a physical system in terms of state variables and linear equations. By converting our balancing problem into state-space form, we can utilize advanced control strategies like the Linear Quadratic Regulator (LQR) to handle balancing effectively. This approach considers the system’s current state and predicts future states to maintain stability.

### LQR Balancing
**LQR (Linear Quadratic Regulator)** is an optimal control method that minimizes a cost function to balance stability and control effort. In the context of balancing, the LQR controller calculates the optimal motor adjustments needed to keep the inverted pendulum upright while minimizing energy use. This results in smooth and efficient balancing. 

To run the LQR balancing script:
```bash
python3 lqr_balancing.py
```

### References
* [Josh Pieper: hoverbot - hoverboard motor balancing robot](https://youtu.be/syxE1NEU7lw?feature=shared&t=449)
