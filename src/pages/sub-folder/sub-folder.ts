import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';

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
  path: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public file: File
  ) {
    this.path = this.navParams.get("path");
    console.log("Path =>", this.path);
    //This is for removing '/' from filePath
    // this.path.substring(1)
    this.file.listDir(this.file.externalRootDirectory, this.path.substring(1))
      .then((list) => {
        this.dirList = list;
        console.log("Sub Directory Lsit =>", this.dirList);
      });
  }

  openInternalDir(path) {
    this.navCtrl.push("SubFolderPage", { path: path });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubFolderPage');
  }

}
