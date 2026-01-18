const Endpoints = {
  LOGIN: "auth/login",
  LOGOUT: "auth/logout",
  REGISTER: "auth/signup",
  FORGOT: "auths/forgotPassword",
  OTP: "auths/verifyOTP",
  RESEND: "/auths/resendOtp",
  RESET: "auths/resetPassword",
  CHANGE_PASSWORD: "auths/updatePassword",
  UPLOAD_IMAGES: "images/upload",
  SOCIAL_AUTH: "auth/signup",
  USER: "user",
  GET_ALL_USER: "user/getAll",
  // for blogs
  GET_BLOG: "blog/all",
  BLOG: "blog",
  BOOKMARK_BLOG: "blog/bookmark",
  GET_BOOKMARK_BLOG: "blog/bookmarked/blogs",
  SIMILAR_BLOG: "blog/similar",
  // for Category
  GET_CATEGORY: "category",
  CONTACT: "inquiry",
  // comment
  COMMENT: "comment",
  COMMENT_REPLY: "comment/reply"
};
export default Endpoints;
