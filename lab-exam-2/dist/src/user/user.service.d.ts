import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { RegisterUserDto } from 'src/registration/dto/register-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: RegisterUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
}
