import * as sequelizeTypescript from "sequelize-typescript";
import ContactCustomField from "./ContactCustomField";
import Ticket from "./Ticket";

@sequelizeTypescript.Table
class Contact extends sequelizeTypescript.Model<Contact> {
  @sequelizeTypescript.PrimaryKey
  @sequelizeTypescript.AutoIncrement
  @sequelizeTypescript.Column
  id: number;

  @sequelizeTypescript.Column
  name: string;

  @sequelizeTypescript.AllowNull(false)
  @sequelizeTypescript.Unique
  @sequelizeTypescript.Column
  number: string;

  @sequelizeTypescript.AllowNull(false)
  @sequelizeTypescript.Default("")
  @sequelizeTypescript.Column
  email: string;

  @sequelizeTypescript.Column
  profilePicUrl: string;

  @sequelizeTypescript.Default(false)
  @sequelizeTypescript.Column
  isGroup: boolean;

  @sequelizeTypescript.CreatedAt
  createdAt: Date;

  @sequelizeTypescript.UpdatedAt
  updatedAt: Date;

  @sequelizeTypescript.HasMany(() => Ticket)
  tickets: Ticket[];

  @sequelizeTypescript.HasMany(() => ContactCustomField)
  extraInfo: ContactCustomField[];
}

export default Contact;
