import "reflect-metadata"
import { container } from "tsyringe";
import { IUserRepository } from "../../modules/user/repository/interface/IUserRepository";
import { UserRepository } from "../../modules/user/repository/userRepository";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)
