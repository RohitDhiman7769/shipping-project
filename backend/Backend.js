const express = require('express');
const cors = require('cors');
const app = express();

// const authMiddleware = require('./authMiddleware')
const signupRoutes = require('./Signup');
const loginRoutes = require('./login');
const profileRoutes = require('./Profile');
const settingProfileUpdateRouter = require('./Settingnavbarfiles/setting-Editprofile');
const PostaddRouter = require('./Postadd');
const homePageRouter = require('./Home');
const AccountcheckRouter = require('./Accountcheck')
const FollowingRouter = require('./Following')
const DeleteRouter = require('./DeleteAccount')
const passwordRouter = require('./Settingnavbarfiles/password')
const UnfollowRouter = require('./Unfollow')
const fetchFollowingrouter = require('./FetchFollowing')
const sharepostRouter = require('./Sharepost')
const wallRouter = require('./Wall')
const addcartRouter = require('./Addcart')
const cartRouter = require('./Cart')
const postcommentRouter =  require('./PostComment')
const fetchcommentRouter = require('./fetchcomment')
const otherdetaileRouter = require('./OtherDetails')
const fetchaddressRouter = require('./Fetchaddress')
const buyingRouter = require('./Productbuying')
const setlikeRouter = require('./setpostlike')
const removelikeRouter  = require('./removepostlike')

app.use(cors());
app.use(express.json())

app.use(signupRoutes);
app.use(loginRoutes);

// app.use(authMiddleware)

app.use(profileRoutes);
app.use(settingProfileUpdateRouter);
app.use(PostaddRouter);
app.use(homePageRouter);
app.use(AccountcheckRouter)
app.use(FollowingRouter)
app.use(DeleteRouter)
app.use(passwordRouter)
app.use(UnfollowRouter)
app.use(fetchFollowingrouter)
app.use(sharepostRouter)
app.use(wallRouter)
app.use(addcartRouter)
app.use(cartRouter)
app.use(postcommentRouter)
app.use(fetchcommentRouter)
app.use(otherdetaileRouter)
app.use(fetchaddressRouter)
app.use(buyingRouter)
app.use(setlikeRouter)
app.use(removelikeRouter)

app.listen(3001, () => {
    console.log('Server running on port 3001');
  });