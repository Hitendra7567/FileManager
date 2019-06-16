import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dirList: any = [];

  constructor(
    public navParam: NavParams,
    public navCtrl: NavController,
    public file: File
  ) {
    this.file.listDir(this.file.externalRootDirectory, '')
      .then((list) => {
        this.dirList = list;
        console.log("Directory Lsit =>", this.dirList);
      });
  }

  openInternalDir(path) {
    this.navCtrl.push("SubFolderPage", { path: path });
  }

}
