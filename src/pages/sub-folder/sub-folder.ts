import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FileServiceProvider } from '../../providers/file-service/file-service';

/**
 * Generated class for the SubFolderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-folder',
  templateUrl: 'sub-folder.html',
})
export class SubFolderPage {
  dirList: any = [];
  dir: any;
  name: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public file: File,
    public fileService: FileServiceProvider
  ) {
    this.dir = this.navParams.get("data");
    this.name = this.dir.name
    console.log("dir =>", this.dir);
    //This is for removing '/' from filePath
    // this.path.substring(1)
    this.fileService.getRootDirectory();
    this.file.listDir(this.file.externalRootDirectory, this.dir.fullPath.substring(1))
      .then((list) => {
        // list.forEach((element: any) => {
        //   if (element.isDirectory) {
        //     this.array.push(element)
        //   }
        // });
        list.forEach((element: any) => {
          if (element.isDirectory) {
            element['icon'] = "folder";
          } else {
            if (element.name.includes("jpg")) {
              element['icon'] = "images";
            } else if (element.name.includes("mp3")) {
              element['icon'] = "musical-note";
            } else if (element.name.includes("mp4")) {
              element['icon'] = "videocam";
            } else {
              element['icon'] = "document";
            }
          }
          this.dirList.push(element)
        })
      });
  }

  openInternalDir(dir) {
    this.navCtrl.push("SubFolderPage", { data: dir });
  }

}
