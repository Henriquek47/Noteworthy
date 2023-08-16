export default class API {
    constructor(url) {
        this.url = url;
    }

    async getData(pathParameters) {
        try {
            const response = await fetch(`${this.url}${pathParameters != null ? `/${pathParameters}` : ''}`, {
                headers: {
                    "Content-Type": "application/json"
                    // Você pode adicionar mais cabeçalhos aqui, se necessário
                },
                cores: true,
                credentials: 'include',
            });
            const responseData = await response.json();
            return responseData;
        } catch (err) {
            console.error('Failed to fetch data: ', err);
            return null;
        }
    }

    async postData(body) {
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                cores: true,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                    // Você pode adicionar mais cabeçalhos aqui, se necessário
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            return responseData;

        } catch (err) {
            console.error('Failed to fetch data: ', err);
            return null;
        }
    }

    async post(body) {
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                    // Você pode adicionar mais cabeçalhos aqui, se necessário
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            return responseData;

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
