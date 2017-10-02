module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define("Data", {
    id: {
      type: DataTypes.INT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INT,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }, 
    feeling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'none'
    }

    //FIGURE OUT HOW TO SET FOREIGN KEY WITH SEQUELIZE
  }

  });
  return Data;
};


// CREATE TABLE `data` (
//   `id` Int AUTO_INCREMENT NOT NULL,
//   `userId` INT,
//   `date` DATETIME NOT NULL,
//   `feeling` boolean not null default 0,
//    FOREIGN KEY (userid) REFERENCES user(userid),

//   PRIMARY KEY ( `id` ) 

// );