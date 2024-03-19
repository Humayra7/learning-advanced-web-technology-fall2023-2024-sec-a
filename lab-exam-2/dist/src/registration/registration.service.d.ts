import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
export declare class RegistrationService {
    private readonly userRepository;
    constructor(userRepository: UserService);
    registerUser(userData: RegisterUserDto): Promise<User>;
}
