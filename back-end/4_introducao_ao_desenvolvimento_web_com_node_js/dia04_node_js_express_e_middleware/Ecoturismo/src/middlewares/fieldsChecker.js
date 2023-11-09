const fieldsChecker = (req, res, next) => {
  const {email, password, firstName, phone } = req.body;
  if (!email) {
    return res.status(401).json({ message: 'Email is required' });
  }
  
  if (!password) {
    return res.status(401).json({ message: 'Password is required' });
  }
  
  if (!firstName) {
    return res.status(401).json({ message: 'First name is required' });
  }
  
  if (!phone) {
    return res.status(401).json({ message: 'Phone number is required' });
  }
  next();  
}

module.exports = fieldsChecker;