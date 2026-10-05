import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, } from '@angular/material/dialog';
import { GameCardDialog } from '@components';
import { IGameData } from '@interfaces';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  imports: [MatDialogModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
    constructor(private readonly dialog: MatDialog, private readonly overlay: Overlay) {}

    gamesData: IGameData[] = [
      {
        id: 1,
        data: {
          title: 'CURSED RECORDS: APARTMENT 14',
          description: 'You came to Apartment 14 looking for a story. Now you need to find a way out. Explore its rooms, inspect the evidence, and piece together the truth behind a tenant’s disappearance and the ritual left behind.',
          imageUrl: 'assets/images/cursed-records.png',
          genre: 'Horror, Adventure',
          features: [
            { label: 'Platform', value: 'PC' },
            { label: 'Perspective', value: 'First-person' },
            { label: 'Focus', value: 'Story & exploration' },
            { label: 'Status', value: 'In Development' }
          ],
          note: 'Note: This is a work in progress and may change significantly before release.'
        }
      },
      {
        id: 2,
        data: {
          title: 'Funny Riddles',
          description: 'A playful collection of word challenges, visual clues, and clever connections. Discover different puzzle styles as you progress, from finding hidden words to completing a rhyme, with puzzles in Arabic and English.',
          imageUrl: 'assets/images/funny-riddles.png',
          genre: 'Puzzle, Casual',
          features: [
            { label: 'Platform', value: 'Phone & Tablet' },
            { label: 'Perspective', value: '2D' },
            { label: 'Focus', value: 'Puzzle solving' },
            { label: 'Status', value: 'In Development' }
          ],
          note: 'Note: This is a work in progress and may change significantly before release.',
          themeColor: "#82d4cf", // Example theme color for the game
          themeBtnClass: "btn-blue" // Example button class for the game
        }
      }
    ];

    openDialog(gameId: number) {
        const game = this.gamesData.find(g => g.id === gameId);
        if (!game) {
          console.error(`Game with ID ${gameId} not found.`);
          return;
        }

        console.log('Opening dialog...');
        this.dialog.open(GameCardDialog,{
          maxWidth: '90vw',
          maxHeight: '90vh',
          data: game.data,
          scrollStrategy: this.overlay.scrollStrategies.noop(),
        });
      }
}
