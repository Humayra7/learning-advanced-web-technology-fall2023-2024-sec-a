import { UserService } from 'src/user/user.service';
import { User } from '../entities/user.entity';
import { RegisterUserDto } from 'src/registration/dto/register-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: RegisterUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
}
