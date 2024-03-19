import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/entities/user.entity';
import { RegistrationService } from './registration.service';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    registerUser(registerUserDto: RegisterUserDto): Promise<User>;
}
