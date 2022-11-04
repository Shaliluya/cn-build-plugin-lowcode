const { debug } = console;

function reWtiteJson(rootDir,reName){
    // 导入
  const fs = require('fs');
  const path = require('path');
  //json文件
  // const reName = process.argv[2];
  const package_dir = path.join(rootDir, 'package.json');
  debug("package_dir",package_dir)
    fs.readFile(package_dir, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    let arr = JSON.parse(data);
    arr.name = reName;
    arr.description = reName;
    let newArr = JSON.stringify(arr);
    // console.log(newArr);
    //3.写入需要的文件当中
    fs.writeFile(package_dir, newArr, 'utf8', (err) => {
      console.log('写入package.json成功', err);
    });
  });

  const buildJson_dir = path.join(rootDir, 'build.json');

  fs.readFile(buildJson_dir, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    let arr = JSON.parse(data);
    arr.library = reName;
    let newArr = JSON.stringify(arr); //将数组转成json格式
    // console.log(newArr);
    //3.写入需要的文件当中
    fs.writeFile(buildJson_dir, newArr, 'utf8', (err) => {
      console.log('写入build.json成功', err);
    });
  });
}


module.exports = {
  reWtiteJson
};