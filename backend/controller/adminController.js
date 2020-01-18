function admin(req, res) {
  const { username, password } = req.body;
  if (username === "a" && password === "a") {
    const newUser = {
      username: username
    };
    console.log(newUser);
    req.session.user = newUser;
    res.redirect("/select");
  }
}

module.exports = {
  admin: admin
};
