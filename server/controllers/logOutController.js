
function logOutController(req, res) {
  req.logOut(err => {
    if (err) {
      console.log('logOut', err);
      return res.status(500).json({ success: false, message: 'Logout failed'})
    }

    req.session.destroy(err => {
      if (err) {
        console.log('logOut destroy', err);
        return res.status(500).json({ success: false, message: 'Logout failed when destroy'});
      }

      res.clearCookie('connect.sid');
      return res.status(200).json({ success: true });
    });
  })
}

export default logOutController;
