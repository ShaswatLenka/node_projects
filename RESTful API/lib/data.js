/*
*
*library for storing and editing data
*/

//Dependencies
const fs = require('fs');
const path = require('path');

//container for the module to be exported
var lib={};

//Base directory of the data folder
lib.baseDir = path.join(__dirname, '/../.data/');

//Write data to a file
lib.create = function(dir, file, data, callback){
  //open the file for writing
  fs.open(lib.baseDir+dir+'/'+file+'.json','wx',function(err, fileDescriptor){
    if (!err && fileDescriptor){
      //convert data to string
      var stringData = JSON.stringify(data);
      //write to file and close it
      fs.writeFile(fileDescriptor, stringData, function(err){
        if(!err){
          fs.close(fileDescriptor, function(err){
            if(!err){
              callback(false);
            }else{
              callback('error while closing the file');
            }
          });
        }else{
          callback('error writing to file');
        }
      });
    }else{
      callback('could not open new file, it may already exist');
    }

  });
};

//read data from file
lib.read = function(dir,file,callback){
  fs.readFile(lib.baseDir+dir+'/'+file+'.json', 'utf-8', function(err, data){
    callback(err, data);
  });
};

//update data inside a file
lib.update = function(dir, file, data, callback){
  fs.open(lib.baseDir+dir+'/'+file+'.json','r+', function(err, fileDescriptor){
    if(!err){
      var stringData = JSON.stringify(data);
      fs.truncate(fileDescriptor, function(err){
        if(!err){
          fs.writeFile(fileDescriptor,stringData,function(err){
            if(!err){
              fs.close(fileDescriptor, function(err){
                if(!err){
                  callback('noerror');
                }else{
                  callback('error closing file');
                }
              });
            }else{
              callback('error writing to file');
            }
          });
        }else{
          callback('error truncating file');
        }
      });
    }else{
      callback('the file does not exist');
    }
  });
};

//delete a file
lib.delete = function(dir,file,callback){
  //unlink the file from filesystem
  fs.unlink(lib.baseDir+dir+'/'+file+'.json',function(err){
    if(!err){
      callback('file deleted successfully');
    }else{
      callback('error deleting the file');
    }
  });
};


//export the module
module.exports = lib;
