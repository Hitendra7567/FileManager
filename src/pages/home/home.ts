import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { e } from '@angular/core/src/render3';
import { FileOpener } from '@ionic-native/file-opener';
import { FileServiceProvider } from '../../providers/file-service/file-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dirList: any = [];

  constructor(
    public navParam: NavParams,
    public navCtrl: NavController,
    public file: File,
    public fileOpener: FileOpener,
    public fileService: FileServiceProvider
  ) {
    this.file.listDir(this.file.externalRootDirectory, '')
      .then((list) => {
        list.forEach((element: any) => {
          if (element.name.indexOf(".") != 0) {
            if (element.isDirectory) {
              element['icon'] = "folder";
            } else {
              if (element.name.includes(".jpg")) {
                element['icon'] = "images";
              } else if (element.name.includes(".mp3")) {
                element['icon'] = "musical-note";
              } else if (element.name.includes(".mp4")) {
                element['icon'] = "videocam";
              } else {
                element['icon'] = "document";
              }
            }
            this.dirList.push(element)
          }
        })
      });
  }

  openInternalDir(dir) {
    this.navCtrl.push("SubFolderPage", { data: dir });
  }

}
