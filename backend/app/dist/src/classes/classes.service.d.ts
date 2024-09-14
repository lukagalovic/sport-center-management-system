import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { Repository, EntityManager } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
export declare class ClassesService {
    private readonly classRepository;
    private readonly userRepository;
    private readonly entityManager;
    constructor(classRepository: Repository<Class>, userRepository: Repository<User>, entityManager: EntityManager);
    create(createClassDto: CreateClassDto): Promise<Class & User>;
    findAll(filter?: {
        sports?: string[];
    }): Promise<Class[]>;
    findOne(id: number): Promise<Class>;
    update(id: number, updateClassDto: UpdateClassDto): Promise<Class & User>;
    patch(id: number, updateClassDto: UpdateClassDto): Promise<Class & User>;
    remove(id: number): Promise<void>;
    applyForClass(classId: number, userId: number): Promise<Class>;
}
