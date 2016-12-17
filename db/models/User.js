import Sequelize from 'sequelize';
import { Conn } from './../conn';

export const User = Conn.define('user', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Oauth를 이용한 가입자
  isSocialLogin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  socialProvider: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
});
