import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

enum Gender {
  FEMALE = 0,
  MALE = 1,
  NonBinary = 2,
  Trans = 3,
}

interface IHumanBase {
  name: string;
}

interface IHuman extends IHumanBase {
  gender: Gender;
}
abstract class Human {
  private say = (anything: string): void => {
    console.log("Everything is possible here");
    console.log(anything);
  };
}

// Yes we actually can use decorators in typescript
// TODO: Enable experimentalDecorators in tsconfig to remove ts warning
@Entity()
export class Designer extends Human implements IHuman {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: Gender;

  constructor(name: string, gender: Gender) {
    super();
    this.name = name;
    this.gender = gender;
  }
}


