import mongoose, { Schema } from 'mongoose';
import { ROLES, LEVELS, GENDERS } from 'utils/constants';

import * as regexp from 'utils/regexp';

// Define schema user
const userSchema = new Schema(
  {
    role: { type: String, default: ROLES.USER },
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true, select: false },
    email: { type: String },
    phone: { type: String },
    gender: { type: String },
    address: { type: String },
    avatar: { type: String },
    facebookID: { type: String, default: null },
    active: { type: Boolean, default: true },
    level: { type: String, default: LEVELS.silver.name },
    point: { type: Number, default: 0 },



    name: { type: String, required: true }
  }
);

// Hash password before save
// userSchema.pre('save', function(next) {
//   const user = this;
//   user.phone = user.phone ? user.phone.replace(/ /g, '') : '';
//   if (user.isNew || user.isModified('password')) {
//     // Create member code
//     if (user.isNew) {
//       user.memberCode = makeMemberCode();
//     }

//     bcrypt.genSalt((err, salt) => {
//       if (err) return next(err);

//       bcrypt.hash(user.password, salt, (err, hashedPassword) => {
//         if (err) return next(err);

//         user.password = hashedPassword;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });


export default mongoose.model('user', userSchema);
