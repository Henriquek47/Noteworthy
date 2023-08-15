import API from "../../../service/data/data";
import { createDetails } from "./detials-view";

export class DetailsController {
    constructor() {
        this.apiDetails = new API("http://localhost/post");
    }

    async loadDetails(){
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        const details = await this.apiDetails.getData(postId);
        createDetails(details);
    }

    init(callback) {
        this.loadDetails();
    }
}
