import express from "express";
import { getUsers } from "../controller/users/get-users.js";
import { deleteUser } from "../controller/users/delete-user.js";
import { updateUser } from "../controller/users/update-user.js";
import { createUser } from "../controller/users/create-user.js";
import { loginUser } from "../controller/users/login-user.js";
import { validateUserId } from "../middleware/users/validate-user-id.js";
import { validateRole } from "../middleware/users/validate-role.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.delete("/", validateUserId, deleteUser);
userRouter.put("/", validateUserId, updateUser)
userRouter.post("/", createUser)
userRouter.post("/login",validateRole, loginUser)
