const { AuthenticationError } = require("apollo-server-express");
const { User, Weight, Supplement, calorie, Exercise } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in!");
    },
    dailyCalorieIntake: async (_, { userId }, context) => {
      if (context.user) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const calories = await calorie.find({ userId, date: { $gte: today } });
        return calories;
      }
      throw new AuthenticationError("Not logged in!");
    },
    allExercises: async () => {
      return await Exercise.find();
    },
    getExerciseById: async (_, { id }) => {
      const exercise = await Exercise.findById(id);
      if (!exercise) {
        throw new Error("Exercise not found");
      }
      return exercise;
    },
    allSupplements: async () => {
      return await Supplement.find();
    },
    getSupplementById: async (_, { id }) => {
      const supplement = await Supplement.findById(id);
      if (!supplement) {
        throw new Error("Supplement not found");
      }
      return supplement;
    },
    dailyWeightEntries: async (_, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return await Weight.find({
        userId: context.user._id,
        date: { $gte: today },
      });
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await bcrypt.compare(password, user.password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser:  async (_, { input }) => {
      const existingUser = await User.findOne({ email: input.email });
      if (existingUser) {
        throw new Error("User already exists");
      }
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const user = await User.create({
        ...input,
        password: hashedPassword
      });
      await user.save();
    
      const token = signToken(user);
      return { token, user };
    },
    
    updateUser: async (_, { id, input }) => {
      const hashedPassword = await bcrypt.hash(input.password, 10);
      await User.findByIdAndUpdate(id, { ...input, password: hashedPassword });
      return User.findById(id);
    },

    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      return deletedUser;
    },

    addCalorieIntake: async (parent, { intake }, context) => {
      if (context.user) {
        const newCalorie = new calorie({
          userId: context.user._id,
          intake,
        });
        await newCalorie.save();
        return newCalorie;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addExercise: async (_, { name, caloriesBurned, sets, reps, bodyPart }) => {
      const newExercise = new Exercise({
        name,
        caloriesBurned,
        sets,
        reps,
        bodyPart,
      });
      await newExercise.save();
      return newExercise;
    },
    updateExercise: async (
      _,
      { id, name, caloriesBurned, sets, reps, bodyPart }
    ) => {
      const updatedExercise = await Exercise.findByIdAndUpdate(
        id,
        { name, caloriesBurned, sets, reps, bodyPart },
        { new: true }
      );
      if (!updatedExercise) {
        throw new Error("Exercise not found");
      }
      return updatedExercise;
    },
    deleteExercise: async (_, { id }) => {
      const deletedExercise = await Exercise.findByIdAndDelete(id);
      if (!deletedExercise) {
        throw new Error("Exercise not found");
      }
      return deletedExercise;
    },
    addSupplement: async (_, { name, description, price }) => {
      const newSupplement = new Supplement({
        name,
        description,
        price,
      });
      await newSupplement.save();
      return newSupplement;
    },
    updateSupplement: async (_, { id, name, description, price }) => {
      const updatedSupplement = await Supplement.findByIdAndUpdate(
        id,
        { name, description, price },
        { new: true }
      );
      if (!updatedSupplement) {
        throw new Error("Supplement not found");
      }
      return updatedSupplement;
    },
    deleteSupplement: async (_, { id }) => {
      const deletedSupplement = await Supplement.findByIdAndDelete(id);
      if (!deletedSupplement) {
        throw new Error("Supplement not found");
      }
      return deletedSupplement;
    },
    addWeightEntry: async (_, { weight }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      const newWeight = new Weight({
        userId: context.user._id,
        weight,
      });
      await newWeight.save();
      return newWeight;
    },
  },
};

module.exports = resolvers;
