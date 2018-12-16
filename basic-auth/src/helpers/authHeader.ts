export function authHeader() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        let user = JSON.parse(userStr);

        if (user && user.authdata) {
            return { 'Authorization': 'Basic ' + user.authdata };
        } else {
            return {};
        }
    }
    else {
        return {};
    }
}