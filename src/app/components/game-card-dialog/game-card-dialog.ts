import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { IGameCardDialogData } from '@interfaces';

@Component({
  imports: [NgClass, MatDialogClose],
  selector: 'app-game-card-dialog',
  styleUrl: './game-card-dialog.scss',
  templateUrl: './game-card-dialog.html',
})
export class GameCardDialog {
  readonly data : IGameCardDialogData = inject(MAT_DIALOG_DATA);

  ngOnInit() {
    console.log('Dialog data:', this.data);
  }

  closeDialog() {
    throw new Error('Method not implemented.');
  }
}
