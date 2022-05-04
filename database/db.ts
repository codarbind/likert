import {Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('yucyber', 'dev', 'dev2022!', {
    host: 'localhost',
    dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const CreatedExam = sequelize.define('CreatedExam', {

    org_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    exam_id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    },
    qs_id:{
        type: DataTypes.STRING,
        allowNull: false
    },
    respondent_email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    exam_status:{
        type: DataTypes.STRING,
        allowNull: false
    },        
})

const Question_Set_QS = sequelize.define('question_set_qs', {

  qsid:{
      type: DataTypes.STRING,
      allowNull: false
  },
  qid:{
      type: DataTypes.STRING,
      allowNull: false
  },
  row_id:{
    type: DataTypes.STRING,
    allowNull:false
  }        
})


const Questions = sequelize.define('questions', {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true
},
  question:{
      type: DataTypes.STRING,
      allowNull: false
  },
  pillar:{
      type: DataTypes.STRING,
      allowNull: false
  },
  create_date:{
    type: DataTypes.DATE,
    allowNull:false
  },
  modify_date:{
    type: DataTypes.DATE,
    allowNull:false
  },
  tagdata:{
    type: DataTypes.STRING,
    allowNull:false
  }       
})
export default {CreatedExam, Question_Set_QS, Questions}