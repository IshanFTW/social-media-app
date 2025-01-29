import * as userService from '../services/userService.js';

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userService.createUser({
      username,
      email,
      passwordHash: password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.json({ message: 'Logged out successfully' });
}; 