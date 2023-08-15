import API from "../../../service/data/data";

export class DetailsController {

    constructor() {
        this.apiDetails = new API("http://localhost/post");
    }

    async loadDetails() {
        const details = await this.apiDetails.getData(`${post.id}`);
        createDetails(details);        
    }

    init(callback) {
        this.loadDetails();
    }
}
