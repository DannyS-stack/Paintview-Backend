require(`dotenv`).config();
const User = require("./models").user;
const Comment = require("./models").comment;
const Review = require("./models").review;
const Brand = require("./models").brand;

const user = async () => {
  const allUsers = await User.findAll();
  console.log("this is all users:", allUsers);
};
user()

const specificuser = async () => {
  const foundspecificuser = await User.findByPk(3);
  console.log("this is a specific user:",foundspecificuser);
};

specificuser()

const allReviews = async () => {
  const foundreviews = await Review.findAll();
  console.log("these are all the reviews", foundreviews);
};

allReviews()

const specificReview = async () => {
  const foundReview = await Review.findAll();
  console.log("this is a specific review",foundReview);
};
specificReview()


const specificUserWithComments = async () => {
  const commentsOfUser = await User.findAll({ include: Comment });
  console.log("these are all the comments of a specific user",commentsOfUser);
};

specificUserWithComments()

const specificUserWithReviews = async () => {
  const foundUserwithReviews = await User.findAll({ include: Review });
  console.log("these are all the reviews of a specific user",foundUserwithReviews);
};

specificUserWithReviews();