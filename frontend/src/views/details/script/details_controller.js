import API from "../../../service/data/data";
import { createDetails } from "./detials-view";

export class DetailsController {
    constructor() {
        this.apiDetails = new API("http://localhost/post");
        this.apiToken = new API("http://localhost/verify-token");
    }

    async loadDetails(){
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        const userId = urlParams.get('user_id');
        const details = await this.apiDetails.getData(postId);
        createDetails(details);
        const token = await this.apiToken.getData();
        const deleteButton = document.querySelector('.delete');
        if(token['message'] === 'Token is valid.'){
            if(token['user']['id'] === userId || token['user']['id'] === '64dce362753320655c046c37'){
                deleteButton.style.display = 'block';
            }
        }else{
            deleteButton.style.display = 'none';
        }
}

    async deletePost(){
        const self = this;
        document.querySelector('.delete').addEventListener('click', async function (event) {
            console.log('teste');
            const urlParams = new URLSearchParams(window.location.search);
            const postId = urlParams.get('id');
            await self.apiDetails.deleteData(postId).then((value) => {
                window.location.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html';
            });
        })
    }

    async init() {
        await this.loadDetails();
        await this.deletePost();
    }
}
