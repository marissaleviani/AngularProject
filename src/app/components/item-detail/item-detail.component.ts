import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { dialogAnimation } from 'src/app/dialog.animations';
import { GlobalService } from 'src/app/global.service';
import { DialogService } from 'src/app/services/dialog.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  animations: [dialogAnimation]
})

export class ItemDetailComponent implements OnInit, OnChanges {
  isDialogOpen = false;
  isLoading = true;
  errorMsg: string = '';
  detailComment: any[] = [];
  loadingLoop = Array(2).fill(0);
  @Input() selectedTopic: any;

  constructor(
    private dialogService: DialogService,
    private itemService: ItemService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.dialogService.getDialogState().subscribe((isOpen) => {
      this.isDialogOpen = isOpen;
    });
  }

  ngOnChanges(): void {
    this.fetchDetailTopic();
  }

  fetchDetailTopic(): void {
    if (this.selectedTopic.kids) {
      this.isLoading = true;
      const itemPromises = this.selectedTopic.kids.map((commentId: number) => this.itemService.getDetailItem(commentId));
      Promise.all(itemPromises)
        .then(data => {
          let results = data.filter(comment => comment.dead == undefined && comment.deleted == undefined)
          this.detailComment.push(...results);
          this.isLoading = false;
        })
        .catch(error => {
          this.errorMsg = "Error when fetch comment lists: " + error.message;
          this.isLoading = false;
        })
    } else {
      this.isLoading = false;
    }
  }

  setTime(time: number): string {
    return this.globalService.setTime(time * 1000);
  }

  onCloseDialog() {
    this.detailComment = [];
    this.dialogService.hideDialog();
  }
}
