export default class API {
    constructor(url) {
        this.url = url;
    }

    async getData(pathParameters) {
        try {
            const response = await fetch(`${this.url}${pathParameters != null ? `/${pathParameters}` : ''}`, { headers: {
                "Content-Type": "application/json"
                // Você pode adicionar mais cabeçalhos aqui, se necessário
            } });
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (err) {
            console.error('Failed to fetch data: ', err);
        }
    }

    async postData(body) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                    // Você pode adicionar mais cabeçalhos aqui, se necessário
                },
                body: JSON.stringify(body),
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (err) {
            console.error('Failed to fetch data: ', err);
            return null;
        }
    }

    async deleteData(post_id) {
        try {
            const response = await fetch(`${this.url}/${post_id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                    // Você pode adicionar mais cabeçalhos aqui, se necessário
                },
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (err) {
            console.error('Failed to fetch data: ', err);
            return null;
        }
    }
}
