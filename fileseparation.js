// window.print("Working!!!");
console.log("Working");
const testFolder = 'C:/Users/Nikitha/Downloads/';
const fs = require('fs');
var path = require('path');
var newpdfpath = 'C:/Users/Nikitha/Desktop/DownloadedPdfs/';
var newdocpath = 'C:/Users/Nikitha/Desktop/DownloadedDocs/';
var newimagespath ="C:/Users/Nikitha/Desktop/DownloadedImages/";
var misc = "C:/Users/Nikitha/Desktop/Miscellaneous/"
fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
  var oldpath = testFolder + file;
  var newpdfpath1 = newpdfpath + file;
  var newdocpath1 = newdocpath + file;
  var newimagespath1 = newimagespath +file;
  var misc1 = misc + file;
  var ext = path.extname(file);
  console.log(ext);
  console.log(oldpath);
  if(oldpath){
  if( ext == ".pdf"){
    fs.rename(oldpath, newpdfpath1, function (err) {
        if (err) throw err
        console.log('Successfully organized pdfs')
      })
  }
  else if(ext == ".doc" || ext == ".docx"){
    fs.rename(oldpath, newdocpath1, function (err) {
        if (err) throw err
        console.log('Successfully organized docs')
      })

  }
  else if(ext == ".png" || ext == ".jpg" || ext == ".jpeg"){
    fs.rename(oldpath, newimagespath1, function (err) {
        if (err) throw err
        console.log('Successfully organized docs')
      })
  }
  else{
    fs.rename(oldpath, misc1, function (err) {
        if (err) throw err
        console.log('Successfully organized docs')
      })
  }
}
else{

}
});

