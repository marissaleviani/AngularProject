// src/app/services/item.service.ts
import { Injectable } from '@angular/core';
import { Topics } from '../models/topics';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor() { }

  getTopicLists(): Promise<any[]> {
    return fetch(`${this.baseUrl}/askstories.json?print=pretty`)
      .then(response => response.json())
  }

  getDetailItem(id: number): Promise<Topics[]> {
    return fetch(`${this.baseUrl}/item/${id}.json?print=pretty`)
      .then(response => response.json());
  }

}
