import { Class } from 'src/classes/entities/class.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
export declare class Sport extends AbstractEntity<Sport> {
    name: string;
    description: string | null;
    isAvailable: boolean;
    classes: Class[];
}
