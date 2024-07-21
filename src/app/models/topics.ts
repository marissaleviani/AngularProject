// src/app/models/news-item.ts
export class Topics {
    by: string;
    descendants: number;
    id: number;
    kids: [];
    score: number;
    text: string;
    time: number;
    title: string;
    type: string;
  
    constructor(
        by: string,
        descendants: number,
        id: number,
        kids: any,
        score: number,
        text: string,
        time: number,
        title: string,
        type: string
    ) {
        this.by = by;
        this.descendants = descendants;
        this.id = id;
        this.kids = kids;
        this.score = score;
        this.text =  text;
        this.time = time;
        this.title = title;
        this.type = type;
    }
  }
  