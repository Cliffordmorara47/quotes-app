export class Quote {
    public showDetails: boolean;
    constructor(public id: number, public name: string, public quote: string, public author: string, public downVotes: number, public upvotes: number){
        this.showDetails = true;
   }
}
