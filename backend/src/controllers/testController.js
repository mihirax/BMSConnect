exports.protected = async (req, res) => {
    // req.user is set by auth middleware
    res.json({
      message: "Protected content",
      user: req.user
    });
  };
  