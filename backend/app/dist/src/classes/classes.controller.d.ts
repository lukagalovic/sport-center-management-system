import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { IGetUserAuthInfoRequest } from 'src/shared/IGetUserAuthInfoRequest';
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    create(createClassDto: CreateClassDto): Promise<import("./entities/class.entity").Class & import("../users/entities/user.entity").User>;
    findAll(sports?: string): Promise<import("./entities/class.entity").Class[]>;
    findOne(id: string): Promise<import("./entities/class.entity").Class>;
    patch(id: string, updateClassDto: UpdateClassDto): Promise<import("./entities/class.entity").Class & import("../users/entities/user.entity").User>;
    update(id: string, updateClassDto: UpdateClassDto): Promise<import("./entities/class.entity").Class & import("../users/entities/user.entity").User>;
    remove(id: string): Promise<void>;
    applyForClass(id: number, req: IGetUserAuthInfoRequest): Promise<import("./entities/class.entity").Class>;
}
