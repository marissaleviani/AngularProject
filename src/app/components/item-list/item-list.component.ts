import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { DialogService } from 'src/app/services/dialog.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  stories: number[] = [];
  detailTopic: any[] = [];
  selectedTopic: any;
  span: number = 1;
  isLoading = true;
  errorMsg: string = '';
  loadingLoop = Array(8).fill(0);

  constructor(
    private itemService: ItemService,
    private dialogService: DialogService,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchTopicLists();
  }

  fetchTopicLists(): void {
    this.itemService.getTopicLists()
      .then(results => {
        this.stories = results.slice(0, 20);
        this.fetchDetailTopic();
      })
      .catch(error => {
        this.errorMsg = "Error when fetching topic lists: " + error.message;
        this.isLoading = false;
      });
  }

  fetchDetailTopic(): void {
    this.stories.forEach(topicId => {
      this.itemService.getDetailItem(topicId)
        .then(data => {
          this.detailTopic.push(data);
          this.isLoading = false;
        })
        .catch(error => {
          this.errorMsg = "Error when fetching topic detail information: " + error.message;
          this.isLoading = false;
        })
    })
  }

  setTime(time: number): string {
    return this.globalService.setTime(time * 1000);
  }

  getGroupSpan(index: number): number {
    const groupIndex = Math.floor(index / 4);
    this.span = groupIndex % 2 === 0 ? 2 : 1;
    return this.span;
  }

  onClickDialog(data: any): void {
    this.selectedTopic = { ...data, time: this.globalService.setTime(data.time * 1000) };
    this.dialogService.showDialog();
  }
}