import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

enum Gender {
  FEMALE = 0,
  MALE = 1,
  NonBinary = 2,
  Trans = 3,
}

const myName = "Ashkan"
let myEmail = "ashcan@3dln.com"

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
  id: number

  @Column()
  name: string

  @Column
  email: string

  @Column()
  gender: Gender

  constructor(name: string, email: string, gender: Gender = Gender.FEMALE) {
    super()
    this.name = name
    this.gender = gender
  }
}


let designer = new Designer(myName, myEmail, Gender.MALE)