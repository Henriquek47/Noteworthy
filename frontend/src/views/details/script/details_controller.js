export class DetailsController {

    async loadPosts(){
        const posts = await this.apiPosts.getData();
        posts.forEach(async post => {
            createPost(post);
        });
    }

    init(callback) {
        this.handlePayment();
        this.loadPosts();
    }
}
