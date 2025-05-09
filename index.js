function createLoginTracker(userInfo) {
  
  let attemptCount = 0
  LoginAttempt = (passwordAttempt) => {
    attemptCount+=1
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts"
    }
    if (passwordAttempt===userInfo.password) {
      return "Login successful"
    }
    return `Attempt ${attemptCount}: Login failed`
  }
  return LoginAttempt
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};