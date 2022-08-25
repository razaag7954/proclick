import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-bulk-profile-popup',
  templateUrl: './add-bulk-profile-popup.component.html',
  styleUrls: ['./add-bulk-profile-popup.component.css']
})
export class AddBulkProfilePopupComponent implements OnInit {

  dropzoneHovered: boolean = false;

  constructor( private dialogRef: MatDialogRef<AddBulkProfilePopupComponent> ) { }

  closeDialog() {
    this.dialogRef.close();
  };

  onDragEnter() {
    this.dropzoneHovered = true;
  };

  ngOnInit(): void {
  };

  files: any[] = [];

  onFileDropped( $event: any ) {
    debugger;
    this.prepareFilesList($event);
  }

  fileBrowseHandler( $event: any ) {
    this.prepareFilesList( $event.target.files );
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  prepareFilesList( files: any ) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
  }

  formatBytes( bytes: any, decimals: any ) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
