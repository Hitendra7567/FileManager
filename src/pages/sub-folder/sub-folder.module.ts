import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubFolderPage } from './sub-folder';

@NgModule({
  declarations: [
    SubFolderPage,
  ],
  imports: [
    IonicPageModule.forChild(SubFolderPage),
  ],
})
export class SubFolderPageModule {}
