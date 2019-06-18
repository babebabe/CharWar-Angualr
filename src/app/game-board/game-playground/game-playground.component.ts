import { GameManagerService } from "./../../services/game-manager.service";
import { Component, OnInit } from "@angular/core";

import{trigger,state,style,animate,transition}from '@angular/animations';

import { EmitService } from "src/app/services/emit.service";
import { EVENT_TYPE } from "src/app/config/game-config";

@Component({
  selector: "game-playground",
  templateUrl: "./game-playground.component.html",
  styleUrls: ["./game-playground.component.scss"],
  animations:[
    trigger('shrinkOut',[
      state('in',style({
        opacity:1
      })),
      transition('* => void',[
        animate(250,style({opacity:0}))
      ])
    ])
  ]
})
export class GamePlaygroundComponent implements OnInit {
  
  public playgroundCards = this.gameManagerService.playgroundCards;
  public candidateCards = this.gameManagerService.candidateCards;

  constructor(
    public emitService: EmitService,
    public gameManagerService: GameManagerService
  ) {}

  ngOnInit() {

    this.emitService.eventEmit.subscribe((value: any) => {
      
      if (value === EVENT_TYPE.playgroundCardsChanged) {
        this.playgroundCards = this.gameManagerService.playgroundCards;
      }
   
      if (value === EVENT_TYPE.candidateCardsChanged) {
        this.candidateCards = this.gameManagerService.candidateCards;
      }
    });

  }

  public clickCard(rowIndex: number, columnIndex: number) {

    this.gameManagerService.clickCard(rowIndex, columnIndex);
  }
}
