
export async function AuthMiddleware(req, res, next) {
  let cookiesStore = await req.cookies;
  const token = cookiesStore.get('token');


  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });

}